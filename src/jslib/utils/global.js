/**
 * Created by zhangbo on 2018/11/29.
 */
import * as timeTool from "./TimeTool.js";
import * as net from "./GNet.js";
import * as util from "./util.js";
import * as config from "./../lib/config.js";
import * as func from "./../func.js";
import * as data from "./../data/DataPool";
var serverObj = {
	server: config.url.server
};
if (config.hasOwnProperty("http"))
{
	serverObj.http = config.http;
}
net.init(serverObj);
var configs = Object.assign({},config);
export default {
	timeTool,
	net,
	util,
	func,
	data,
	configs
}
