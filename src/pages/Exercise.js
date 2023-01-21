import React from 'react'
import ExeCard from './components/ExeCard'

export default function Exercise(props) {
    return (
        <div className='container mt-3'>
            <div className='row'>
                {
                    props.exe.length ?
                        props.exe.map((item, key) => {
                            return (
                                <div className='col-md-4 col-sm-6 mb-3' key={key}>
                                    <ExeCard
                                        title={item.title}
                                        description={item.description}
                                        component={item.component}
                                    />
                                </div>
                            )
                        })
                        :
                        "No exercises"
                }
            </div>
        </div>
    )
}
