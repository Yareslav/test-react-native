import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import styles from './style';
import globalStyles, {screenMargins, maxWidth} from '../../globalStyles';

const Preview = ({route}) => {
  const {imageUrl} = route.params;
  const [imageSize, setImageSize] = useState({width: null, height: null});

  useEffect(() => {
    const actualWidth = maxWidth - screenMargins;
    //getting sizeof image to correctly display it
    Image.getSize(imageUrl, (width, height) => {
      const proportion = height / width;

      setImageSize({
        width: actualWidth,
        height: actualWidth * proportion,
      });
    });
  }, []);

  return (
    <View style={[globalStyles.container, styles.imageContainer]}>
      <Image
        style={[imageSize.width && imageSize, styles.minimizer]}
        source={{uri: imageUrl}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Preview;
