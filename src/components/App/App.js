import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../components/playlist';
import SearchResults from '../components/SearchResults';
import Playlist from '../components/Playlist';
import Spotify from '../../util/spotify.js';

const track = {
  name: 'Tiny Dancer',
  artist: "Elton John",
  album: 'Madman Across The Water'
}

 const tracks = [
   track,
   track,
   track
 ];


class App extends Component.React {

  constructor(props) {
    super(props);
    this.state = { searchResults: tracks}

      {playlistName: 'Ali\'s Playlist'},

      {playlistTracks: track.uri},


      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlayListName = this.updatePlayListName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);

//end of constructor method
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(!this.state.playlistTracks.includes(track.id)) {
      tracks.push(track);
      this.setState({playlistTracks: tracks})
    }
  }

  removeTrack(track) {
    let currentTracks = this.state.playlistTracks;
    let newTracks = currentTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: newTracks});
}

  updatePlayListName(name) {
    newName = name;
    this.setState({playListName: newName});
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(name, artist, album) {
    Spotify.search(term).then(track => {
      this.setState({searchResults: track})
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.searchbar} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <PlayList onSave={this.savePlaylist} onNameChange={this.updatePlayListName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTrack={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;