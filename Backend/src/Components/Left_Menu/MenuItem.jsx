import { NavLink } from 'react-router-dom';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';

export default function MenuItem() {
    return (
        <div className="m-4">
            <div className="flex items-center mb-10">
                <img src={'/Assets/Img/BC.png'} alt="" className="w-[45px] mr-2 rounded-md" />
                <div className="text-sm">
                    <p className="font-bold">Bikers Clan</p>
                    <p>Make Bikers Happy</p>
                </div>
            </div>
            <nav>
                <NavLink to={'/'} className="flex items-center my-2 px-2 py-2  hover:bg-[#A0A5B9] hover:rounded-md"><DashboardOutlinedIcon /><p className="ml-2">Dashboard</p></NavLink>
                <NavLink to={'/sales'} className="flex items-center my-2 px-2 py-2  hover:bg-[#A0A5B9] hover:rounded-md"><PointOfSaleOutlinedIcon /><p className="ml-2">Order</p></NavLink>
                <NavLink to={'/products'} className="flex items-center my-2 px-2 py-2  hover:bg-[#A0A5B9] hover:rounded-md"><Inventory2OutlinedIcon /><p className="ml-2">Product</p></NavLink>
                <NavLink to={'/customers'} className="flex items-center my-2 px-2 py-2  hover:bg-[#A0A5B9] hover:rounded-md"><PeopleAltOutlinedIcon /><p className="ml-2">Customer</p></NavLink>
                <NavLink to={'/reports'} className="flex items-center my-2 px-2 py-2 hover:bg-[#A0A5B9] hover:rounded-md"><AssessmentOutlinedIcon /><p className="ml-2">Report</p></NavLink>
                <NavLink to={'/users'} className="flex items-center my-2 px-2 py-2 hover:bg-[#A0A5B9] hover:rounded-md"><PersonOutlineIcon /><p className="ml-2">User</p></NavLink>
            </nav>

        </div>
    )
}
