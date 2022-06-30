import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, FlatList} from 'react-native';
import globalStyles from '../../globalStyles';
import {useSelector, useDispatch} from 'react-redux';
import offerPhotos from '../../api/offerPhotos';

import styles from './style';
import PhotoContainer from './components/PhotoContainer';

const List = ({navigation}) => {
  const dispatch = useDispatch();
  const {photos, loading, error} = useSelector(store => store.mainReducer);

  useEffect(() => {
    dispatch(offerPhotos());
  }, []);

  return (
    <View style={globalStyles.container}>
      {loading && (
        <Text style={[styles.title, styles.loading]}>Loading ...</Text>
      )}

      {error && <Text style={[styles.title, styles.error]}>Error occured</Text>}
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <PhotoContainer {...item} navigation={navigation} />
        )}
        keyExtractor={item => item.key}
        style={styles.flatList}
      />
    </View>
  );
};

export default List;
