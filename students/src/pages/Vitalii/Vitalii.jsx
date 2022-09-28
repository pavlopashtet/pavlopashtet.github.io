import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {SolutionRoutes} from "./VitaliiRouts";
import {RedirectRoutes} from "../../common/Routes";
import styles from "./CVpages/VitaliiPage.module.scss"
import VitaliiComponentPage from "./CVpages/CVPageVitalii";
import {SolutionRoutes} from "../Vitalii/VitaliiRouts";
import VitComponent from "../Vitalii/Components/VitDumb";



const Main = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.header}>Vitalii Component Page</h1>

            <Link className={styles.box} to={`${RedirectRoutes.Vitalii}${SolutionRoutes.CV}`}>
                <span style={{fontSize: '20px'}}>CV</span>
            </Link>

            <Link className={styles.box} to={`${RedirectRoutes.Vitalii}${SolRoutes.STATE}`}>
                <span style={{fontSize: '20px'}}>States</span>
            </Link>

        </div>
    )
};

export const Vitalii = ()=> {
    return (
        <Routes>
            <Route path={SolutionRoutes.MAIN} element={<Main/>}/>
            <Route path={SolutionRoutes.CV} element={<VitaliiComponentPage/>}/>
            <Route path={SolutionRoutes.STATE} element={<VitComponent/>}/>
        </Routes>
    )
}

export default Vitalii