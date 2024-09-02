import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuItem from '../Left_Menu/MenuItem';


export default function Top_Menu() {
    let [toggle1, setToggle1] = useState(true);
    let [toggle2, setToggle2] = useState(true);

    let toggleFunc1 = () => {
        setToggle1(!toggle1);
    }

    let toggleFunc2 = () => {
        setToggle2(!toggle2);
    }


    return (
        <header className='container mx-auto px-2'>
            <div className='flex items-center justify-between h-[60px]'>
                <h1 className="tracking-[.3em] font-bold text-sm md:text-lg uppercase">
                    Dashboard
                </h1>


                <div className='flex'>
                    <div className={`flex [&>*]:mr-4 [&>*]:px-2 [&>*]:text-xs [&>*]:py-1 [&>*]:border [&>*]:border-[#4C5165] [&>*]:rounded-md animate-fade-left transition-all ${toggle1 ? 'scale-50 h-0 overflow-hidden' : 'scale-100 h-auto'}`}>
                        <button className='hover:bg-[#4C5165] hover:text-white'><NavLink className='[&>svg]:text-[17px]' to={'/users'}><SettingsIcon /> Settings</NavLink></button>
                        <button className='hover:bg-red-500 hover:text-white [&>svg]:text-[17px]'><LogoutOutlinedIcon /> Logout</button>
                    </div>

                    <div className="cursor-pointer [&>svg]:text-[30px]" onClick={toggleFunc1}><PersonRoundedIcon /></div>

                    <div className="cursor-pointer [&>svg]:text-[32px] block md:hidden ml-3" onClick={toggleFunc2}><MenuIcon /></div>
                </div>
            </div>

            <div className={`transition-all ${toggle2 ? 'scale-50 h-0 overflow-hidden' : 'scale-100 h-auto'}`}>
                <MenuItem />
            </div>
        </header>
    )
}
