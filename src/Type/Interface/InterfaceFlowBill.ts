import {IBtn,IPaginationInfo, IUserTreeSelect} from '../Interface/Interface'

  export interface IFlowBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchNo:string | undefined;
    searchDescription:string | undefined;
    searchStatus:string | undefined;
    searchMenuName:string | undefined;
    searchUpdateTime:string[];
    loading:boolean;
    paginationInfo:IPaginationInfo;
    btnList:IBtn[]
    data:any,
    selectedRowKeys:string[],
    selectedRows:any,
    parameterStr:string | undefined;
    dialogEditOrNew:number;
    dialogEditTitle:string | undefined;
    dialogEditVisible:boolean;
    form:IFlowBillForm;
    dialogCode:string | undefined;
    menuCascader:[];
  }
  export interface IFlow {
 
    ID:string | undefined,
    No:string | undefined,
    Description:string | undefined,
    MenuId:string | undefined,
    Notes:string | undefined,
    Status:number,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined
   
  }
  export interface IFlowView {
 
    ID:string | undefined,
    No:string | undefined,
    Description:string | undefined,
    MenuId:string | undefined,
    Notes:string | undefined,
    Status:number,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined,
    MenuCode:string | undefined,
    MenuName:string | undefined,
    StepNum:number
  }
  export interface IFlowStep {
 
    ID:string | undefined,
    FlowId:string | undefined,
    Notes:string | undefined,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined,
    StepNum:number,
    StepType:number,
  }
  export interface IFlowStepUser {
 
    ID:string | undefined,
    FlowId:string | undefined,
    StepId:string | undefined,
    UserId:string | undefined,
    Notes:string | undefined,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined
   
  }
  export interface IFlowStepUserView {
 
    ID:string | undefined,
    FlowId:string | undefined,
    StepId:string | undefined,
    UserId:string | undefined,
    Notes:string | undefined,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined,
    AccountName:string | undefined,
    RealName:string | undefined
  }

  export interface IFlowBillForm {
    Flow:IFlowView,
    FlowStep:IFlowStep[],
    FlowStepUser:IFlowStepUserView[]

  }
  export interface IFlowBillEditInfo
  {
    disabled:boolean,
    modify:boolean,
    loading:boolean,
    current:number,
    btnList:IBtn[],
    showUserItem:IUserTreeSelect[]
  }