import {
    Text,
    View,
    StyleSheet,
    Platform
} from 'react-native';

export const styles = StyleSheet.create({
 navigationBarStyle: {
  backgroundColor: '#fff',
 },
 navbar: {
  ...Platform.select({
   ios: {
    marginTop: 20,
    height: 44,
   },
   android: {
    marginTop: 0,
    height: 54,
   },
  }),
 },
 navbarTitle: {
  textAlign: 'center',
  fontSize: 17,
  color: '#333',
  fontWeight: '900'
 },
 content: {
  ...Platform.select({
   ios: {
    marginTop: 64,
   },
   android: {
    marginTop: 54,
   },
  }),
  flex: 1,
  backgroundColor: '#f8f8f8',
 },
 scrollView: {
  flex: 1,
  backgroundColor: 'white',
 },
 textStyle: {
  color: 'black',
 },
});