import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 18,
    marginBottom: 5,
  },
  completedNameText: {
    color: '#B9B9BE',
  },
  categoryText: {
    color: '#58595B',
  },
});

export default styles;
