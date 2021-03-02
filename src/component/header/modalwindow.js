import * as React from 'react';
import "./modalwindow.scss";

const Modalwindow = ({active, setActive, children}) => {
    console.log(children)

    return (
        <div className={active ? "modal_wrapper active" : "modal_wrapper" } onClick={() => setActive(false)}>
            <div className="modal_wrapper_body" onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};


export default Modalwindow;