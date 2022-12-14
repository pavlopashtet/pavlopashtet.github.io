import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import {RedirectRoutes} from "../../common/Routes";

const Header = () => (
    <div className={styles.container}>
     <Link to= {RedirectRoutes.Andrian}>
            <span style={{fontSize:"20px"}}>Andrian</span>
        </Link>
        <Link to= {RedirectRoutes.Iryna}>
            <span style={{fontSize:"20px"}}>IRYNA</span>
        </Link>
        <Link to={RedirectRoutes.Ihor}>
            <span style={{fontSize: '20px'}}>Ihor</span>
        </Link>
        <Link to={RedirectRoutes.MENTOR}>
            <span style={{fontSize: '20px'}}>MENTOR</span>
        </Link>
        <Link to={RedirectRoutes.Solomiya}>
            <span style={{fontSize: '20px'}}>Solomiya</span>
        </Link>
        <Link to={RedirectRoutes.Sasha}>
            <span style={{fontSize: '20px'}}>Sasha</span>
        </Link>
        <Link to={RedirectRoutes.Vitalii}>
            <span style={{fontSize: '20px'}}>Vitalii</span>
        </Link>
        <Link to={RedirectRoutes.NATALIA}>
            <span style={{ fontSize: "20px" }}>Natalia</span>
        </Link>
        <Link to={RedirectRoutes.NataliaKoziar}>
            <span style={{ fontSize: "20px" }}>Natalia_Koziar</span>
        </Link>
        <Link to={RedirectRoutes.Andrew}>
            <span style={{ fontSize: "20px" }}>Andrew</span>
        </Link>
        <Link to={RedirectRoutes.newAxios}>
            <span style={{ fontSize: "20px" }}>New Axios</span>
        </Link>
        <Link to={RedirectRoutes.StepanRudiak}>
          <span style={{ fontSize: "20px" }}>StepanRudiak</span>
        </Link>
        <Link to={RedirectRoutes.IrynaNestorko}>
          <span style={{ fontSize: "20px" }}>IrynaNest</span>
        </Link>
    </div>
);

export default Header;
