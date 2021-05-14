import React from 'react'

function Results({modifiedList}) {
    return (
        <div className="container">
            <div className="row">
            {modifiedList.map((data)=>{
                return (
                    <div className="col-sm-12 col-md-3">
                    <div className="border shadow-sm p-2 m-2">
                    <p><strong>Name: </strong>{data.name.first} {data.name.last}</p>
                    <p><strong>Email:</strong> <small>{data.email}</small></p>
                    <p><strong>Locations:</strong> {data.location.state}</p>
                    </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

// data.name.first
// data.name.last
// data.email
// data.location.state



export default Results;
