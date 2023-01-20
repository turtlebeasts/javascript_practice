import React from 'react'

export default function About() {
  return (
    <div className='row mt-3'>
      <div className='col'>
        <div className='card progress-bar-striped bg-primary'>
          <div className='card-body container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center pt-5 pb-5'>
                <img src='https://avatars.githubusercontent.com/u/52573759?v=4' alt='Turtlebeasts' style={{ borderRadius: '50%' }} className="img-fluid" width={"40%"}/>
              </div>
              <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                <p>
                  <i className='fs-4'>
                    Welcome to JavaScript practice repository, this website is a showcase for JavaScript programming and features of ES-6. Head to the repository <a href='https://github.com/turtlebeasts/javascript_practice'>turtlebeasts/javascript_practice</a> and contribute your code.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
