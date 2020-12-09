import React,{useState} from 'react'
import './triStatisticalCart.css'

function TriCartStatistical() {
    const [selectedchoice] = useState([
        {name:"Newest",code:"NEWEST"},
        {name: 'Like', code: 'LIKE'},
        {name: 'Comment', code: 'COMMENT'},
        {name: 'Percentage', code: 'PERCENTAGE'}
    ]);

    return (
        <div className="p-grid container-tri-cart-statistical">
        <div className="p-col container-icon-newest-tri">
        <i className="pi pi-sliders-h icon-newest-tri "></i>
        </div>
        <div className="p-col">
        <select className="container-select-newest">
         {selectedchoice.map(item => (
        <option className=""
          key={item.name}
          value={item.code}
        >
          {item.code}
        </option>
      ))}
    </select>
        </div>
        
    </div>
    )
}

export default TriCartStatistical
