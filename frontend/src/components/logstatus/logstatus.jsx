import React from 'react'

export default function LogStatus()
{




    return (
        <div className='container'>

            <div className='row d-flex text-center'>

                <div className='col-12 text-center'>
                    <div>
                        <a className='btn btn-dark' href="/login" title='login'>Login</a>
                    </div>

                </div>

                <div className='col-12 d-flex'>
                    <div className='col-6'>
                        <div>
                            <a href="/userprofile" className='btn btn-dark' target="_blank" rel="noopener noreferrer">
                                username
                            </a>
                        </div>
                    </div>
                    
                    <div className='col-6'>
                        <div>
                            <button className='btn btn-dark' title='log out'>Log Out</button>
                        </div>
                    </div>
                </div>

            </div>

            







        </div>
    )
}

