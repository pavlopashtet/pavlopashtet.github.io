import React from 'react';
import s from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../routes/Routes";
import Cv from "./cv/Cv";
import LiftState from "./liftState/LiftState";
import InputState from "./inputState/InputState";
import FormState from "./formState/FormState";
import Axios from "./axios/Axios";
import Redux from "./redux/Redux";
import ReduxThunk from "./reduxThunk/ReduxThunk";

const Content = () => {
    return (
        <div className={s.container__content}>
            <Routes>
                <Route path={AppRoutes.CV} element={<Cv />} />
                <Route path={AppRoutes.LiftState} element={<LiftState />} />
                <Route path={AppRoutes.InputState} element={<InputState />} />
                <Route path={AppRoutes.FormState} element={<FormState />} />
                <Route path={AppRoutes.Axios} element={<Axios />} />
                <Route path={AppRoutes.Redux} element={<Redux />} />
                <Route path={AppRoutes.ReduxThunk} element={<ReduxThunk />} />
            </Routes>
        </div>

    );
};

export default Content;