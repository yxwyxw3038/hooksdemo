import { IUserInfo, IOptions, ITreeData, ITreeNode, IPaginationInfo, ITextInfo, IBtn } from "../Interface/Interface";
export const initDemoName:string="React框架";
export const initBasicUrl="http://106.52.17.151:8080";
export const initBasicUrlDev="http://127.0.0.1:8080";
export const initAesKey:string="gogogogogogogogo";
export const initAesIV:string="npnpnpnpnpnpnpnp";
export const initIUserInfo:IUserInfo={
    ID:"",
    // tslint:disable-next-line:object-literal-sort-keys
    AccountName:"",
    RealName:"",
    CreateTime:"",
    Token:""
}
export const initMenu:any=[
    {
      "ID": "10001",
      // tslint:disable-next-line:object-literal-sort-keys
      "Icon": "el-icon-setting",
      "Url": null,
      // tslint:disable-next-line:object-literal-sort-keys
      "ParentId": "10001",
      "MenuName": "初始大菜单1",
      "Node": [
        {
          "ID": "10101",
          // tslint:disable-next-line:object-literal-sort-keys
          "Icon": "el-icon-menu",
          "Url": "MenuBill",
          // tslint:disable-next-line:object-literal-sort-keys
          "ParentId": "1",
          "MenuName": "初始菜单1",
          "Node": []
        },
        {
          "ID": "10102",
          // tslint:disable-next-line:object-literal-sort-keys
          "Icon": "el-icon-view",
          "Url": "UserBill",
          // tslint:disable-next-line:object-literal-sort-keys
          "ParentId": "10001",
          "MenuName": "初始菜单2",
          "Node": []
        }
      ]
    },
    {
      "ID": "10002",
      // tslint:disable-next-line:object-literal-sort-keys
      "Icon": "el-icon-setting",
      "Url": null,
      // tslint:disable-next-line:object-literal-sort-keys
      "ParentId": "0",
      "MenuName": "初始大菜单2",
      "Node": []
    }
  ]
  export const initTabs:any=[
    {
        // tslint:disable-next-line:object-literal-sort-keys
        title: '首页', key: '0',content:'Test' ,closable: false,icon:'home'
      }
    
  ]
  export const initBtnList:IBtn[]=[
    {
        // tslint:disable-next-line:object-literal-sort-keys
        title: '无权限', key: '0000',icon:'home'
      }
    
  ]

  export const initITextInfo:ITextInfo={
    inputtext:""
  }
 
  export const initIPaginationInfo:IPaginationInfo={
    currentPage:1,
    currentpagesize:10,
    totalCount:10,
  }
  export const initIPaginationInfo0:IPaginationInfo={
    currentPage:1,
    currentpagesize:20,
    totalCount:10,
  }
  // export const initDateTime:string[]=[moment().format('YYYY-MM-DD')+' 00:00:00', moment().format('YYYY-MM-DD')+' 23:59:59'];

  export const initDateTime:string[]=['',''];
  
  export const AppDateTimeFormat:string="YYYY-MM-DD HH:mm:ss";

  export const initPageSizeOptions:string[]=['10','20','50','100'];
  export const initMenuCascader:any=[
    {
    "value":"0",
    // tslint:disable-next-line:object-literal-sort-keys
    "label":"菜单根节点",
    "children":[]
    }
  ]
  export const initOptions0:IOptions[]=[
    {
      value: '',
      // tslint:disable-next-line:object-literal-sort-keys
      label: ''
    },
    {
      value: '1',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '是'
    }, {
      value: '0',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '否'
    }]
    export const initOptions:IOptions[]=[
      {
        value: '1',
      // tslint:disable-next-line:object-literal-sort-keys
      label: '是'
      }, {
        value: '0',
      // tslint:disable-next-line:object-literal-sort-keys
      label: '否'
      }]
      export const initTreeData:ITreeData[]=
      [
      {
        id:"0",
        label:"根结点",
      }
    ]
    export const initTreeNode:ITreeNode[]=
    [
      {
  
       
        key:'',
        title:'',
        value:'',
   
      }
    ]
    export const initBillStatusOptions:IOptions[]=[
      {
      value: '0',
      // tslint:disable-next-line:object-literal-sort-keys
      label: '未启用'
    }, {
      value: '1',
      // tslint:disable-next-line:object-literal-sort-keys
      label: '启用'
    }, {
      value: '-1',
      // tslint:disable-next-line:object-literal-sort-keys
      label: '作废'
    }]
  export const initBillStatusOptions0:IOptions[]=[
    {
    value: '0',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '录入'
  }, {
    value: '5',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '审核'
  },
   {
    value: '-1',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '作废'
  }]
  export const initBillStatusOptions1:IOptions[]=[
    {
    value: '0',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '录入'
  }, {
    value: '5',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '提交'
  }, {
    value: '6',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '审批中'
  }, {
    value: '9',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '结案'
  },
   {
    value: '-1',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '作废'
  }]
  