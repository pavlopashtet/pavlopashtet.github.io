import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AppRoutes, RedirectRoutes} from "../../common/Routes";
import NotFoundPAge from "../404/NotFoundPAge";
import {IhorRout} from "./IhorRouts";
import {MyRoutes} from "../Iryna/MyRoutes";
import IhorCV from "./CV/IhorCV";
import IhorContainerPage from "./liftState/DumbComponentIhor";
import InputIh from "./InputIhor/Input";
import AxiosPg from "./Axios/AxiosIhor";
import ReduxPg from "./Redux/reduxComp";
import Forms from "./Forms/Forms";

const IhorComponent = ()=>{
    return(
        <div>
        <h1>Ihor's Component</h1>

            <Link to={`${RedirectRoutes.Ihor}${AppRoutes.CV}`}>
                <span style={{ fontSize: "20px" }}>CV</span>
            </Link>

            <Link to={`${RedirectRoutes.Ihor}${IhorRout.LiftState}`}>
                <span style={{ fontSize: "20px" }}>liftState</span>
            </Link>

            <Link to={`${RedirectRoutes.Ihor}${IhorRout.InputState}`}>
                <span style={{ fontSize: "20px" }}>Input</span>
            </Link>
            <Link to={`${RedirectRoutes.Ihor}${IhorRout.Form}`}>
                <span style={{ fontSize: "20px" }}>Form</span>
            </Link>

            <Link to={`${RedirectRoutes.Ihor}${IhorRout.Axios}`}>
                <span style={{ fontSize: "20px" }}>Axios</span>
            </Link>
            <Link to={`${RedirectRoutes.Ihor}${IhorRout.Redux}`}>
                <span style={{ fontSize: "20px" }}>Redux</span>
            </Link>

    <Routes>
        <Route path={IhorRout.CVROUTE} element={<IhorCV/>}/>
        <Route path={IhorRout.LiftState} element={<IhorContainerPage/>}/>
        <Route path={IhorRout.InputState} element={<InputIh/>}/>
        <Route path={IhorRout.Form} element={<Forms/>}/>
        <Route path={IhorRout.Axios} element={<AxiosPg/>}/>
        <Route path={IhorRout.Redux} element={<ReduxPg/>}/>
    </Routes>
        </div>
    )
}

export default IhorComponent;