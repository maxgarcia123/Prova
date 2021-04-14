import React, { useState } from 'react';

import {View, TextInput, Text ,Button, SafeAreaView, Alert} from 'react-native';
import Styles from './styles'

export default ({navigation}) => {
    const [amount, setAmount] = useState(null)
    const [showRecipe, setShowRecipe] = useState(false)
    const [recipe, setRecipe] = useState({
        chocolate: 120,
        butter: 100,
        sugar: 0.25,
        wheat: 2,
        egg: 2,
    })

    const calc = async () => {
        let amountRecipe = (Number(amount)/5)
        if(amountRecipe >= 1){
           await setRecipe({
                chocolate: 120 * amountRecipe,
                butter: 100 * amountRecipe,
                sugar: 0.25 * amountRecipe,
                wheat: 2 * amountRecipe,
                egg: 2 * amountRecipe,
            })

            return setShowRecipe(true)
        }else{
          return Alert.alert("Oops...", "A quantidade minima da receita é 5");
        }
    }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#FFF'}}>
      <View style={Styles.recipe}>
          <View style={{flexDirection: 'row'}}>
              <Text>Quantidade (Min 30):</Text>
              <TextInput
                  placeholder='Quantidade'
                  style={Styles.amount}
                  value={amount}
                  keyboardType="numeric"
                  onChangeText={setAmount}
              />
              <Button title="Calcular" style={Styles.buttonCalc} onPress={calc}/>
          </View>

          { showRecipe?
              <View>
                <Text>{recipe.chocolate}g de chocolate meio amargo</Text>
                  <Text>{recipe.butter}g de manteiga</Text>
                  <Text>{recipe.egg} ovos </Text>
                  <Text>{recipe.sugar}  de açucar</Text>
                  <Text>{recipe.wheat} colheres (sopa) de farinha de trigo</Text>
              </View>
              :
              null
          }
      </View>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
