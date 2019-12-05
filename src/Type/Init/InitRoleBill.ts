import {initBtnList,initDateTime,initIPaginationInfo} from '../Init/Init';
import { ITreeData } from '../Interface/Interface';
import {IRoleBillForm,IRoleBillInfo} from '../Interface/InterfaceRoleBill';
export const initRoleBillForm:IRoleBillForm={
    ID:'',
    Name:'',
    // tslint:disable-next-line:object-literal-sort-keys
    Description:'',
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:''
}
export const initRoleBillInfo:IRoleBillInfo=
{
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchName:"",
    searchUpdateTime:initDateTime,
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
    form:initRoleBillForm,
    dialogSetRoleAuthorizeTitle:"",
    dialogSetRoleAuthorizeVisible:false,
    dialogSetRoleAuthorizeId:"0",
  
}
export const initdataRef:ITreeData={
    id:"-1",
    label:""
  }