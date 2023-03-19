import React from 'react';
import FormGroupForMainSection from './FormGroupForMainSection';
import FormGroup from './FormGroup';

function MainSection() {
    return (
        <>
            <FormGroupForMainSection lableContent="New NIC No:" />
            <FormGroupForMainSection lableContent="Name:" />
            <FormGroupForMainSection lableContent="Father's Name:" />
            <FormGroup lableContent="Date of Birth:" inputType="date" lableClass="border__bottom" />
            <FormGroup lableContent="Gender:" lableClass="border__bottom" />
            <FormGroup lableContent="Male:" inputType="radio" />
            <FormGroup lableContent="Female:" inputType="radio" />
            <FormGroup lableContent="Blood Group:" inputType="text" lableClass="border__bottom" />
            <FormGroup lableContent="Mark of identification:" inputType="text" lableClass="border__bottom" />
            <FormGroup lableContent="Contact No:" inputType="text" lableClass="border__bottom" />
            <FormGroup lableContent="Marital Status:" inputType="text" lableClass="border__bottom" />
            <FormGroup lableContent="Married:" inputType="radio" />
            <FormGroup lableContent="Single:" inputType="radio" />
            <FormGroup lableContent="Widower:" inputType="radio" />
            <FormGroup lableContent="Divorced:" inputType="radio" />
            <FormGroupForMainSection lableContent="Nationality:" />
            <FormGroup lableContent="Present Address:" inputType="text" lableClass="border__bottom" />
            <FormGroup lableContent="Permanent Address:" inputType="text" lableClass="border__bottom" />
        </>
    )
}

export default MainSection