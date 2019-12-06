import { IBtn } from "../Type/Interface/Interface";
export function SetDisabled(btnList:IBtn[]):IBtn[]
{
  return btnList.map((item:IBtn)=>({...item,disabled:true}));
}
export function SetDisabledInfo(btnList:IBtn[],stateInfo:any):IBtn[]
{
  return btnList.map((item:IBtn)=>{
    if(!item.key)
    {
      return {...item}
    }
    let bj:boolean=false;
    let disabled:boolean=true;
    for(const x in  stateInfo)
    {
      if(item.key===x)
      {
      
        bj=true;
        disabled=stateInfo[x] ;
      }
     
    }
    if(bj)
    {
      return {...item,disabled};
    }
    return {...item}
   
  });
}export function  changeToCN(num: number): string {
  const words = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  const adds = ["", '十', '百', '千', '万', '亿', '十', '百', '千'];
  if(words[num]){
    return words[num];
  }
  else if(num > 10 && num < 20){
    const numStr = num.toString();
    const  numStr0:string=  numStr.substring(1, 2)
    const   n:number=  parseInt(numStr0);
    const result = adds[1] + words[n];
    return result;
  }
  else if(num > 10){
    let result = "";
    const numStr = num.toString();
    for (let i = 0; i < numStr.length; ++i) {
      const numStr0:string = numStr.substring(i, i+1);
      const   n:number=  parseInt(numStr0);
      const m = numStr.length - i - 1;
      result += words[n] + adds[m];
    }
    return result;
  }
  else { return "零"; }
}

 

