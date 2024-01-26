import { View, Text } from 'react-native'
import React from 'react'
import { colors } from 'react-native-elements'
import { MyHeader } from '../../components'

export default function ScoreAudit({navigation}) {
  const backPage = () => {
    navigation.goBack()
  }

  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
     {/* HEADDER */}
     <MyHeader judul="Score Audit" onPress={backPage}/>
     <View>
        {/* MASUKAN CONTENT UNTUK SCORE AUDIT  */}
     </View>
    </View>
  )
}