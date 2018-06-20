//Generate date picker
var Main = {

}
var Component = Vue.extend(Main)
new Component().$mount('#datepicker')

//This function gets value of checked box
function getCheckBox(){
    var batchType = "";
    var start = document.getElementById("startBatch").checked;
    var end = document.getElementById("endBatch").checked;
    //check the status of checkBox
    if (start == true){
        if ( end == true){
            batchType = "inside";
        } else {
            batchType = "startIn"
        }
    } else {
        if (end == true){
            batchType = "endBefore";
        } else {
            batchType = "error";
        }
    };
    return batchType; //return a string value of checked box
}

//This function gets value of date range
function getTimeRange(){
    onchange();
//    retrun date
}

// This function searches batches based on user's selection
function search(){
    var timeRange = getTimeRange();
    var batchType = getCheckBox();
}

//This function searches batches on default setting: All batch from yesterday to today
function quickSearch(){
    var endDate=getNowFormatDate();
    var startDate=getPreviousFromatDate();
    var batchType="inside";
}

//This function get the current date time in format yyyy-MM-dd HH:mm:ss
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

//This function get yesterday date time in format yyyy-MM-dd HH:mm:ss
function getPreviousFromatDate(){
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate() - 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
