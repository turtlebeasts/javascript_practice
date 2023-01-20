import React from 'react'

export default function Cards(props) {
    return (
        <div className="card border-primary text-white bg-primary mb-3 text-center">
            <div className="card-body">
                <h1 className="card-title display-1">{props.title}</h1>
                <p className="card-text">{props.body}</p>
            </div>
        </div>
    )
}
