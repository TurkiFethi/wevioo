
import useWindowSize from './components/use window size/UseWindowSize'
import './App.css'
import 'primeflex/primeflex.css';
import AppLaptop from './page/AppLaptop';
import AppMobile from './page/AppMobile';
import React,{useState} from 'react'
import {data} from './data'


function App() {
  const [cart, setCart] = useState(data)

  const { width } = useWindowSize();
  return (
<div>
{width<=768&&
<AppMobile cart={cart}/>
}
{
  width>768&&
<AppLaptop cart={cart}/>
}
</div>
   
  );
}

export default App;
