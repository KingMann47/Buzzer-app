import * as React from 'react'
import {Text,View,StyleSheet} from 'react-native'

class AppHeader extends React.Component {
  render(){
    return(
    <View style={styles.textContainer}>
  
     <Text style={styles.text}>QUIZ-BUZZER-APP</Text>
    </View>
    )
  }
}
 
   const styles=StyleSheet.create({

      textContainer:{
        backgroundColor:'green'
          
      },

      text:{
        color:'orange',
        padding:20,
        fontSize:22,
        fontFamily:'merlin',
        fontWeight:'bold',
        textAlign:'center'
      }
   })

  export default AppHeader;


