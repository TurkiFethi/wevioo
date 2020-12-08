import React, { useState } from 'react'
import useWindowSize from '../use window size/UseWindowSize'
import './navMenu.css'

function NavMenu() {

    const [menuItems, setmenuItems] = useState([
        {
            id: "1",
            isSelected: false,
            icon: "pi pi-bell pi-th-large icon-menu"
        },
        {
            id: "2",
            isSelected: true,
            icon: "pi pi-bell pi-bookmark icon-menu"
        },
        {
            id: "3",
            isSelected: false,
            icon: "pi pi-bell pi-chart-bar icon-menu"
        },
        {
            id: "4",
            isSelected: false,
            icon: "pi pi-bell pi-calendar-minus icon-menu"
        },
        {
            id: "5",
            isSelected: false,
            icon: "pi pi-bell pi-clone icon-menu"
        }
    ])
    const { width } = useWindowSize();

    const changeSelectedMenu = (id) => {
        setmenuItems( menuItems.map((el, i) => (el.id === id ? { ...el, isSelected: true } : { ...el, isSelected: false })))
    }


    return (

        <div>
            <div className={(width<1160&&width>768)?"p-grid p-dir-col mr container-nav-menu-spec":"p-grid p-dir-col container-nav-menu mr"}>
                <div className="p-col ">
                    <span className="logo">LOGO</span>
                </div>
                {menuItems.map((el, i) => (
                    <div key={i} onClick={() => changeSelectedMenu(el.id)} className={`p-col container-icon-menu ${el.isSelected
                        && "p-col selected-menu-item"
                        }`}>
                        <i className={`${el.icon} ${el.isSelected && "change-color-icon-menu"}`}></i>
                        {/* {el.isSelected&&<p style={{marginLeft:"200px"}}>xx</p>} */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavMenu
