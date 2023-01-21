import React from 'react'
import Cards from './components/Cards'

export default function Homepage() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col'>
          <div className="alert alert-dismissible alert-warning">
            <h4 className="alert-heading">JavaScript Practice: <small>A way to stay on the learning path</small></h4>
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
          <div className='card bg-primary progress-bar-striped bg-primary'>
            <div className='card-body '>
              <div className='row'>
                <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center pt-5 pb-5'>
                  <img src='https://avatars.githubusercontent.com/u/52573759?v=4' alt='Turtlebeasts' width={"30%"} style={{borderRadius:'50%'}} className="img-fluid"/>
                </div>
                <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                  <p><i className='fs-4'>Contribute to this repository using your code, if there is any error or mistakes, then feel free to send a PR. The exercises in this website are taken from <a href='https://www.w3resource.com/javascript-exercises/'>w3resource.com/javascript-exercises/</a>. If you want to learn or take examples then head to the website and grab a category <a href='https://github.com/turtlebeasts/javascript_practice'>~Turtlebeasts</a></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
