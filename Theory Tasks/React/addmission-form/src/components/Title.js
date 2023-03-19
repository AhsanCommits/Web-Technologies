import React from 'react'

function Title(props) {
    return (
        <h4 className={props.border} >{props.title}</h4>
    )
}

export default Title