import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
      this.state = {term: ''};
      this.search = this.search.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleEnter = this.handleEnter.bind(this);
  }

  search(term) {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value})
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      return this.search();
    }
  }

  render() {
    return <div className="SearchBar">
      <input onKeyDown={this.handleEnter} onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
      <a onClick={this.search}>SEARCH</a>
    </div>
  }
}

export default SearchBar;
