import { IBtn } from "./Interface";
import { IMenuBillForm } from "./InterfaceMenuBill";

export type ILoginFromProps = Readonly<{
    form: any
    loading: boolean;
    onHandleSubmit: (arg: any) => void;
  }>;

  export type IBtnProps = Readonly<{
    token:string
    userId:string
    menuId:string
    loading:boolean
    openNum: number
    btnList:IBtn[]
    eventCallback?: (arg: any) => void;
    eventListCallback?:(arg: any) => void;
  }>;

  export type IMenuBillEditProps =Readonly<{
    form: any
    dialogEditOrNew: number
    dialogEditTitle:string
    dialogEditVisible:boolean
    menuCascader:any
    editForm:IMenuBillForm
    eventCallback?:(arg:boolean) =>void
  }>;