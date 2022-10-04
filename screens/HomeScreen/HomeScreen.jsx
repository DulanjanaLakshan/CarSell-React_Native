import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/user_icon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.homeBody}>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    width: '100%',
    height: '7%',
    backgroundColor: '#2c3e50',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  homeBody: {
    width: '100%',
    height: '93%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  item:{
    width: '90%',
    height: '25%',
    borderColor: '#7f8c8d',
    borderRadius: 10,
    borderWidth: 1,
    marginTop:20,
    position: 'relative'
  }
});

export default HomeScreen;
