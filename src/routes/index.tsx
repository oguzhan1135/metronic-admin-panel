import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import '../globals.css'
import Layout from "../layouts/layout";


const Router = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<Dashboard isOpen/>}></Route>
                    <Route path='/user' element={<User />}></Route>
                </Routes>
            </Layout>

        </>

    );
}

export default Router;