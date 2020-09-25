import React from "react";
import "./style.css";


function Form(props) {

    return (
        <div>
            <br></br>
            <h1>Employee Directory</h1>
            <br></br>
            <h3>Enter employee's first name below and click 'Search Employee'</h3>

            <div class="entertext">
                <form className="form">

                    <input
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Names - case sensitive"
                    />
                    <br></br>
                    <button onClick={props.handleFormSubmit}>Search Employee</button>
                </form>
            </div>
            <br></br>
            <h5>Use 'Sort Names' button to sort employees alphabetically</h5>
        </div>
    );

}

export default Form;