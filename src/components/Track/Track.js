import React from 'react';

const track = {
  name: 'Tiny Dancer',
  artist: "Elton John",
  album: 'Madman Across The Water'
}

class Track extends React.Component {
  constructor(props) {
    super(props) {
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = thisremoveTrack.bind(this);
    }
  }

  renderAction() {
    if (isRemoval) {
      return <a onClick={this.removeTrack} className="Track-action">-</a>
    } else {
      return <a onclick={this.addTrack} className="Track-action">+</a>
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track}
  }

  removeTrack() {
    this.props.onRemove(this.props.track)
  }


  render() {
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      {this.renderAction()}
    </div>
  }
}

export default Track;
