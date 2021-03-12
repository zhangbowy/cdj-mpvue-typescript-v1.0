import  g from "./../global"

export default class SettingPool {
    constructor()
    {
        this._list = [];
        this._hash = {};
    }

    update($Obj)
    {
        for (var item of $Obj)
        {
            this.add(item);
        }
    }

    add($item)
    {
        var itemData = createData($item);
        if (!this._hash[itemData.id])
        {
            this._list.push(itemData);
            this._hash[itemData.id] = itemData;
        }
    }
    get list()
    {
        return this._list
    }
    removeDataById($id)
    {
        let itemIndex = this._list.indexof(this._hash[$id]);//id通过hash快速找到
        this._list.splice(itemIndex,1) //splice剔除,页面重新赋值this._list
    }

    removeAll()
    {
        this._list = [];
        this._hash = {};
    }
}

function createData($Obj)
{
    var d = {};
    d.id = "";
    d.chart_name = "";
    d.x_name = "";
    d.updated_at = "";
    d.created_at = "";
    d.update = update.bind(d);
    d.update($Obj);
    return d;
}

function update($Obj)
{
    $Obj.hasOwnProperty("id") && (this.id = $Obj.id);
    $Obj.hasOwnProperty("chart_name") && (this.chart_name = $Obj.chart_name);
    $Obj.hasOwnProperty("x_name") && (this.x_name = $Obj.x_name);
    $Obj.hasOwnProperty("y_name") && (this.y_name = $Obj.y_name);

    if( $Obj.hasOwnProperty("updated_at") )
    {
        var time = new Date().getTime(new Date($Obj.updated_at));//拿到时间戳
        this.updated_at = g.timeTool.getFullDate(time,true)//时间戳转换成全日期时间格式
    }
    if( $Obj.hasOwnProperty("created_at") )
    {
        var time = new Date().getTime(new Date($Obj.created_at));
        this.created_at = g.timeTool.getFullDate(time,true);
    }
}
