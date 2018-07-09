import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = {
    albums: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://rallycoding.herokuapp.com/api/music_albums'
      );
      const jsonRes = await res.json();
      this.setState({
        albums: jsonRes,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.map(album => (
          <AlbumDetail key={album.title} album={album} />
        ))}
      </ScrollView>
    );
  }
}
