
import useWindowSize from './components/use window size/UseWindowSize'
import './App.css'
import 'primeflex/primeflex.css';
import AppLaptop from './page/AppLaptop';
import AppMobile from './page/AppMobile';
import React,{useState} from 'react'
import {data} from './data'


function App() {
  const [cart] = useState(data)
  const laptop=769
  const { width } = useWindowSize();
  return (
    
<div>
  {width<laptop?<AppMobile cart={cart}/>:<AppLaptop cart={cart}/>}
</div>
   
  );
}

export default App;
