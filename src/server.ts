import { serverHttp } from './http';
import "./websocket"

serverHttp.listen(3000, () => console.log("running"))