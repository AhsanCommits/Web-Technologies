import React from 'react'

function FormGroup(props) {
    return (
        <div className="row center__all">
            <div className="col-sm-12 col-lg-4">
                <label for="name">{props.lableContent}</label>
            </div>
            <div className="col-sm-12 col-lg-8">
                <input type={props.inputType} name="name" size="1" maxlength="20" className={props.lableClass} />
            </div>
        </div>
    )
}

export default FormGroup