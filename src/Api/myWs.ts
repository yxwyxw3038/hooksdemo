import config from '../config';
const baseURL = config.url.basicUrl;
const baseWSURL=baseURL.replace("http:","ws:")+"/Websocket/Ws"
// tslint:disable-next-line:no-unused-expression
export default class {
    public NewWs():WebSocket {
        const myWs = new WebSocket(baseWSURL);  
        return myWs;
    }
}