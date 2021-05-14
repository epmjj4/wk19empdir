import React, {Component} from 'react';
import API from './utils/api';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { originalList: [],modifiedList: [], input:""};
  }
/**
 * 1) Create a search function that will take this.state.input and then we will use filter method on this.state.originalList to find the user based on their first name --data.name.first.
 * 2)take the results of that filter method stored in a variable and set that varaible to this.setState({modifiedList:filteredUsers})
 * 3) We need to pass this search function as props to Search component. 
 

 
 * 6) Pass this function into the Search component
 * 7)Get the Search component to use these functions. 
 */
  handleUserInput=(event) => {
    this.setState({
      input:event.target.value
    })
    console.log(event.target.value)
  }

  componentDidMount() {
    API.getUsers().then((response)=> {
      console.log(this.state);
       this.setState({originalList:response.data.results,modifiedList:response.data.results });
      
  
    })
    
   }

 render() {
    return (
      <div className="App">
        <Search input={this.state.input} handleUserInput={this.handleUserInput}/>
        <Results modifiedList={this.state.modifiedList} />
    
      </div> 
    );
}}
export default App;

