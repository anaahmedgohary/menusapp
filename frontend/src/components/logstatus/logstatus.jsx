import React from 'react'

export default function LogStatus()
{




    return (
        <div className='container'>

            <div className='row d-flex text-center'>

                <div className='col col-4'>
                    <div>
                        <a className='btn btn-info' href="/login" title='login'>Login</a>
                    </div>

                </div>

                <div className='col col-4'>
                    <div>
                        <a href="/userprofile" className='btn btn-success' target="_blank" rel="noopener noreferrer">
                            username
                        </a>
                    </div>
                </div>

                <div className='col col-4'>
                    <div>
                        <button className='btn btn-info' title='log out'>Log Out</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

