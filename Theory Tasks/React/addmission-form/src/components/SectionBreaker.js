import React from 'react'
import Title from "./Title";
function SectionBreaker(props) {
    return (
        <div className="row" >
            <div className="col section__break">
                <Title title={props.sectionTitle} />
            </div>
        </div>
    )
}

export default SectionBreaker