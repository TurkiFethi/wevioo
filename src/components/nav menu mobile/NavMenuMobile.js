import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import React, { useState } from 'react';
import './navMenuMobile.css'

function NavMenuMobile() {
    const [valueSelect] = useState([
        { language: 'English', code: 'EN' },
        { language: 'French', code: 'FR' }
      ]);
    const [isSelected, setIsSelected] = useState(false)
    const [items, setItems] = useState([

        {
            label: 'Menu 1',
            icon: 'pi pi-bell pi-th-large',
            id: "1",
            isSelected: false,

        },
        {
            label: 'Menu 2',
            icon: 'pi pi-bell pi-bookmark',
            id: "2",
            isSelected: true,
        },
        {
            label: 'Menu 3',
            icon: 'pi pi-bell pi-chart-bar',
            id: "3",
            isSelected: false,
        },
        {
            label: 'Menu 4',
            icon: 'pi pi-bell pi-calendar-minus',
            id: "4",
            isSelected: false,
        },
        {
            label: 'Menu 5',
            icon: 'pi pi-bell pi-clone',
            id: "5",
            isSelected: false,
        }
    ]
    )
    const changeSelectedMenu = (id) => {
        setItems( items.map((el, i) => (el.id === id ? { ...el, isSelected: true } : { ...el, isSelected: false })))
    }


    return (
        <div className="p-grid p-dir-col mr">
            <div className="p-col container-nav-Menu-mobile">
                <div className="p-grid mr">
                    <div className="p-col">
                        <i className="pi pi-bars bars-mobile" onClick={() => setIsSelected(!isSelected)} aria-controls="popup_menu" aria-haspopup />
                        {isSelected &&
                            <div className="container-button-menu-mobile ">
                                {items.map((el, index) => (
                                    <div key={index}  className="container-item-menu-mobile border" onClick={() => changeSelectedMenu(el.id)} className={`p-col container-icon-menu-mobile ${el.isSelected
                                        && "p-col selected-menu-item-mobile"
                                        }`}>{
                                            el.isSelected?<span><i className={el.icon} style={{color:"red"}}></i></span>:<span><i className={el.icon}></i></span>
                                        }
                                        
                                        <span>{el.label}</span>

                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    <div className="p-col logo-mobile">LOGO</div>
                    <div className="p-col container-notification-mobile">
                        <div className="container-btn-notification">
                            <button className="btn-notification-nav-bar-mobile">12</button>
                            <i className="pi pi-bell icon-notication" ></i>
                        </div>

                        <div className="container-btn-notification">
                            <button className="btn-notification-nav-bar-mobile">4</button>
                            <i className="pi pi-comment icon-notication"></i>
                        </div>

                        <div className="container-btn-notification">
                            <button className="btn-notification-nav-bar-mobile">76</button>
                            <i className="pi pi-inbox icon-notication"></i>
                        </div>
                        <select className="container-select-languages-mobile">
                            {valueSelect.map(item => (
                                <option className="item-language-mobile"
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
        </div>
    )
}

export default NavMenuMobile
