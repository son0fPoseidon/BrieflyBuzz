import React, { useEffect, useState } from 'react';
import "./ScrollBackBtn.css";

const ScrollBackBtn = () => {
    const [scroll, setScroll] = useState(false);
    const hideBtn = () => {
        if (window.scrollY > 500) setScroll(true);
        else setScroll(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", hideBtn);
        return () => window.removeEventListener("scroll", hideBtn);
    }, [])
    return (
        <>
        <div onClick={() => { window.scrollTo(0, 0) }}
        className={`${!scroll?'hideScroll':''}`}
        >
            <i className="fas fa-chevron-up scrollBackBtn"></i>
        </div>
        </>
    )
}

export default ScrollBackBtn
