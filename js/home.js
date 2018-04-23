var Main = {
    data() {
        return {
            batchType: ['Batch start in time range']
        }
    }
}

var Component = Vue.extend(Main)
new Component().$mount('#batchPicker')
new Component().$mount('#datepicker')

// This is the search function
function searchBatch(){

}

function quickSearch(){
}