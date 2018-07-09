import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = props => {
  const { album } = props;
  return (
    <View>
      <Text key={album.title}>{`${album.title} - ${album.artist}`}</Text>
    </View>
  );
};

export default AlbumDetail;
