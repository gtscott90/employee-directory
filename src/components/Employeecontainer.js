import React from "react";
import { render } from "react-dom";
import API from "../utils/API";
import Employeelist from "./Employeelist";
import Header from "./Header";

function Employeecontainer(props) {
    
    return (
        <div>
            <Employeelist 
            results={props.results} 
            filteredResults={props.filteredResults}
            nameSort={props.nameSort}
            />
        </div>

    );
}


export default Employeecontainer;
