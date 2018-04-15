import React from 'react';
import './SearchResults.css';
import TrackList from './components/TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList onAdd={this.props.addTrack} Tracks={this.props.searchResults} />
    </div>
  }
}

export default SearchResults;
