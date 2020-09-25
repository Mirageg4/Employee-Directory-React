import React from "react";
import "./style.css";

function employee(props) {
    

    return (
        <div>
            {props.employerGroup.length ? (
                <ul className="list-group">

                    {props.employerGroup.map(result => (
                        <ul className="list-group-item" key={result.id}>
                            <div id="name"><b>Name: </b>{result.firstName} {result.lastName}
                                <br></br>
                                <b>Title: </b> {result.type}</div>
                            <div id="other"><i>Email: </i> {result.email}
                                <br></br>
                                <i>Phone Number: </i> {result.phone}</div>
                        </ul>
                    ))}
                </ul>
            ) : (
                    <h2>Sorry No Employee by that name</h2>
                )}
        </div>
    )
}

export default employee;
