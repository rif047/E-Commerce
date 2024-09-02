import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Left_Menu from './Components/Left_Menu/Left_Menu';
import Top_Menu from './Components/Top_Menu/Top_Menu';
import Footer from './Components/Footer/Footer';

import Dashboard from './Pages/Dashboard/Dashboard';
import Customer from './Pages/Customer/Customer';
import Product from './Pages/Product/Product';

const AllRoutes = () => {
    return (
        <main className="flex h-screen">
            <aside>
                <Left_Menu />
            </aside>

            <aside className="w-full flex flex-col">
                <header>
                    <Top_Menu />
                </header>

                <main className="bg-gray-200 flex-grow overflow-hidden">
                    <section className="container m-auto p-2 h-[92%]">
                        <ToastContainer />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/customers" element={<Customer />} />
                            <Route path="/products" element={<Product />} />
                        </Routes>
                    </section>
                </main>

                <footer>
                    <Footer />
                </footer>
            </aside>
        </main>
    );
};

export default AllRoutes;
