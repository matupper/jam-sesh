import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostCreation = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Post Creation (Create a new post here)</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, color: '#3d00b6' },
});

export default PostCreation; 