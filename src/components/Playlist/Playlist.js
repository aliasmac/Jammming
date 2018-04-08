import React from 'react';
import TrackList from '../components/Tracklist/Tracklist';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    const inputName = event.target.value
    this.props.onNameChange(inputName);
  }

  render () {
    <div className="Playlist">
      <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
      <TrackList onRemove={this.props.onRemove} tracks={this.props.playlistTracks} />
      <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
    </div>
  }
}

export default PlayList;
