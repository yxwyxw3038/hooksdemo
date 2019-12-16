import axios,{AxiosRequestConfig, Method} from 'axios';
import {stringify} from 'qs';
import config from '../config';
import {Encrypt0} from '../Func/PublicStore';
const baseURL = config.url.basicUrl;
const http = axios.create({
  baseURL,
  withCredentials: false,
  // tslint:disable-next-line:object-literal-sort-keys
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
  transformRequest: [
    (data) => {
      let newData = '';
      newData = stringify(data);
      const passwords = Encrypt0(newData)
      // tslint:disable-next-line:no-console
      // console.log(passwords)
      return passwords;
    },
  ],
  // withCredentials: true
});
const http1 = axios.create({
  baseURL,
  withCredentials: false,
  // tslint:disable-next-line:object-literal-sort-keys
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
function apiAxios(method: Method, url: string, params: any, response: any) {
 const  apiinfo:AxiosRequestConfig ={
  method,
  url,
  data: method === 'POST' || method === 'PUT' ? params : null,
  params: method === 'GET' || method === 'DELETE' ? params : null,
}
  http(
    {...apiinfo}
  ).then( (res: any) => {
    response(res);
  },
  ).catch((err: any) => {
    response(err);
  });
}
function apiAxios0(method: Method, url: string, params: any)  {
  const  apiinfo:AxiosRequestConfig ={
   method,
   url,
   data: method === 'POST' || method === 'PUT' ? params : null,
   params: method === 'GET' || method === 'DELETE' ? params : null,
 }
 return new Promise((resolve, reject) => {
   http(
     {...apiinfo}
   ).then( (res: any) => {
    if (res.status === 200 ) {
      const jsonData: any = res.data;
      if(jsonData===null||jsonData===undefined||jsonData===""){
        reject(new Error("返回对象为空！"))
      }else {
        resolve(jsonData);
      }
    } else{
      reject(new Error( res.statusText))
   }
   },
   ).catch((err: any) => {
    reject(err);
   });
  })
 }
function apiAxios1(method: Method,  url: string, data: any, params: any, response: any) {

  const  apiinfo:AxiosRequestConfig ={
    method,
    url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }

  http1( {...apiinfo}).then( (res: any) => {
    response(res);
  },
  ).catch((err: any) => {
    response(err);
  });
}

// const service = axios.create();

// service.interceptors.response.use(response=>{
//   let middle = response.data;
//   let res = ServiceWorker(middle)
//   return res;
// },err=>{
//   return Promise.reject(err);
// })



export default class {

  public get(url: string, params: any , response: any) {
    return apiAxios('GET', url, params, response);
  }
  public post(url: string, params: any , response: any) {
    return apiAxios('POST', url, params, response);
  }

  public get0(url: string, params: any ) {
    return apiAxios0('GET', url, params);
  }
  public post0(url: string, params: any ) {
    return apiAxios0('POST', url, params);
  }
  public get1(url: string, data: any,  params: any , response: any) {
    return apiAxios1('GET', data,  url, params, response);
  }
  public post1(url: string, data: any, params: any , response: any) {
    return apiAxios1('POST', url, data, params, response);
  }
}


