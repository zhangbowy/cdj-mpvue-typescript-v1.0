import * as config from "./../lib/config";

/**
 * 合并两个对象（将第二个对象合并到第一个对象），也可用于深度复制
 * @param d 要输出的对象
 * @param b 要合并的对象
 * @param cover 是否覆盖属性
 * @private
 */
export function __merge(d, b, cover)
{
	if (b)
	{
		for (var k in b)
		{
			if (typeof b[k] == "object" && (!d[k] || typeof d[k] == "object"))
			{
				if (Array.isArray(b[k]))
				{
					d[k] = d[k] || [];
				}
				else
				{
					d[k] = d[k] || {};
				}
				__merge(d[k], b[k], cover);
			}
			else
			{
				(!(!cover && d.hasOwnProperty(k))) && (d[k] = b[k])
			}
		}
	}
	return d;
}

export function paramFormat(str, paramObj)
{
	var g;
	var list;
	str = str.toString();
	if (typeof paramObj == "object")
	{
		list = paramObj;
	}
	else
	{
		list = arguments;
	}
	for (var i in list)
	{
		if (list.hasOwnProperty(i))
		{
			g = new RegExp("\\{" + i + "\\}", "g");
			str = str.replace(g, list[i]);
		}
	}
	return str;
}

/**
 * 判断当前项目工作模式是否包含目标模式
 * $mode 要判断的模式
 * @returns {boolean}
 */
export function onMode($mode)
{
	return config.mode.indexOf($mode) > -1;
}

/**
 * 判断对象的类型
 * @param $obj 传入的对象
 * @returns {string}
 */
export function getType($obj)
{
	return Object.prototype.toString.call($obj).replace(/(\[)object |(\])/g, '');
}



