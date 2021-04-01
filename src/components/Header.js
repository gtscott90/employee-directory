import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Jumbotron from 'react-bootstrap/Jumbotron'
import API from "../utils/API";
import Employeecontainer from "./Employeecontainer";


class Header extends Component {
state = {
    search: "",
    results: [],
    filteredResults: [],
    ascendingSort: false
};   
    
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.nameSort = this.nameSort.bind(this);
      } 
    componentDidMount() {
    API.search()
        .then(res => {
            console.log(res)
            this.setState({ results: res.data.results })})
        .catch(err => console.log(err));
        console.log(this.state.results)
    }

handleInputChange(event) {
   const value = event.target.value;
   this.setState({
       search: value,
       filteredResults: this.state.results.filter(employee => employee.name.first.includes(value) || employee.name.last.includes(value) || employee.email.includes(value) || employee.phone.includes(value))
   })
  };

  // function for sorting clomns by name 
  nameSort(event) {
      let sortedStatus
      console.log(this.state.ascendingSort)
      const aSortedNameArray = [...this.state.results].sort((a, b) => a.name.first > b.name.first ? 1 : -1)
      const dSortedNameArray = [...this.state.results].sort((a, b) => a.name.first > b.name.first ? -1 : 1)
    if (this.state.ascendingSort === false) {
         sortedStatus = aSortedNameArray
    } else {
        sortedStatus = dSortedNameArray
    }
    //   const sortedNameArray = this.state.results.sort((a,b) => {
    //     if (this.state.ascendingSort === false) {
    //     if (a.name.first <  b.name.first) {
    //         return -1;
    //       }} else if (this.state.ascendingSort === true){
    //       if (a.name.first > b.name.first) {
    //         return 1;
    //       }}
    //       return 0;
    //   })
      this.setState({
          results: sortedStatus,
          ascendingSort: !this.state.ascendingSort
      })

  }

  render() {
    return (
        <div>
        <Jumbotron>
        <h1>Employee Directory</h1>
        <p>
          Type in the search bar below to find an employee
        </p>
        <p>
            Click on the table header "Name" to toggle names in ascending/descending order.
        </p>
        
        <p>
          <Searchbar 
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          />
        </p>
      </Jumbotron>
      <Employeecontainer 
      results={this.state.results} 
      filteredResults={this.state.filteredResults}
      nameSort={this.nameSort}
      />
      </div>
    
    );
}
}

export default Header;