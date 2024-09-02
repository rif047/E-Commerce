import { NavLink } from 'react-router-dom';
import Datatable from "../../Components/Datatable/Datatable";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Customer = () => {
    const columns = [
        { label: 'Name', key: 'name' },
        { label: 'Phone', key: 'phone' },
        { label: 'Email', key: 'email' },
        { label: 'Address', key: 'address' },
    ];

    return (
        <section className="h-[97%]">
            <div className="flex justify-end mb-2 mt-1">
                <NavLink to={'/customers/create'} className="flex justify-center bg-[#4c5165] text-gray-300 font-bold tracking-widest px-10 py-1 rounded-md">
                    New
                    <AddOutlinedIcon />
                </NavLink>
            </div>
            <Datatable
                apiEndpoint="/customers"
                title="Employee List"
                columns={columns}
            />
        </section>
    );
};

export default Customer;
