import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOptions}/>
        <FilterableList
          files={this.props.files}  
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOptions}/>
      </div>
    );
  }
}

export default App;