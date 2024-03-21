import React from 'react'
import "./Progressbar.css"
import { useState } from 'react'
import { useEffect } from 'react';

function Progressbar(index, activeIndex, duration) {
    let [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((preProgress) => {
                if (preProgress < 100)
                    return preProgress + 1;
                clearInterval(interval)
                return preProgress;
            })
        }, duration / 100)
        return () => { clearInterval(interval) }
    }, [duration, activeIndex])

    useEffect(() => {
        setProgress(0)
    }, [activeIndex])

    let isActive = index === activeIndex;
    return (
        <div className={`progess-bar-container ${isActive ? "active" : ""} `}>
            <div className={`${isActive ? 'progess-bar' : ''}`} style={{ width: `${progress}%` }}>

            </div>
        </div>
    )
}

export default Progressbar
