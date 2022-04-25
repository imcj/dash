import GridLayout from "react-grid-layout";

import './App.css';
import "react-grid-layout/css/styles.css";
import 'react-resizable/css/styles.css';
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState<number>(0);

  const layout = [
    { i: "1", x: 0, y: 0, w: 5, h: 1}
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="App">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={100}
        width={width}
      >
        {layout.map(item => (
          <div
            key={item.i}
            style={{
              backgroundColor: "#efefef"
            }}
          >{item.i}</div>
        ))}
      </GridLayout>
    </div>
  );
}

export default App;
