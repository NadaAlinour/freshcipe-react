import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { SidebarData } from '../../components/SidebarData';
import '../../assets/stylesheets/account.css';
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';

function PersonalDetails() {
  const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <div>
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

        <div className="main-content">
          <form method='post'>
            <aside className='aside'>
              <div className="personaldetails">
                <div className="profile">
                  <h1>Personal Details</h1>
                  <h2>Full Name</h2>
                  <p contentEditable="true" className='input'>John Andrew</p>
                  <h2>Birth Date</h2>
                  <input type="date" className='input' placeholder='Birth date' />
                  <h2>Email</h2>
                  <p contentEditable="true" className='input'>John@mail.com</p>
                  <button type="submit">Save</button>
                </div>
              </div>
            </aside>
          </form>
        </div>
    </div>
  )
}

export default PersonalDetails