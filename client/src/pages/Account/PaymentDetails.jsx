import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { SidebarData } from '../../components/SidebarData';
import '../../assets/stylesheets/account.css';
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { IconBrandMastercard } from '@tabler/icons-react';
import { IconBrandPaypal } from '@tabler/icons-react';
import { IconCards } from '@tabler/icons-react';
import { IconCreditCard } from '@tabler/icons-react';
import { IconCreditCardOff } from '@tabler/icons-react';
import { Icon123 } from '@tabler/icons-react';

function PaymentDetails() {
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
              <div className="payment">
                <div className="paymentinfo">
                  <h1>Payment Details</h1>
                  <div className="input-payment">
                    <div className="input-box">
                      <input type="radio" name='pay' id='pay-0' className='radio' checked />
                      <label htmlFor="pay-0">
                        <span><IconBrandMastercard />Mastercard</span>
                      </label>
                      <input type="radio" name='pay' id='pay-1' className='radio' />
                      <label htmlFor="pay-1">
                        <span><IconBrandPaypal />PayPal</span>
                      </label>
                    </div>
                  </div>
                  <div className="input-payment">
                    <div className="input-box">
                      <span><IconCards />Card Number</span>
                      <input type="tel" placeholder='Card Number' className='name' />
                    </div>
                  </div>
                  <div className="input-payment">
                    <div className="input-box">
                      <span><IconCreditCard />CVC</span>
                      <input type="tel" placeholder='CVC' className='name' />
                    </div>
                  </div>
                  <div className="input-payment">
                    <div className="input-box">
                      <span><IconCreditCardOff />Exp. Date</span>
                      <input type="month" className='input' />
                    </div>
                  </div>
                  <div className="input-payment">
                    <div className="input-box">
                      <span><Icon123 />Postal Code</span>
                      <input type="tel" placeholder='Postal Code' className='input' />
                    </div>
                  </div>
                  <button type="submit">Save</button>
                </div>
              </div>
            </aside>
          </form>
        </div>
    </div>
  )
}

export default PaymentDetails