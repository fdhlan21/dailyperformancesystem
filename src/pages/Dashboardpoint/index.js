import { View, Text, TouchableNativeFeedbackComponent } from 'react-native'
import React, { useEffect } from 'react'
import { MyHeader } from '../../components'
import Orientation from 'react-native-orientation-locker'
import { TouchableNativeFeedback } from 'react-native'
import { colors, fonts } from '../../utils'



export default function DashboardPoint({navigation}) {
 
  const backPage = () => {
    navigation.goBack()
  }

  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
     {/* HEADDER */}
     <View>
     <MyHeader judul="Dashboard Point" onPress={backPage}/>
     </View>
     <View>
    {/* MASUKAN CONTENT DASHBAORD POINT YANG BERISI TABEL */}
     </View>
    </View>
  )
}