// import CytoscapeComponent from 'react-cytoscapejs';
// import { useRef } from "react";


// export default function Graph() {
//     const cytoRef = useRef(null);

//     // cytoRef.current.center();
    
//     const elements = [
//         { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
//         { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
//         { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
//         { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
//         { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
//         { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
//         { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
//         { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
//         { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
//      ];
  
//     return <CytoscapeComponent elements={elements} style={ { width: '100%', height: '100%' } } 
//     cy={ref => cytoRef.current = ref} />;


//   }