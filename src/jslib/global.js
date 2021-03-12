/**
 * Created by zhangbo on 2018/11/29.
 */
import g from "./utils/global"
import * as data from "./data/DataPool";
import * as config from "./lib/config";
import * as func from "./func";
import * as ui from "./gui"
merge(g.config = {}, config);
merge(g.data = {}, data);
merge(g.func = g.func ? g.func: {}, func);
merge(g.ui = g.ui ? g.ui: {}, ui);

export default g;

function merge(d, b)
{
	for (var k in b)
	{
		d[k] = b[k];
	}
}
