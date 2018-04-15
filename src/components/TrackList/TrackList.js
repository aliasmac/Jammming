import React from 'react';

class TrackList extends React.Component {


  render() {
    return
    <div className="TrackList">
       {
         this.props.Tracks.map(track => {
           return <track onRemove={this.props.onRemove} onAdd={this.props.onAdd} track={track} key={track.id} />
         })
       }
    </div>
  }
}


export default TrackList;
