import React from 'react';
// import logo from "./../logo.png";
import Title from "./Title";


function Header() {
    return (
        <div className='row center__all text-center my-3'>
            <div className="col-sm-12 col-lg-3">
                <img width="50%" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/KP_logo.png" className="img-fluid" alt='logo' />
            </div>
            <div className=" col-sm-12 col-lg-9 center__all__column">
                <Title title="GOVERNMENT OF Khyber Pakhtunkhwa" />
                <Title title="Finance Department" />
            </div>
        </div >
    )
}

export default Header