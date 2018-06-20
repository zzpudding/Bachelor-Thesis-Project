// var l1 = 'This is label example\n'
// var msg1 = 'Dispatch 101 \n Dispatch 102'
// var msg2 = 'This is data example: \n'
// l1 = l1.concat(msg1).concat(msg2)

//This function manage the message
function generateMessage(){
    var tem=''

}

// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Dispatch car',          x: 0, y: 0, group:'dispatchCar', title:'This is a dispatch car'},
    {id: 2, label: 'Cream & Skim Dispatch',   x: 0, y: 150, group:'dispatchCar', title:'This is Cream & Skim Dispatch car'},
    {id: 3, label: 'Milk Reception',          x: 0, y: 300, group:'transportCar', title:'This is Milk Reception'},
    {id: 4, label: 'Skim & Conc Reception',   x: 0, y: 450, group:'transportCar', title:'This is Skim & Conc Reception'},
    {id: 5, label: 'Permeat Dispatch',        x: 0, y: 600, group:'dispatchCar', title:'This is Permeat Dispatch'},
    {id: 6, label: 'Raw Milk Storage',        x: 200, y: 300, group:'storage', title:'This is Raw Milk Storage'},
    {id: 7, label: 'machine',                 x: 200, y: 450, title:'This is a process'},
    {id: 8, label: 'Permeat Storage',         x: 200, y: 600, group:'storage', title:'This is Permeat Storage'},
    {id: 9, label: 'Cream Storage',           x: 400, y: 0, group:'storage', title:'This is Cream Storage'},
    {id: 10, label: 'Seperator',              x: 400, y: 300, group:'separator',     title:'This is a seperator'},
    {id: 11, label: 'Storage',                x: 400, y: 450, group:'storage', title:'This is a Storage'},
    {id: 12, label: 'Seeding Culture',        x: 400, y: 600, group:'seedingCulture', title:'This is Seeding Culture'},
    {id: 13, label: 'Culture Preparation',    x: 600, y: 600, group:'culturePrep', title:'This is Culture Preparation'},
    {id: 14, label: 'Cheese Milk Buffer',     x: 600, y: 300, group:'buffer', title:'This is Cheese Milk Buffer'},
    {id: 15, label: 'Powder Silos',           x: 750, y: 600, group:'powderSilos', title:'This is Powder Silos'},
    {id: 16, label: 'Colour',                 x: 800, y: 0, group:'addIngredient', title:'This is colour'},
    {id: 17, label: 'Calcium chloride',       x: 1000, y: 0, group:'addIngredient', title:'This is Calcium chloride'},
    {id: 18, label: 'Rennet',                 x: 1200, y: 0, group:'addIngredient', title:'This is rennet'},
    {id: 19, label: 'Direct Starter',         x: 1400, y: 0, group:'dvs', title:'This is direct Starter' },
    {id: 20, label: 'Heat exchange',          x: 900, y: 300, group:'heatExchange', title:'This is heat exchange' },
    {id: 21, label: 'Cheese Vats',            x: 1100, y: 300, group:'cheeseVat', title:'This is Cheese Vats'},
    {id: 22, label: 'Culture Buffer Tanks',   x: 900, y: 450, group:'buffer', title:'This is Culture Buffer Tank'},
    {id: 23, label: 'Big Bag Emptying',       x: 900, y: 600, group:'bigBagEmptying', title:'This is Big Bag Emptying'},
    {id: 24, label: 'Raw Whey Storage',       x: 1300, y: 450, group:'storage', title:'This is Raw Whey Storage'},
    {id: 25, label: 'Whey Cream Tanks',       x: 1200, y: 600, group:'buffer', title:'This is Whey Cream Tank'},
    {id: 26, label: 'Wash Water',             x: 1600, y: 0, group:'storage', title:'This is wash water'},
    {id: 27, label: 'Curd Buffer',            x: 1500, y: 300, group:'buffer', title:'This is Curd Buffer'},
    {id: 28, label: 'Seperator',              x: 1500, y: 600, group:'separator',     title:'This is a seperator'},
    {id: 29, label: 'Curd Filler',            x: 1700, y: 300, group:'curdFiller', title:'This is Curd Filler'},
    {id: 30, label: 'Presses',                x: 1700, y: 450, group:'presses', title:'This is Presses'},
    {id: 31, label: 'Whey Buffer Tanks',      x: 1700, y: 600, group:'buffer', title:'This is Whey Buffer Tank'},
    {id: 32, label: 'Packing',                x: 1900, y: 150, group:'packing', title:'This is packing process'},
    {id: 33, label: 'brine bath',             x: 1900, y: 300, group:'brineBath', title:'This is brine bath process'},
    {id: 34, label: 'Weighting',              x: 1900, y: 450, group:'weighting', title:'This is Weighting'},
    {id: 35,                                  x: 320, y: 300, group:'mix',size:5},
    {id: 36,                                  x: 520, y: 300, group:'mix',size:5},
    {id: 37,                                  x: 1300, y: 300, group:'mix',size:5},

]);

