import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import './Datatable.css';
import { toast } from 'react-toastify';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


const Datatable = ({ apiEndpoint, columns, title }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await Axios.get(`${import.meta.env.VITE_API_URL}${apiEndpoint}`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure..?")) {
            try {
                await Axios.delete(`${import.meta.env.VITE_API_URL}${apiEndpoint}/delete/${id}`);
                toast.error("Deleted!", { position: "top-right", theme: "dark" });
                fetchData();
            } catch (error) {
                console.error("Error deleting data:", error);
            }
        }
    };

    const getActions = (id) => (
        <div>
            <NavLink to={`/edit/${id}`} className="mr-5 text-yellow-400">
                <EditOutlinedIcon />
            </NavLink>
            <button onClick={() => handleDelete(id)} className="text-red-400">
                <DeleteOutlineOutlinedIcon />
            </button>
        </div>
    );

    const formattedData = data.map((item, index) => [
        index + 1,
        ...columns.map(col => {
            if (col.key === 'category.name') {
                return item.category.name;
            }
            return item[col.key];
        }),
        getActions(item._id)
    ]);

    const tableColumns = ['SL', ...columns.map(col => col.label), 'Action'];

    const options = {
        responsive: 'standard',
        print: false,
        selectableRows: false,
        rowsPerPage: 20,
        rowsPerPageOptions: [10, 20, 50, 100],
        fixedHeader: true,
    };

    const getMuiTheme = () => createTheme({
        typography: { fontFamily: ['PT Sans'] },
        palette: { background: { paper: '#fafafa' }, mode: 'light' },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    head: { padding: '5px 0px', backgroundColor: '#3E3E3E', color: '#ffffff' },
                    body: { padding: '5px 5px 5px 15px', color: '#4c5165' }
                }
            }
        }
    });

    return (
        <div className="table-container">
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={title}
                    data={formattedData}
                    columns={tableColumns}
                    options={options}
                />
            </ThemeProvider>
        </div>
    );
};

export default Datatable;
