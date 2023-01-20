import React from 'react'
import Cards from './components/Cards'

export default function Homepage() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col'>
          <div class="alert alert-dismissible alert-warning">
            <h4 class="alert-heading">JavaScript Practice: <small>A way to stay on the learning path</small></h4>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <Cards title="Learn" body="Learn the most out javascript by doing it" />
        </div>
        <div className='col-sm-12 col-md-4'>
          <Cards title="Explore" body="Explore different ways to approach your project" />
        </div>
        <div className='col-sm-12 col-md-4'>
          <Cards title="Contribute" body="Contribute to projects and keep learning" />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='card bg-primary'>
            <div className='card-body '>
              <div className='row'>
                <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                  <img src='https://avatars.githubusercontent.com/u/52573759?v=4' alt='Turtlebeasts' style={{borderRadius:'50%'}} className="img-fluid"/>
                </div>
                <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                  <p><i className='fs-4'>Contribute to this repository using your code, if there is any error or mistakes, then feel free to send a PR.</i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
