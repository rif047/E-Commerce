import { Link } from 'react-router-dom';
import MenuItem from "./MenuItem";


export default function Left_Menu() {
    return (
        <div className='w-[270px] overflow-y-auto h-100vh hidden lg:block'>
            <div className="bg-[#4C5165] h-[60px] flex items-center pl-2">
                <Link to={'/'} className='noActive'><img className="w-[170px]" src={'/Assets/Img/logo.png'} alt="FivoSoft Technology" /></Link>
            </div>

            <MenuItem />
        </div>
    )
}