// create relationship
var edges = new vis.DataSet([
    {from: 3, to: 6},
    {from: 4, to: 11},
    {from: 6, to: 2},
    {from: 6, to: 10},
    {from: 7, to: 11},
    {from: 7, to: 8},
    {from: 8, to: 5},
    {from: 9, to: 1},
    {from: 9, to: 14},
    {from: 10, to: 6},
    {from: 10, to: 9},
    {from: 10, to: 11},
    {from: 10, to: 14},
    {from: 11, to: 7},
    {from: 11, to: 14},
    {from: 12, to: 13},
    {from: 12, to: 13},
    {from: 13, to: 22},
    {from: 14, to: 20},
    {from: 14, to: 35},
    {from: 15, to: 14},
    {from: 16, to: 21},
    {from: 17, to: 21},
    {from: 18, to: 21},
    {from: 19, to: 21},
    {from: 20, to: 21},
    {from: 21, to: 27},
    {from: 22, to: 21},
    {from: 23, to: 15},
    {from: 24, to: 28},
    {from: 25, to: 14},
    {from: 26, to: 21},
    {from: 27, to: 29},
    {from: 28, to: 25},
    {from: 28, to: 31},
    {from: 29, to: 24},
    {from: 29, to: 30},
    {from: 30, to: 24},
    {from: 30, to: 34},
    {from: 34, to: 33},
    {from: 33, to: 32},
    {from: 36, to: 13},
    {from: 37, to: 24},
]);

// create network
var container = document.getElementById('myNetwork');

// vis data
var data = {
    nodes: nodes,
    edges: edges
};

var newID = nodes.length + 1


var options = {
    physics:{
        stabilization: true,
        enabled: false,
    },
    interaction:{
        hover: true,
        dragNodes: true,
    },
    groups:{
        buffer:{shape: 'image', image:'images/buffer.png'},
        bigBagEmptying:{shape: 'image', image:'images/bigBagEmptying.png'},
        cheeseVat:{shape: 'image', image:'images/cheeseVat.png'},
        culturePrep:{shape: 'image', image:'images/culturePrep.png'},
        curdFiller:{shape: 'image', image:'images/curdFiller.png'},
        dispatchCar:{shape: 'image', image:'images/dispatchCar.png'},
        powderSilos:{shape: 'image', image:'images/powderSilos.png'},
        presses:{shape: 'image', image:'images/presses.png'},
        storage:{shape: 'image', image:'images/storage.png'},
        seedingCulture:{shape: 'image', image:'images/seedingCulture.png'},
        transportCar:{shape: 'image', image:'images/transportCar.png'},
        weighting:{shape: 'image', image:'images/weighting.png'},
        heatExchange:{shape: 'image', image:'images/heatExchange.png'},
        dvs:{shape:'image',image:'images/dvs.png'},
        separator:{shape:'image',image:'images/separator.png'},
        packing:{shape:'image',image:'images/packing.png'},
        addIngredient:{shape:'image',image:'images/addIngredient.png'},
        brineBath:{shape:'image',image:'images/brineBath.png'},
        mix:{shape:'image',image:'images/mix.png'}
    },
    manipulation: {
        addNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('operation').innerHTML = "Add";
            document.getElementById('node-id').value = newID;
            document.getElementById('node-group').value=data.group;
            document.getElementById('node-label').value = data.label;
            document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
            document.getElementById('cancelButton').onclick = clearPopUp.bind();
            document.getElementById('network-popUp').style.display = 'block';
        },
        editNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('operation').innerHTML = "Edit";
            document.getElementById('node-id').value = data.id;
            document.getElementById('node-label').value = data.label;
            document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
            document.getElementById('cancelButton').onclick = cancelEdit.bind(this, callback);
            document.getElementById('network-popUp').style.display = 'block';
        },
        addEdge: function (data, callback) {
            callback(data);
        }
    },
    autoResize: true,
    height: '700',
    width: '100%',
    clickToUse: false,
    edges: {
        arrows:{
            to:{enabled:true, scaleFactor:1, type:'arrow'}
        },
    },
}

// initiate network
var network = new vis.Network(container, data, options);


//pop up window functions
function clearPopUp() {
    document.getElementById('saveButton').onclick = null;
    document.getElementById('cancelButton').onclick = null;
    document.getElementById('network-popUp').style.display = 'none';
}

function cancelEdit(callback) {
    clearPopUp();
    callback(null);
}
W
function saveData(data,callback) {
    data.id = document.getElementById('node-id').value;
    data.label = document.getElementById('node-label').value;
    data.group = document.getElementById('node-group').value;
    clearPopUp();
    callback(data);
}


//Pop up windows when clicking on Add Node
network.on("showPopup", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
});



