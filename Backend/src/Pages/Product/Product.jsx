import { NavLink } from 'react-router-dom';
import Datatable from "../../Components/Datatable/Datatable";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Product = () => {
    const columns = [
        { label: 'Category', key: 'category.name' },
        { label: 'Name', key: 'name' },
        { label: 'Selling', key: 'selling' },
        { label: 'Discount', key: 'discount_price' },
        { label: 'Description', key: 'description' },
    ];

    return (
        <section className="h-[97%]">
            <div className="flex justify-end mb-2 mt-1">
                <NavLink to={'/products/create'} className="flex justify-center bg-[#4c5165] text-gray-300 font-bold tracking-widest px-10 py-1 rounded-md">
                    New
                    <AddOutlinedIcon />
                </NavLink>
            </div>
            <Datatable
                apiEndpoint="/products"
                title="Product List"
                columns={columns}
            />
        </section>
    );
};

export default Product;
