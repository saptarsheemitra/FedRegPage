import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NeMoboCss from "./CSS/NavEvent.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function NavEventsMobo(props) {
    const isLightTheme = useSelector((state) => state.isLightTheme);
    return (
        <div className={NeMoboCss.mdiv}>
            <p className={NeMoboCss.mP} id={isLightTheme === false ? "darkModeTitle" : ""}>{props.pTag}</p>
            <div className={NeMoboCss.NeMNewDiv}>
                <ArrowBackIosIcon fontSize="small" />
                <p className={NeMoboCss.newP}>{props.new}</p>
            </div>
        </div>
    )
}
