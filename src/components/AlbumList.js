import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends Component {
  state = {
    albums: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
      const jsonRes = await res.json();
      this.setState({
        albums: jsonRes
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <View>
        {
          this.state.albums.map(
            album => <Text key={album.title}>{`${album.title} - ${album.artist}`}</Text>
          )
        }
      </View>
    );
  }
}
