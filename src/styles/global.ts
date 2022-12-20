import {StyleSheet} from 'react-native';

export const useGlobalStyles = () =>
  StyleSheet.create({
    title: {
      color: '#9B9898',
      fontWeight: '800',
      fontSize: 14,
      marginBottom: 10,
    },
    btn: {
      backgroundColor: '#334FFA',
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnTxt: {
      color: 'white',
      fontWeight: '800',
      fontSize: 14,
    },
  });
