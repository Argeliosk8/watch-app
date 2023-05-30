import React, {useState, useEffect} from "react";
import styles from './Watch.module.css'

function Watch({watchTimes}) {
    const [name, setName] = useState()
    function handleChange({target}){        
        setName(target.value)
    }

    return (
        <div className={styles.watchdiv}>
            <h2>{watchTimes.hour < 10 ? '0' : ''}{watchTimes.hour}:{watchTimes.minute < 10 ? '0' : ''}{watchTimes.minute}:{watchTimes.second < 10 ? '0' : ''}{watchTimes.second}</h2>
            <h3>What is this?</h3>
            <h4>{name}</h4>
            <input type="text" onChange={handleChange} value={name} className={styles.watchinput}></input>
        </div>
    )
}

export default Watch;