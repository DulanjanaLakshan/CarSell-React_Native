import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import SingUpScreen from './screens/SingUpScreen/SingUpScreen'

const App = () => {
  return (
    <View>
     <LoginScreen/>
     {/* <SingUpScreen/> */}
    </View>
  )
}

export default App