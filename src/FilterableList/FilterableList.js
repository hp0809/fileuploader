import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
  
  render() {
    const searchTerm = this.props.searchTerm;
    const filterOption = this.props.filterOption;
    const list = this.props.files
        .filter(file => file.name.includes(searchTerm)
              && (filterOption === 'All' || file.status === filterOption))
        .map((file, key) => <ListItem {...file} key={key} />);
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};


export default FilterableList;