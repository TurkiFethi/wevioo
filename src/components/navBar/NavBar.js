import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import useWindowSize from '../use window size/UseWindowSize'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import './navBar.css'


function NavBar() {

  const [valueInput, setValueInput] = useState('');
  const [valueSelect] = useState([
    { language: 'English', code: 'EN' },
    { language: 'French', code: 'FR' }
  ]);
  const { width } = useWindowSize();

  return (
    <div className="container-nav-bar">
      <div className="p-fluid p-grid mr">
        <div className="p-col-4 ">
          <span className="p-input-icon-left p-span-search ">
            <i className="pi pi-search" />
            <InputText className="search-nav-bar" value={valueInput} onChange={(e) => setValueInput(e.target.value)} placeholder="Search here" />
          </span>
        </div>
        <div className="p-col-3  container-button-lorem-ipsum">
          <button className="container-button-nav-bar"><span className="text-button-lorem-ipsum">+ Lorem ipsum </span></button>
        </div>
        <div className="p-col-2 container-notification-nav-bar">

          <div className="container-btn-notification">
            <button className="btn-notification-nav-bar">12</button>
            <i className="pi pi-bell icon-notication" ></i>
          </div>

          <div className="container-btn-notification">
            <button className="btn-notification-nav-bar">4</button>
            <i className="pi pi-comment icon-notication"></i>
          </div>

          <div className="container-btn-notification">
            <button className="btn-notification-nav-bar">76</button>
            <i className="pi pi-inbox icon-notication"></i>
          </div>

        </div>
        <div className="p-col-3 container-link-language">
          <div className="container-link-button-nav-bar">
            <span className={(width<1160&&width>768)?"link-lorem-ipsum-spec":"link-lorem-ipsum"}>Lorem ipsum</span>
            <button className="button-right-nav-bar"></button>
          </div>
          <select className="container-select-languages">
            {valueSelect.map(item => (
              <option className="item-language"
                key={item.language}
                value={item.code}
              >
                {item.code}
              </option>
            ))}
          </select>

        </div>
      </div>
    </div>
  )
}

export default NavBar
