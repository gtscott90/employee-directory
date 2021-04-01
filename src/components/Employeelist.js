import React from "react";

function Employeelist(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={props.nameSort}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
          <tbody>
          {props.filteredResults.length > 0 ? (
               props.filteredResults.map(result => {
                const splitDate = result.dob.date.split("T")
                const newDate = splitDate[0]
                return(
                <tr>
                      <td><img src={result.picture.thumbnail}/></td>
                      <td>{result.name.first} {result.name.last}</td>
                      <td>{result.phone}</td>
                      <td>{result.email}</td>
                      <td>{newDate}</td>
                  </tr>
                )
            })
          ) : (
          props.results.map(result => {
              const splitDate = result.dob.date.split("T")
              const newDate = splitDate[0]
              return(
              <tr>
                    <td><img src={result.picture.thumbnail}/></td>
                    <td>{result.name.first} {result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{newDate}</td>
                </tr>
              )
          })
          )}
          </tbody>
        </table>
      );
    }

export default Employeelist;