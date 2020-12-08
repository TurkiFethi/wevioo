// import React,{useEffect,useState} from 'react'

// function UseWindowSize() {
//     const isWindowClient = typeof window === "object";

//     const [windowSize, setWindowSize] = useState(
//       isWindowClient ? window.innerWidth : undefined
//     );
  
//     //👇
//     useEffect(() => {
//       //a handler which will be called on change of the screen resize
//       function setSize() {
//         setWindowSize(window.innerWidth);
//       }
  
//       if (isWindowClient) {
//         //register the window resize listener
//         window.addEventListener("resize", setSize);
  
//         //un-register the listener
//         return () => window.removeEventListener("resize", setSize);
//       }
//     }, [isWindowClient, setWindowSize]);
//     return (
//         <div>
//             {windowSize}
//         </div>
//     )
// }

// export default UseWindowSize

import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
