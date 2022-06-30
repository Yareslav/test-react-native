import {StyleSheet, Dimensions} from 'react-native';

export const maxWidth = Dimensions.get('window').width;
export const screenMargins = 10 * 2;

const globalStyles = StyleSheet.create({
  full: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: maxWidth - 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
});

export default globalStyles;
