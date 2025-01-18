import { Routes, Route } from "react-router";
import Dashboard from "../pages/dashboards";
import Default from "../pages/user/publicProfiles/profiles/default"
import '../globals.css'

const Router = () => {

    return (
        <>
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/user/publicProfiles/profiles/default' element={<Default />}></Route>
                </Routes>
        </>
    );
}

export default Router;