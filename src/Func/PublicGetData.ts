
import api from '../Api/myaxios';
import { SelectCallback } from '../Type/Interface/Interface';
export function GetParameter(token:string, code:string,callback:SelectCallback) {
    if (code === null || code === undefined || code=== "") {
        callback(false, '参数为空！',[]);
        return;
    }
    const myapi =  new api();
    myapi.post('Parameter/GetParameterSelect?Token='+token, {
         Code:code}, (response: any) => {
        if (response.status >= 200 && response.status < 300) {
            if (response.data) {
                const jsonData = response.data ;
                if (jsonData.Code === '1') {
                    if(jsonData.Data === null || jsonData.Data === undefined || jsonData.Data=== "")
                    {
                        callback(true, 'Ok',[]);
                        return;
                    }
                    else{
                        const info=JSON.parse(jsonData.Data);
                        callback(true, 'Ok',info);
                        return;
                    }
                       
                } else {
                callback(false, jsonData.Message,[]);
                return;
                }
            }
            } else {
                callback(false, response.Message,[]);
                return;
            }

        });
   
}
export function TimeoutPromise(ms:number) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }