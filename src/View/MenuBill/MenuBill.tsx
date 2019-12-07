import React, { useState, useContext, useEffect } from "react";
// import api from '../../Api/myaxios';
import '../../App.css';
import '../../Css/Bill.css';
import api from '../../Api/myaxios';
import { MyContext } from "../../Store/HookStore";
import { message, Modal } from "antd";
import { IBtn, IParameter } from "../../Type/Interface/Interface";
import { initMenuBillForm } from "../../Type/Init/InitMenuBill";
import asyncComponent from '../Component/AsyncComponent';
import { async } from "q";
import { TimeoutPromise } from "../../Func/PublicGetData";
import { initMenuCascader } from "../../Type/Init/Init";
function MenuBill (props: any) {
    const {user_info,menu_bill_info} = useContext(MyContext);
    const [beginCount,setBeginCount]=useState(0)
    const [info,setInfo]=  menu_bill_info.Data.GetInfo
    const onLookClick=(Id:any)=>
    {
     const myinfo={...info}; 
    
     const myapi =  new api();
     myapi.post("Menu/GetMenuByID?Token="+user_info.Data.GetInfo.Token,{
         ID:Id
       }, (response: any) => {
            if (response.status >= 200 && response.status < 300) {
            if (response.data) {       
            
                const jsonData =  response.data ;
                if (jsonData.Code === '1') {
                    if (jsonData.Data) {
                        const tempdata=JSON.parse(jsonData.Data);
                        myinfo.loading=true;
                        myinfo.form={...tempdata};
                        myinfo.dialogEditOrNew=3,
                        myinfo.dialogEditTitle="查看菜单";
                        myinfo.dialogEditVisible=true;
                        setInfo({...info,...myinfo});
                    }
                    else
                    {   
                        message.error("加载异常！");
                        return;
                    }
                } else {
                message.error(jsonData.Message);
                return;
                }
            }
            } else {
                message.error(response.message);
                return;
            }
        
        });
    }
    const menuButtonCallback=()=>
    {
         const myinfo={...info} 
         myinfo.loading=false
         myinfo.menuButtonId="-1"
         myinfo.menuButtonTitle=""
         myinfo.menuButtonVisible=false
         setInfo({...myinfo});
    }
    const editCallback = (closeStatus:boolean)=>
    {
     const myinfo={...info} 
     myinfo.loading=false;
     myinfo.dialogEditTitle="";
     myinfo.dialogEditVisible=false;
     setInfo({...myinfo});
     if(closeStatus)
     {
         Init()
         GetMenu()
     }
    }
    const btnGroupListCallback= (btnList :IBtn[]) => {
     const myinfo={...info}
     myinfo.btnList=btnList;
     setInfo({...myinfo});
    }
    const btnGroupCallback= (key :string) => {
     switch(key)
     {
         case 'search':
         search();
         break;
         case 'add':
         add();
         break;
         case 'edit':
         edit();
         break;
         case 'delete':
         delete();
         break;
         case 'setmenubutton':
         setmenubutton();
         break;
         default:
         message.info(key);
         break;
 
     }
      
   
   }
   const  setmenubutton=()=>
   {
    const myinfo={...info} 
     if(myinfo.selectedRowKeys.length<=0)
     {
         message.error("请选择要赋权的菜单！");
         return;
     }
     if(myinfo.selectedRowKeys.length>1)
     {
         message.error("请只选择一条要赋权的菜！");
         return;
     }
     myinfo.loading=true;
     myinfo.menuButtonId=myinfo.selectedRowKeys[0],
     myinfo.menuButtonTitle="修改-"+myinfo.selectedRows[0].Name+"-按钮信息";
     myinfo.menuButtonVisible=true;
     setInfo({...myinfo});
   }
   const deleteBegin=()=>
   {
 
    const myinfo={...info} 
    
     if(myinfo.selectedRowKeys.length<=0)
     {
         message.error("请选择要删除的数据！");
         return;
     }
     Modal.confirm({
         title: '警告！',
         // tslint:disable-next-line:object-literal-sort-keys
         content: '此操作将永久删除数据, 是否继续?',
         okText: '是',
         okType: 'danger',
         cancelText: '否',
         onOk:deleteNext
     })
  
   }
   const deleteNext=()=>
   {
     const myinfo={...info} 
     const myapi =  new api();
     let str='';
     const maxid=myinfo.selectedRowKeys.length-1;
      for(let i=0;i< myinfo.selectedRowKeys.length;i++)
      {
       
        if(i===maxid)
        {
        str=str+myinfo.selectedRowKeys[i].toString();
        }
        else{
              str=str+myinfo.selectedRowKeys[i].toString()+',';
        }
       
      }
     myinfo.loading=true;
     setInfo({...myinfo});
     myapi.post("Menu/DeleteMenu?Token="+user_info.Data.GetInfo.Token,{
       
         // tslint:disable-next-line:object-literal-sort-keys
         str
       }, (response: any) => {
         myinfo.loading=false;
         setInfo({...myinfo});
     if (response.status >= 200 && response.status < 300) {
     if (response.data) {       
         // tslint:disable-next-line:no-eval
         const jsonData = response.data ;
         if (jsonData.Code === '1') {
             message.info("删除成功！");
             myinfo.selectedRowKeys=[];
             setInfo({...myinfo});
             search();
             GetMenu();
         } else {
         message.error(jsonData.Message);
         return;
         }
     }
     } else {
         message.error(response.message);
         return;
     }
 
 });
 
 }
   
 const edit=()=>
   {
 
    const myinfo={...info}
     if(myinfo.selectedRowKeys.length<=0)
     {
         message.error("请选择要修改的数据！");
         return;
     }
     if(myinfo.selectedRowKeys.length>1)
     {
         message.error("请只选择一条要修改的数据！");
         return;
     }
     const myapi =  new api();
     myapi.post("Menu/GetMenuByID?Token="+user_info.Data.GetInfo.Token,{
         ID: myinfo.selectedRowKeys[0]
       }, (response: any) => {
     if (response.status >= 200 && response.status < 300) {
     if (response.data) {       
         const jsonData =  response.data ;
         if (jsonData.Code === '1') {
             if (jsonData.Data) {
                 const tempdata=JSON.parse(jsonData.Data);
                 myinfo.loading=true;
               
                 myinfo.form={...tempdata};
                 myinfo.dialogEditOrNew=2,
                 myinfo.dialogEditTitle="修改菜单";
                 myinfo.dialogEditVisible=true;
                 setInfo({...myinfo});
             }
             else
             {   
                 message.error("加载异常！");
                 return;
             }
         } else {
         message.error(jsonData.Message);
         return;
         }
     }
     } else {
         message.error(response.message);
         return;
     }
 
 });
     
   }
   const add=()=>
   {
     const myinfo={...info}
     const myapi =  new api();
     myapi.post("Menu/GetMenuAllCount?Token="+user_info.Data.GetInfo.Token,{
       }, (response: any) => {
     if (response.status >= 200 && response.status < 300) {
     if (response.data) {       
         const jsonData =  response.data;
         if (jsonData.Code === '1') {
             if (jsonData.Data) {
                 myinfo.form={
                   
                     ...initMenuBillForm,
                     Sort:   Number(jsonData.Data)+1
 
                 }
                 myinfo.loading=true;
                 myinfo.dialogEditOrNew=1,
                 myinfo.dialogEditTitle="新增菜单";
                 myinfo.dialogEditVisible=true;
                 setInfo({...myinfo});
             }
             else
             {
                
                 message.error("加载异常！");
            
                 return;
             }
         } else {
       
         message.error(jsonData.Message);
       
         return;
         }
     }
     } else {
         message.error(response.message);
         return;
     }
 
 });
 
 
 
    
   }
   const search=()=>
   {
 
     // tslint:disable-next-line:prefer-const
       let BillParameter:IParameter[]=[];
    
      // tslint:disable-next-line:no-empty
      if (info.searchMenuName === null || info.searchMenuName === undefined ||info.searchMenuName === "") {
   
      }
      else{
          // tslint:disable-next-line:no-shadowed-variable
          const parameter:IParameter={
          action : "like",
          column :"Name",
          dataType:"S",
          logic :"AND",
          value : info.searchMenuName,
         }
          BillParameter.push(parameter);
 
      }
     // tslint:disable-next-line:no-empty
     if (info.searchParentId === null || info.searchParentId === undefined || info.searchParentId === "") {
 
      }
      else{
         // tslint:disable-next-line:no-shadowed-variable
         const parameter:IParameter={
             action : "=",
             column :"ParentId",
             dataType:"S",
             logic :"AND",
             value : info.searchParentId,
            }
             BillParameter.push(parameter);
          
 
      }
      
   // tslint:disable-next-line:no-empty
     if (info.searchUpdateTime === null || info.searchUpdateTime === undefined || info.searchUpdateTime.length <=0||info.searchUpdateTime[0]===""||info.searchUpdateTime[1]==="") {
 
      }
      else{
         // tslint:disable-next-line:no-shadowed-variable
             let parameter:IParameter={
             action : ">=",
             column :"UpdateTime",
             dataType:"D",
             logic :"AND",
             value : info.searchUpdateTime[0],
             }
             BillParameter.push(parameter);
     
              parameter={
                 action : "<=",
                 column :"UpdateTime",
                 dataType:"D",
                 logic :"AND",
                 value : info.searchUpdateTime[1],
                 }
                 BillParameter.push(parameter);
 
      }
      const myinfo={...info}
      myinfo.parameterStr=JSON.stringify(BillParameter);
      myinfo.paginationInfo.currentPage=1;
      setInfo({...myinfo})
      asyncInit()
    
   }
   const asyncInit= async () =>{

        TimeoutPromise(500).then(()=>{ Init() })
   } 
   const Init=()=>
   {
         const myapi =  new api();
         const myinfo={...info}
         myinfo.loading=true;
         setInfo({...myinfo});
         myapi.post("Menu/GetAllMenuViewInfo?Token="+user_info.Data.GetInfo.Token,{
            
             CurrentPage: myinfo.paginationInfo.currentPage,
             PageSize: myinfo.paginationInfo.currentpagesize,
             ParameterStr: myinfo.parameterStr,
   
           }, (response: any) => {
             myinfo.paginationInfo.totalCount=0;
             myinfo.loading=false;
         if (response.status >= 200 && response.status < 300) {
         if (response.data) {
            
             const jsonData: any = response.data;
             if (jsonData.Code === '1') {
                 if(jsonData.DataCount)
                 {
                     // tslint:disable-next-line:radix
                     myinfo.paginationInfo.totalCount= parseInt(jsonData.DataCount);
                 }
               
                 if (jsonData.Data) {
                    
                     const info=JSON.parse(jsonData.Data);
                     if(info&&info.length>0)
                     {
                         myinfo.data=info;
                     }
                     else{
                         myinfo.data=[];
                      
                     }
 
                     setInfo({...myinfo})
 
                 }
                 else
                 {
                    
                     message.error("加载异常！");
                     myinfo.data=[];
                     setInfo({...myinfo})
                     return;
                 }
             } else {
           
             message.error(jsonData.Message);
             myinfo.data=[];
             setInfo({...myinfo})
             return;
             }
         }
         } else {
             message.error(response.message);
             myinfo.data=[];
             setInfo({...myinfo})
             return;
         }
 
     });
   }
    const onChange= (e :any) => {
      const itemName= e.target.getAttribute("data-item-name")
      const myinfo={...info}
      info[itemName]=e.target.value
      setInfo({...myinfo})
    
    }
    const onCollapseChange=(key:any)=> {
    const myinfo={...info}
      myinfo.collapseActiveKey=[key];
     setInfo({...myinfo})
    }
    const onDateChange=(dates :any, dateStrings:any)=> {
     const myinfo={...info}
        myinfo.searchUpdateTime=dateStrings;
        setInfo({...myinfo})
   }
   const GetMenu=()=>
   {
     
       const myapi =  new api();
       myapi.post("Menu/GetCascaderMenu?Token="+user_info.Data.GetInfo.Token,{
         }, (response: any) => {
       
       if (response.status >= 200 && response.status < 300) {
       if (response.data) {       
           // tslint:disable-next-line:no-eval
         //   const jsonData = eval('(' + response.data + ')');
             const jsonData: any = response.data;
           if (jsonData.Code === '1') {
               if (jsonData.Data) {
                   const dataInfo=JSON.parse(jsonData.Data);
                   if(dataInfo&&dataInfo.length>0)
                   {
                       const myinfo={...info}
                       myinfo.menuCascader=dataInfo;
                       setInfo({...myinfo})
                   }
                   else{
                       const myinfo={...info}
                       myinfo.menuCascader=initMenuCascader;
                       setInfo({...myinfo})
                    
                   }
 
               }
               else
               {
                  
                   message.error("加载异常！");
                   const myinfo={...info}
                   myinfo.menuCascader=initMenuCascader;
                   setInfo({...myinfo})
                   return;
               }
           } else {
         
           message.error(jsonData.Message);
                   const myinfo={...info}
                   myinfo.menuCascader=initMenuCascader;
                   setInfo({...myinfo})
                   return;
           }
       }
       } else {
           message.error(response.message);
           const myinfo={...info}
                   myinfo.menuCascader=initMenuCascader;
                   setInfo({...myinfo})
                   return;
       }
 
   });
 
   }
    useEffect(() => {

    return () => {
        menu_bill_info.Data.Update(info)
    }},[]
    )
    return (<div></div>)
}
export default React.memo(MenuBill);