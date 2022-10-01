export const cytoscapeStylesheet = [
    {
      selector: "node",
      style: {
        "background-color": "#FFFFFF",
        width: "label",
        height: "label",
        padding: "20px",
        shape: "round-rectangle",
        'text-wrap': 'wrap',
        label: 'My multiline\nlabel',
        "shadow-blur":"30px",
      }
    },
  
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        "font-size": "35",
        color: "black",
        "text-halign": "center",
        "text-valign": "center",
        "box-shadow": "10px 5px 5px red",
        "font-family": 'Gill Sans'
      }
    },



    {
      selector: "edge",
      style: {
        "curve-style": "unbundled-bezier",
        "taxi-direction": "rightward",
        "target-arrow-shape": "triangle",
        
        // "line-style": 'straight',
        'width': 5
      }
    },

    {
      selector: "edge[label]",
      style: {
        label: "data(label)",
        "font-size": "12",
        "text-background-color": "white",
        "text-background-opacity": 1,
        "text-background-padding": "2px",
        "text-border-color": "black",
        "text-border-style": "solid",
        "text-border-width": 0.5,
        "text-border-opacity": 1
      }
    },

    {
      selector: "node[type='YES/NO']",
      style: {
        "font-size": "12",
        "text-background-color": "white",
      }
    },

    {
        selector: "node[io='1']",
        style: {
          "font-size": "80",
          "text-background-color": "white",
          "background-color":'black',
          "color":"white"
        }
      },
    {
      selector: "node[prefcolor]",
      css: {
        'background-color':'data(prefcolor)'
      },
    },
    {
      selector: "node[prefshape]",
      css: {
        width: "label",
        height: "label",
        padding: "20px",
        shape: 'data(prefshape)',
      },
    },
    {
      selector: ".expandable",
      css: {
        "background-color":"#ffb6c1",
        shape:"round-rectangle",
        "border-color": "red",
      },
    },
    {
      selector: ".TopNodeGiven",
      css: {
        "background-color":"#ADD8E6",
        shape:"octagon",
        "border-color": "red",
      },
    },
  
    {
      selector: ".collapsedchild1",
      css: {
        'display': "none",
      },
    },
    {
      selector: ".collapsedchild2",
      css: {
        'display': "none",
      },
    },
    {
      selector: ".collapsedchild3",
      css: {
        'display': "none",
      },
    },
    {
      selector: ".collapsedchild4",
      css: {
        'display': "none",
      },
    },
    {
      selector: ".hide",
      css: {
        'display': "none",
      },
    }
  ];




  export const layoutDagre = {
    name: "dagre",
    padding: 10,
    edgeSep: 20,
    nodeDimensionsIncludeLabels: true,
    spacingFactor: 0.95,
    fit: true,
    rankDir: 'LR',
    animate: true,
    ranker: 'longest-path',
    animateFilter: function (node, i) { return true; },
  };