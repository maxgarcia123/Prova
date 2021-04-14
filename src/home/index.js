import React from 'react';

import {View, Text, Button, Image, SafeAreaView} from 'react-native';
import  Styles from './styles'

export default ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor: '#FFF'}}>
      <View style={Styles.profile} >
        <Image style={Styles.image} source={require('../../assets/Photo_profile.jpg')} />
        <Text style={Styles.profileName} >Max Garcia Silva Cod: 21774</Text>
      </View>
        <View style={{marginBottom: 15}}>
            <Button  title="Pão de queijo" onPress={() => navigation.navigate('Receita Pão de queijo')} />
        </View>

      <Button title="Petit gateaus" onPress={() => navigation.navigate('Receita Petit Gateaus')} />
    </View>
  );
};
