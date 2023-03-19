import React from 'react';
import FormGroup from './FormGroup';
function FirstSection() {
    return (
        <>
            <FormGroup lableContent="Personal No:" lableClass="border__bottom" />
            <FormGroup lableContent="Retired As/Designation:" lableClass="border__bottom" />
            <FormGroup lableContent="Date of Retirement:" lableClass="border__bottom" />
            <FormGroup lableContent="BPS:" lableClass="border__bottom" />
            <FormGroup lableContent="Department:" lableClass="border__bottom" />
            <FormGroup lableContent="District:" lableClass="border__bottom" />
            <FormGroup lableContent="Dealing Account Office:" lableClass="border__bottom" />
        </>
    )
}

export default FirstSection