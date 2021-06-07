import React, { useState } from 'react';

const IncDec = () => {

    const [value, setValue] = useState(0)

    const Increm = () => {
        setValue(value + 1);   
    }

    const Decrem = () => {
        if (value > 0) {
            setValue(value - 1);
        } else {
            setValue(0);
        }
    }

    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <h1> {value} </h1>
                <div className="btn_div">
                    <button onClick={Increm}>Increm</button>
                    <button onClick={Decrem}>Decrem</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default IncDec;