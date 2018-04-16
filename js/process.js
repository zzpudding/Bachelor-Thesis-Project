// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Cream Dispatch',          x: 0, y: 0, group:'dispatchCar', title:'This is Cream Dispatch car'},
    {id: 2, label: 'Cream & Skim Dispatch',   x: 0, y: 400, group:'dispatchCar', title:'This is Cream & Skim Dispatch car'},
    {id: 3, label: 'Milk Reception',          x: 0, y: 800, group:'transportCar', title:'This is Milk Reception'},
    {id: 4, label: 'Skim & Conc Reception',   x: 0, y: 1200, group:'transportCar', title:'This is Skim & Conc Reception'},
    {id: 5, label: 'Raw Milk Storage',        x: 400, y: 800, group:'storage', title:'This is Raw Milk Storage'},
    {id: 6, label: 'Cream Storage',           x: 800, y: 400, group:'storage', title:'This is Cream Storage'},
    {id: 7, label: 'Cheese Milk Buffer',      x: 800, y: 800, group:'buffer', title:'This is Cheese Milk Buffer'},
    {id: 8, label: 'Cheese Vats',             x: 1200, y: 800, group:'cheeseVat', title:'This is Cheese Vats'},
    {id: 9, label: 'Curd Buffer',             x: 1600, y: 800, group:'buffer', title:'This is Curd Buffer'},
    {id: 10, label: 'Curd Filler',            x: 2000, y: 800, group:'curdFiller', title:'This is Curd Filler'},
    {id: 11, label: 'Presses',                x: 2000, y: 1200, group:'presses', title:'This is Presses'},
    {id: 12, label: 'Weighting',              x: 2400, y: 1200, group:'weighting', title:'This is Weighting'},
    {id: 13, label: 'Powder Silos',           x: 800, y: 2400, group:'powderSilos', title:'This is Powder Silos'},
    {id: 14, label: 'Culture Preparation',    x: 400, y: 2400, group:'culturePrep', title:'This is Culture Preparation'},
    {id: 15, label: 'Seeding Culture',        x: 200, y: 2400, group:'seedingCulture', title:'This is Seeding Culture'},
    {id: 16, label: 'Storage',                x: 200, y: 1000, group:'storage', title:'This is a Storage'},
    {id: 17, x: 400, y: 400, group:'gea',     title:'This is a GEA machine'},
    {id: 18, label: 'Whey Buffer Tanks',      x: 2400, y: 1600, group:'buffer', title:'This is Whey Buffer Tank'},
    {id: 19, label: 'Raw Whey Storage',       x: 2000, y: 1200, group:'storage', title:'This is Raw Whey Storage'},
    {id: 20, x: 2200, y: 2800, group:'gea',   title:'This is a GEA machine'},
    {id: 21, label: 'Big Bag Emptying',       x: 1600, y: 2400, group:'bigBagEmptying', title:'This is Big Bag Emptying'},
    {id: 22, label: 'Culture Buffer Tanks',   x: 2000, y: 1000, group:'buffer', title:'This is Culture Buffer Tank'},
    {id: 23, label: 'Whey Cream Tanks',       x: 400, y: 2800, group:'buffer', title:'This is Whey Cream Tank'},
]);

// create relationship
var edges = new vis.DataSet([
    {from: 1, to: 6},
    {from: 2, to: 5},
    {from: 3, to: 5},
    {from: 4, to: 6},
    {from: 5, to: 17},
    {from: 13, to: 7},
    {from: 7, to: 14},
    {from: 14, to: 15},
    {from: 14, to: 22},
    {from: 17, to: 7},
    {from: 17, to: 16},
    {from: 6, to: 16},
    {from: 7, to: 8},
    {from: 8, to: 9},
    {from: 9, to: 10},
    {from: 10, to: 11},
    {from: 11, to: 12},
    {from: 8, to: 19},
    {from: 19, to: 20},
    {from: 20, to: 18},
    {from: 21, to: 13},
    {from: 22, to: 8},
    {from: 7, to: 23},
    {from: 23, to: 20},

]);

// create network
var container = document.getElementById('myNetwork');

// vis data
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
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
        gea:{shape:'image',image:'images/gea.png'},
    },
    hover: true,
    dragNodes: false,
    manipulation: {
        addNode: function(nodeData,callback) {
            nodeData.label = 'new node';
            callback(nodeData);
        }
    },
    autoResize: true,
    height: '700',
    width: '100%',
 //   locale: 'en',
 //   locales: locales,
    tooltipDelay: 300,
    clickToUse: false,
    edges:{
        arrows: {
            to: {enabled: true, scaleFactor: 1, type: 'circle'}
        },
        arrowStrikethrough: false,
        chosen:{
            edge: function(values, id, selected, hovering){
                values.toArrowType = 'arrow';
            }
        }
    }
}

// initiate network
var network = new vis.Network(container, data, options);

network.on("showPopup", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
});
