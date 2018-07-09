import React from 'react';
import { Image, StyleSheet, Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => {
  const { album } = props,
    { thumbnail_image, title, artist, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: thumbnail_image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerTxt}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={styles.albumImg} />
      </CardSection>
      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTxt: {
    fontSize: 18,
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  albumImg: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;
