import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";


export function RoutesApp(){
    return(
        <Routes>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}