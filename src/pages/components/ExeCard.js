import React from 'react'

export default function ExeCard(props) {
  return (
    <div className='card bg-primary'>
      <div className='card-body'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target={"#"+props.title} aria-controls="offcanvasExample">
          Check out
        </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id={props.title} aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">{props.title}</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            {props.component}
            <div>
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
