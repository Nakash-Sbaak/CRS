import React from "react";
import styles from './Input.module.css'
const Input = (props)=>{
return(
    <div className={styles.data}>
    <input type={props.type} required/>
    <span className={styles.label}>{props.children}</span>
    </div>
)
}


export default Input