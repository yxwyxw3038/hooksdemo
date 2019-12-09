import React, { useState, useContext, useEffect } from "react";
// import api from '../../Api/myaxios';
import '../../App.css';
import '../../Css/Bill.css';
import api from '../../Api/myaxios';
import { MyContext } from "../../Store/HookStore";
import { message, Modal, Button, Collapse, Form, Row, Col, Input, DatePicker, Table } from "antd";
import { IBtn, IParameter } from "../../Type/Interface/Interface";
import { initMenuBillForm } from "../../Type/Init/InitMenuBill";
import { TimeoutPromise } from "../../Func/PublicGetData";
import { initMenuCascader, initPageSizeOptions, AppDateTimeFormat } from "../../Type/Init/Init";
import moment from "moment";
import BtnGroup from "../Component/BtnGroup";
import MenuBillEdit from "./MenuBillEdit";
import SetMenuButton from "./SetMenuButton";
function MenuBill (props: any) {
    console.log(props)
    const {user_info,menu_bill_info} = useContext(MyContext);
    const [beginCount]=useState(0)
    const [menuId]=useState(props.menuId)
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
                        myinfo.loading=true
                        myinfo.form={...tempdata}
                        myinfo.dialogEditOrNew=3
                        myinfo.dialogEditTitle="查看菜单"
                        myinfo.dialogEditVisible=true
                        setInfo({...info,...myinfo})
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
         deleteBegin();
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
         message.error("请选择要赋权的菜单！")
         return;
     }
     if(myinfo.selectedRowKeys.length>1)
     {
         message.error("请只选择一条要赋权的菜！")
         return;
     }
     myinfo.loading=true
     myinfo.menuButtonId=myinfo.selectedRowKeys[0]
     myinfo.menuButtonTitle="修改-"+myinfo.selectedRows[0].Name+"-按钮信息"
     myinfo.menuButtonVisible=true
     setInfo({...myinfo})
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
                 myinfo.loading=true
               
                 myinfo.form={...tempdata}
                 myinfo.dialogEditOrNew=2
                 myinfo.dialogEditTitle="修改菜单"
                 myinfo.dialogEditVisible=true
                 setInfo({...myinfo})
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
                 myinfo.loading=true
                 myinfo.dialogEditOrNew=1
                 myinfo.dialogEditTitle="新增菜单"
                 myinfo.dialogEditVisible=true
                 setInfo({...myinfo})
             }
             else
             {
                
                 message.error("加载异常！")
            
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
    const rowSelection = {
      
        selectedRowKeys:info.selectedRowKeys,
        // tslint:disable-next-line:object-literal-sort-keys
        onChange: (selectedRowKeys:any, selectedRows:any) => {
            const myinfo={...info}
            myinfo.selectedRowKeys=selectedRowKeys;
            myinfo.selectedRows=selectedRows;
            setInfo({...myinfo})
        }
    };
    const  pagination ={
        
        current:info.paginationInfo.currentPage,
        showQuickJumper:true,
        // tslint:disable-next-line:object-literal-sort-keys
        // defaultCurrent:1,
        total:info.paginationInfo.totalCount,
        // tslint:disable-next-line:object-literal-sort-keys
        pageSizeOptions:[...initPageSizeOptions],
        // hideOnSinglePage:true,
        showSizeChanger:true,
        pageSize:info.paginationInfo.currentpagesize,
        onChange:(pageNumber:any)=>
        {
            const myinfo={...info}
            myinfo.paginationInfo.currentPage=pageNumber;
            setInfo({...myinfo})
            asyncInit()

        },
        onShowSizeChange:(page:any, pageSize:any)=>
        {
            const myinfo={...info}
            myinfo.paginationInfo.currentPage=page;
            myinfo.paginationInfo.currentpagesize=pageSize;
            setInfo({...myinfo})
            asyncInit()
        },
        showTotal: (total:any)=> {
            return `合计共： ${total} 条`;
        },
        
    }
        const initColumnList=
        [
            //   {
            //       title: '菜单ID',
            //       // tslint:disable-next-line:object-literal-sort-keys
            //       dataIndex: 'ID',
            //       key: 'ID',
            //       width: 200,
            //     },
                {
                title: '菜单名称',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'Name',
                key: 'Name',
                width: 150,
                }, {
                title: '父节点',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'ParentName',
                key: 'ParentName',
                width: 150,
                }, {
                title: '标识码',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'Code',
                key: 'Code',
                }
                , {
                title: '链接地址',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'LinkAddress',
                key: 'LinkAddress',
                }, {
                title: '图标',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'Icon',
                key: 'Icon',
                }, {
                title: '排序',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'Sort',
                key: 'Sort',
                }, {
                title: '修改时间',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'UpdateTime',
                key: 'UpdateTime',
                }, {
                title: '修改人',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'UpdateBy',
                key: 'UpdateBy',
                },
                {
                title: '查看',
                // tslint:disable-next-line:object-literal-sort-keys
                dataIndex: 'ID',
                key: 'opt',
                // tslint:disable-next-line:jsx-no-lambda
                render: (text:any) => <Button size="small"  shape="circle" icon="search" key={text} onClick={()=>{onLookClick(text) }} />
                }
        ]

    useEffect(() => {
        //更新数据致全局数据缓存
        // menu_bill_info.Data.Update(info)
    return () => {
        //每次页面注销将数据更新至mobx
        menu_bill_info.Data.Update(info)
    }},[info,menu_bill_info.Data]
    )
    if(beginCount===0) {
        GetMenu();
    }
    return (     <div>
        <Collapse accordion={true} activeKey={info.collapseActiveKey} onChange={onCollapseChange}>
        <Collapse.Panel header="查询条件" key="1">
        <Form  className="ant-advanced-search-form" >
        <Row>
         <Col span={6}>
         <Form.Item className="ant-form-item" label="菜单名称："> 
         <Input placeholder="请输入菜单名称" data-item-name="searchMenuName" value={info.searchMenuName} onChange={onChange}/>
         </Form.Item>
         </Col>
         {/* <Col span={6}>
         <Form.Item className="ant-form-item"  label="上级节点ID："> 
         <Input placeholder="请输入上级节点"  data-item-name="searchParentId" value={this.state.info.searchParentId} onChange={this.onChange}/>
         </Form.Item>
        </Col> */}
        <Col span={12}>
        <Form.Item className="ant-form-item"  label="修改日期："> 
        {info.searchUpdateTime[0]===""||info.searchUpdateTime[1]==="" ? <DatePicker.RangePicker  ranges={{ '今日': [moment(), moment()], '本月': [moment().startOf('month'), moment().endOf('month')] }}
         showTime={true} format={AppDateTimeFormat}  onChange={onDateChange}
        />:
        <DatePicker.RangePicker  defaultValue={[moment(info.searchUpdateTime[0],AppDateTimeFormat),moment(info.searchUpdateTime[1],AppDateTimeFormat)]} ranges={{ '今日': [moment(), moment()], '本月': [moment().startOf('month'), moment().endOf('month')] }}
         showTime={true} format={AppDateTimeFormat}  onChange={onDateChange}
        />
         }
        </Form.Item>
        </Col>
        </Row>
        </Form>
        </Collapse.Panel>
      
        </Collapse>
        <BtnGroup openNum={info.openNum} token={user_info.Data.GetInfo.Token} 
        userId={user_info.Data.GetInfo.ID} menuId={menuId} 
        loading={info.loading} btnList={info.btnList}
        eventCallback={btnGroupCallback} eventListCallback={btnGroupListCallback}/>
        <Table rowSelection={rowSelection} pagination={pagination} columns={initColumnList} dataSource={info.data} rowKey="ID" loading={info.loading} />
        <MenuBillEdit  dialogEditOrNew={info.dialogEditOrNew}
        dialogEditTitle={info.dialogEditTitle} dialogEditVisible={info.dialogEditVisible} editForm={info.form} menuCascader={info.menuCascader}
        eventCallback={editCallback}/>
        <SetMenuButton menuId={info.menuButtonId}  dialogEditTitle={info.menuButtonTitle}  dialogEditVisible={info.menuButtonVisible} eventCallback={menuButtonCallback}/>
        </div>)
}
export default React.memo(MenuBill);