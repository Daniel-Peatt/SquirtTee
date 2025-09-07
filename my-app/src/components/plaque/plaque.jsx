import React from "react";
import './plaque.css';

function Plaque({winner, onClick}) {
    return (
        <>
            <div onClick={onClick} className="plaque-container"><div className="plaque-nail"></div>{winner}<div className="plaque-nail"></div></div>
        </>
    );
}

export default Plaque;