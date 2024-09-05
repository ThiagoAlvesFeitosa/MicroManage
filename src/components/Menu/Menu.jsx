import React, { useState } from 'react'
import './Menu.css'
import Logo from '../../imgs/logo.png'

import { DadosMenu } from '../../Data/Data'
import {UilSignOutAlt} from "@iconscout/react-unicons"

const Menu = () => {

    const [selected, setSelected] = useState(0)

  return (
    <div className="Menu">
        {/*logo*/}
        <div className="logo">
            <img src={Logo} alt="" />
            
        </div>

        {/*menu*/ }
        <div className='menu'>
            {DadosMenu.map((item, index)=>{
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Menu