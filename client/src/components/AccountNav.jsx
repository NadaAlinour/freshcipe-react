import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { SidebarData } from './SidebarData';
import '../assets/stylesheets/account.css';
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';


function AccountNav() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <NavLink to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </>
  )
}

export default AccountNav