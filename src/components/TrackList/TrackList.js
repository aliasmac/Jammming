import React from 'react';

class TrackList extends React.Component {


  render() {
    <div className="TrackList">
       <!-- You will add a map method that renders a set of Track components  -->
       {
         this.props.Tracks.map(track => {
           return <Track onRemove={this.props.onRemove} onAdd={this.props.onAdd} track={track} key={track.id} />
         })
       }
    </div>
  }
}


export default TrackList;
