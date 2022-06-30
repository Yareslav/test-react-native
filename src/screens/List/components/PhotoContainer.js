import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../style';

const PhotoContainer = ({navigation, description, url, author}) => {
  const clickHandler = () => {
    navigation.navigate('Preview', {
      imageUrl: url,
    });
  };

  return (
    <TouchableOpacity onPress={clickHandler} style={styles.photoContainer}>
      <Image source={{uri: url}} style={styles.imageSize} resizeMode="cover" />
      <View style={styles.column}>
        <Text style={styles.author}>{author}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default PhotoContainer;
