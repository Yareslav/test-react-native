import {StyleSheet, Dimensions} from 'react-native';
import {maxWidth, screenMargins} from '../../globalStyles';

const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 25,
  },
  loading: {
    color: 'green',
  },
  error: {
    color: 'red',
  },
  photoContainer: {
    marginTop: 10,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    backgroundColor: 'purple',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    width: '50%',
    alignItems: 'flex-end',
  },
  imageSize: {
    width: (maxWidth - screenMargins) * 0.45,
    height: maxHeight / 6,
  },
  author: {
    fontSize: 15,
    fontWeight: '800',
    color: 'blue',
  },
  flatList: {
    marginBottom: 10,
  },
  description: {
    fontWeight: '300',
    marginTop: 5,
    color: 'white',
  },
});

export default styles;
