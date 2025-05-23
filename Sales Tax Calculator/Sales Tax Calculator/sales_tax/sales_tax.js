var $ = function (id) {
    return document.getElementById(id); 
};

window.onload=function(){
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearForm;
    $("subtotal").onclick = clearInput;
    $("tax_rate").onclick = clearInput;
    $("subtotal").focus();
};


var processEntries=function(){

    var subTotal=parseFloat($("subtotal").value);
    var taxRate=parseFloat($("tax_rate").value);
    if (isNaN(subTotal) || subTotal <= 0 || subTotal >= 10000) {
        alert("subTotal must be > 0 and < 10000");
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        return;
    }
    var sales_tax=subTotal * (taxRate / 100);;
    var total=subTotal + sales_tax;
    $("sales_tax").value = sales_tax.toFixed(2);
    $("total").value = total.toFixed(2);
};

var clearForm = function () {  
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus();
};

var clearInput = function () {  
    this.value = "";
    $("sales_tax").value = "";
    $("total").value = "";
};