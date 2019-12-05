import { IBtn, IOptions } from '../Interface/Interface';
import { IMsgInfo, INoticeBillEditInfo, INoticeBillForm, INoticeBillFormItem, INoticeBillFormShowItem, INoticeBillInfo } from '../Interface/InterfaceNoticeBill';
import {initBtnList,initDateTime,initIPaginationInfo} from './Init';
export const initNoticeftypeOptions:IOptions[]=[
    {
    value: '0',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '系统通知'
  }, {
    value: '1',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '消息通知'
  }
]
export const initNoticeBillForm:INoticeBillForm={
    ID :'',
    No :'',
    TypeId :1,
    // tslint:disable-next-line:object-literal-sort-keys
    Title :'',
    Content :'',
    Notes :'',
    CreateTime :'',
    CreateBy :'',
    UpdateTime :'',
    UpdateBy :'',
    Status :0,
    NoticeTime :'',
    SendBeginTime :'',
    SendEndTime :''
}
export const initNoticeBillList:IMsgInfo[]=[]
export const initNoticeBillFormShowItem:INoticeBillFormShowItem[]=[{
    ID :'',
    // tslint:disable-next-line:object-literal-sort-keys
    NoticeId :'',
    // tslint:disable-next-line:object-literal-sort-keys
    AccountName:'',
    RealName:'',
    UserId :'',
    CreateTime :'',
    CreateBy :'',
    UpdateTime :'',
    UpdateBy :'',
    SendFlag :0,
    SendTime :''
}]
export const initNoticeBillFormItem:INoticeBillFormItem[]=[{
    ID :'',
    // tslint:disable-next-line:object-literal-sort-keys
    NoticeId :'',
    UserId :'',
    // tslint:disable-next-line:object-literal-sort-keys
    CreateTime :'',
    CreateBy :'',
    UpdateTime :'',
    UpdateBy :'',
    SendFlag :0,
    SendTime :''
}]
export const initNoticeBillInfo:INoticeBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchNo:"",
    searchStatus:"",
    searchTypeId:"",
    searchCreateTime:initDateTime,
    // tslint:disable-next-line:object-literal-sort-keys
    loading:false,
    paginationInfo:initIPaginationInfo,
    btnList:initBtnList,
    data:[],
    selectedRowKeys:[],
    selectedRows:[],
    parameterStr:"",
    dialogEditOrNew:3,
    dialogEditTitle:"",
    dialogEditVisible:false,
    dialogCode:""
 
}
export const initBtnEditList:IBtn[]=[
    {// tslint:disable-next-line:object-literal-sort-keys
        title: '设置通知用户', key: 'user',icon:'setting',disabled:false
      },
        {// tslint:disable-next-line:object-literal-sort-keys
            title: '保存', key: 'save',icon:'cloud-upload',disabled:false
        },
          {// tslint:disable-next-line:object-literal-sort-keys
            title: '删除', key: 'delete',icon:'delete',disabled:false
        },
          {// tslint:disable-next-line:object-literal-sort-keys
            title: '确认', key: 'accept',icon:'security-scan',disabled:false
        },
          {// tslint:disable-next-line:object-literal-sort-keys
            title: '作废', key: 'depose',icon:'close-circle',disabled:false
        },
         {// tslint:disable-next-line:object-literal-sort-keys
            title: '发起流程', key: 'process',icon:'close-circle',disabled:false
        }
    
  ]
export const initNoticeBillEditInfo:INoticeBillEditInfo={
    disabled:false,
    modify:false,
    // tslint:disable-next-line:object-literal-sort-keys
    loading:false,
    // tslint:disable-next-line:object-literal-sort-keys
    btnList:initBtnEditList,
    form:initNoticeBillForm,
    formShowItem:[],
    formItem:[]

}
