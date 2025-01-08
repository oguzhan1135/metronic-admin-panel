import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import '../globals.css'

const Router = () => {

    return (
        <>
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/user' element={<User />}></Route>
                </Routes>
        </>
    );
}

export default Router;