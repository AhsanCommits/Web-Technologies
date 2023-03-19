import React from 'react';
import FormGroup from './FormGroup';

function SignatureSection(props) {
    return (
        <div className='border p-3 m-2'>
            <p>{props.paragraphContent}</p>
            <FormGroup lableContent={props.lableContent1} inputType="text" lableClass="border__bottom" />
            <FormGroup lableContent={props.lableContent2} inputType="text" lableClass="border__bottom" />
            <FormGroup lableContent={props.lableContent3} inputType="text" lableClass="border__bottom" />
        </div>
    )
}

export default SignatureSection