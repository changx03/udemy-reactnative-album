import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  const { title } = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000', // PLATFORM: iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2, // Android-only: drop shadow
    // position: 'relative' // relative by default
  },
  textStyle: {
    fontSize: 20,
  },
});

export default Header;
