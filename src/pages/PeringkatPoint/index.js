import { View, Text, TouchableNativeFeedbackComponent } from 'react-native'
import React, { useEffect } from 'react'
import { MyHeader } from '../../components'
import Orientation from 'react-native-orientation-locker'
import { TouchableNativeFeedback } from 'react-native'
import { colors, fonts } from '../../utils'



export default function PeringkatPoint({navigation}) {
  useEffect(() => {
    // Mengatur orientasi layar menjadi landscape setelah rendering komponen utama
    setTimeout(() => {
      Orientation.lockToLandscape();
    }, 1000);

    // Membersihkan pengaturan orientasi ketika komponen di-unmount
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

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
        {/* MASUKAN CONTENT UNTUK DASHBOARD POINT  */}
       <View style={{flexDirection:"row", justifyContent:'center', padding:10,}}>

        {/* 1 */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('DashboardCategory')}>
          <View style={{padding:10, backgroundColor:colors.primary, borderRadius:5, marginRight:10,}}>
            <Text style={{color:colors.white, fontFamily:fonts
            .primary[400], }}>DASHBOARD</Text>
          </View>
        </TouchableNativeFeedback>

           {/* 2 */}
           <TouchableNativeFeedback onPress={() => navigation.navigate('Acvhivementstore')}>
          <View style={{padding:10, backgroundColor:colors.primary, borderRadius:5}}>
            <Text style={{color:colors.white, fontFamily:fonts
            .primary[400], }}>ACVHIVEMENT STORE</Text>
          </View>
        </TouchableNativeFeedback>

          {/* 3 */}
          <TouchableNativeFeedback>
          <View style={{padding:10, backgroundColor:colors.primary, borderRadius:5, marginLeft:10}}>
            <Text style={{color:colors.white, fontFamily:fonts
            .primary[400], }}>PERINGKAT POINT</Text>
          </View>
        </TouchableNativeFeedback>
       </View>

       {/* NANTI DISINI MASUKAN BERUPA TABEL */}
       <View>
        {/* TABEL */}
       </View>


     </View>
    </View>
  )
}