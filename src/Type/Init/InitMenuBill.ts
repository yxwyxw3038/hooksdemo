import {initBtnList,initDateTime,initIPaginationInfo, initMenuCascader} from '../Init/Init';
import {IMenuBillForm,IMenuBillInfo} from '../Interface/InterfaceMenuBill';
export const initMenuBillForm:IMenuBillForm={
    ID:'',
    Name:'',
    ParentId:"0",
    // tslint:disable-next-line:object-literal-sort-keys
    Code:'',
    LinkAddress:'',
    Icon:'',
    Sort: 1,
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:'',
    IsAble:1,
}
export const initMenuBillInfo:IMenuBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchMenuName:"",
    searchParentId:"",
    searchUpdateTime:initDateTime,
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
    form:initMenuBillForm,
    menuButtonTitle:"",
    menuButtonVisible:false,
    menuButtonId:"-1",
    menuCascader:initMenuCascader
}
