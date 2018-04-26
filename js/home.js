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
    return batchType;
}

//This function gets value of date range
function getTimeRange(){
    var startDate = new Date('December 17, 2015 00:00:00')
    var endDate = new Date('December 18, 2015 00:00:00')
//    retrun date
}

// This function searches batches based on user's selection
function search(){


}

//This function searches batches on default set
function quickSearch(){

}
