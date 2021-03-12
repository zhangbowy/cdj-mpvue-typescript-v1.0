import  g from "./../global"
export default class salaryListPool {
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
        return this._list;
    }
    get hash()
    {
      return this._hash;
    }
    getDataById($id)
    {
      return this._hash[$id]
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
    d.amount = "";
    d.payLastTime = "";
    d.payCompanyName = "";
    d.bankAccountName = "";
    d.bankName = "";
    d.bankAccount = "";
    d.remarks = "";
    d.billStatus = 0;
    d.paymentCode = "";
    d.name = "";
    d.update = update.bind(d);
    d.update($Obj);
    return d;
}

function update($Obj)
{
    $Obj.hasOwnProperty("id") && (this.id = $Obj.id);
    $Obj.hasOwnProperty("amount") && (this.amount = $Obj.amount);
    $Obj.hasOwnProperty("payLastTime") && (this.payLastTime =this.payLastTime?g.timeTool.getFullDate($Obj.payLastTime,true):"");
    $Obj.hasOwnProperty("payCompanyName") && (this.payCompanyName = $Obj.payCompanyName);
    $Obj.hasOwnProperty("bankAccountName") && (this.bankAccountName = $Obj.bankAccountName);
    $Obj.hasOwnProperty("bankName") && (this.bankName = $Obj.bankName);
    $Obj.hasOwnProperty("bankAccount") && (this.bankAccount = $Obj.bankAccount);
    $Obj.hasOwnProperty("remarks") && (this.remarks = $Obj.remarks);
    $Obj.hasOwnProperty("billStatus") && (this.billStatus = $Obj.billStatus==1?'已生成结算单':'已生成支付单');
    $Obj.hasOwnProperty("paymentCode") && (this.paymentCode = $Obj.paymentCode);
    $Obj.hasOwnProperty("name") && (this.name = $Obj.name);


}
