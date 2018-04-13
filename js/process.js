// create node
var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'},
    {id: 6, label: 'Node 6'},

]);

// create relationship
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 3, to: 4},
    {from: 4, to: 3},
    {from: 2, to: 5},
    {from: 1, to: 5},
    {from: 5, to: 6}

]);

// create network
var container = document.getElementById('myNetwork');

// vis data
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
    manipulation: {
        addNode: function(nodeData,callback) {
            nodeData.label = 'new node';
            callback(nodeData);
        }
    },
    autoResize: true,
    height: 450,
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