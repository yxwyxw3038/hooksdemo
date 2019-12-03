import * as CryptoJS from 'crypto-js'
import api from '../Api/myaxios'
import { initAesIV,initAesKey,initIUserInfo } from '../Type/Init/Init'
import { IUserInfo, QXCallback } from '../Type/Interface/Interface'
export function PageQx(callback: QXCallback) {
  let userInfo: IUserInfo = initIUserInfo
  let info1 =
    window.localStorage.getItem('newuserInfo') === null
      ? ''
      : window.localStorage.getItem('newuserInfo')
  if (info1) {
    info1 = Decrypt0(info1)
    userInfo = JSON.parse(info1)
    if (!userInfo) {
      callback(false, '登录信息异常!', userInfo)
      return
    }
    //  this.userInfo =toJS((new UserInfoModel(item)));
    if (
      userInfo.Token === null ||
      userInfo.Token === undefined ||
      userInfo.Token === ''
    ) {
      callback(false, '登录Token信息异常!', userInfo)
      return
    }
    const myapi = new api()
    myapi.post(
      'User/GetUserLogininfoByToken?Token=' + userInfo.Token,
      {},
      (response: any) => {
        if (response.status >= 200 && response.status < 300) {
          if (response.data) {
            // tslint:disable-next-line:no-eval
            // const jsonData = eval('(' + response.data + ')');
            const jsonData: any = response.data
            if (jsonData.Code === '1') {
              callback(true, 'Ok', userInfo)
              return
            } else {
              // tslint:disable-next-line:no-console
              console.log(jsonData.Message)
              callback(false, jsonData.Message, userInfo)
              return
            }
          }
        } else {
          // tslint:disable-next-line:no-console
          console.log(response.message)
          callback(false, response.Message, userInfo)
          return
        }
      }
    )
  } else {
    callback(false, '登录信息异常!', userInfo)
    return
  }
}

export function SetLocalStorageUserInfo(userInfo:IUserInfo): void {
  let info1:string=JSON.stringify(userInfo)
  info1=Encrypt0(info1)
  window.localStorage.setItem('newuserInfo',info1);
}
export function ClearLocalStorageUserInfo(): void {
  let userInfo: IUserInfo = initIUserInfo
  let info1:string=JSON.stringify(userInfo)
  info1=Encrypt0(info1)
  window.localStorage.setItem('newuserInfo',info1);
}
export function GetLocalStorageUserInfo(): IUserInfo {
  let userInfo: IUserInfo = initIUserInfo
  try {
    let info1 =
      window.localStorage.getItem('newuserInfo') === null
        ? ''
        : window.localStorage.getItem('newuserInfo')
    if (info1) {
      info1 = Decrypt0(info1)
    }
    if (info1) {
      userInfo = JSON.parse(info1)
    }
  } catch (error) {
    return userInfo
  }

  return userInfo
}


export function Encrypt0(str: string): string {
  const key  = CryptoJS.enc.Utf8.parse(initAesKey);
  const iv   = CryptoJS.enc.Utf8.parse(initAesIV);
  const encryptedData:any =CryptoJS.AES.encrypt(str,key,{
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    // tslint:disable-next-line: object-literal-sort-keys
     iv,
  })
  const  passwords:string= encryptedData.ciphertext.toString(CryptoJS.enc.Base64)
  return passwords
}
export function Decrypt0(str: string): string {
  const key  = CryptoJS.enc.Utf8.parse(initAesKey);
  const iv   = CryptoJS.enc.Utf8.parse(initAesIV);
  // str=CryptoJS.enc.Base64.stringify(str)
  const passwords:string =CryptoJS.AES.decrypt(str,key,{
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    // tslint:disable-next-line:object-literal-sort-keys
    iv,
  }).toString(CryptoJS.enc.Utf8)
  return passwords
}
