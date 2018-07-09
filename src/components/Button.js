import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const btn = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.btn}>
    <Text style={styles.txt}>{props.children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  txt: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default btn;
