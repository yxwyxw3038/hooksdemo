import {initBtnList,initDateTime,initIPaginationInfo, initMenuCascader} from '../Init/Init';
import { IBtn, IOptions } from '../Interface/Interface';
// tslint:disable-next-line:ordered-imports
import {  IFlow, IFlowBillEditInfo, IFlowBillForm, IFlowBillInfo, IFlowStep, IFlowView } from '../Interface/InterfaceFlowBill';
export const initStepTypeOptions:IOptions[]=[
    {
    value: '1',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '单人审批'
  }, {
    value: '2',
    // tslint:disable-next-line:object-literal-sort-keys
    label: '多人审批'
  }]
export const initFlow:IFlow={
    ID:'',
    No:'',
    // tslint:disable-next-line:object-literal-sort-keys
    Description:'',
    MenuId:'',
    Notes:'',
    Status:0,
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:''
  
}
export const initFlowView:IFlowView={
  ID:'',
  No:'',
  // tslint:disable-next-line:object-literal-sort-keys
  Description:'',
  MenuId:'',
  Notes:'',
  Status:0,
  CreateTime:'',
  CreateBy:'',
  UpdateTime:'',
  UpdateBy:'',
  MenuCode:'',
  MenuName:'',
  StepNum:1
}
export const initFlowStep:IFlowStep[]=[{
    ID:'',
    // tslint:disable-next-line: object-literal-sort-keys
    FlowId:'',
    Notes:'',
    // tslint:disable-next-line:object-literal-sort-keys
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:'',
    StepNum:1,
    StepType:1
},{
    ID:'',
    // tslint:disable-next-line:object-literal-sort-keys
    FlowId:'',
    Notes:'',
    // tslint:disable-next-line:object-literal-sort-keys
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:'',
    StepNum:2,
    StepType:1
}]
export const initIFlowBillForm:IFlowBillForm={
    Flow:initFlowView,
    FlowStep:initFlowStep,
    FlowStepUser:[]
}
export const initFlowBillInfo:IFlowBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchNo:'',
    searchDescription:'',
    searchStatus:'',
    searchMenuName:'',
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
    form:initIFlowBillForm,
    dialogCode:'',
    menuCascader:initMenuCascader
 
}
export const initBtnEditList:IBtn[]=[
   
        {// tslint:disable-next-line:object-literal-sort-keys
            title: '保存', key: 'save',icon:'cloud-upload',disabled:false
        },
          {// tslint:disable-next-line:object-literal-sort-keys
            title: '作废', key: 'depose',icon:'delete',disabled:false
        },
          {// tslint:disable-next-line:object-literal-sort-keys
            title: '启用', key: 'accept',icon:'security-scan',disabled:false
        },
        {// tslint:disable-next-line:object-literal-sort-keys
          title: '禁用', key: 'stop',icon:'stop',disabled:false
        },
        {// tslint:disable-next-line:object-literal-sort-keys
          title: '上一步', key: 'up',icon:'up',disabled:false
        },
        {// tslint:disable-next-line:object-literal-sort-keys
        title: '下一步', key: 'down',icon:'down',disabled:false
        },
        {// tslint:disable-next-line:object-literal-sort-keys
        title: '向前插入', key: 'insertLast',icon:'swap-left',disabled:false
        },
        {// tslint:disable-next-line:object-literal-sort-keys
        title: '向后插入', key: 'inserNext',icon:'swap-right',disabled:false
        },
        {// tslint:disable-next-line:object-literal-sort-keys
        title: '删除当前步骤', key: 'deleteStep',icon:'minus',disabled:false
        }
    
  ]
export const initFlowBillEditInfo:IFlowBillEditInfo={
    disabled:false,
    modify:false,
    // tslint:disable-next-line:object-literal-sort-keys
    loading:false,
    current:0,
    // tslint:disable-next-line:object-literal-sort-keys
    btnList:initBtnEditList,
    showUserItem:[]
}