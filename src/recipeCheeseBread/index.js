import React, { useState } from 'react';

import {View, TextInput, Text ,Button, SafeAreaView, Alert} from 'react-native';
import Styles from './styles'

export default ({navigation}) => {
    const [amount, setAmount] = useState(null)
    const [showRecipe, setShowRecipe] = useState(false)
    const [recipe, setRecipe] = useState({
        cheese: 100,
        powder: 1,
        walter: 1,
        milk: 1,
        oil: 1,
        egg: 3,
        salt: 1,
    })

    const calc = async () => {
        let amountRecipe = (Number(amount)/30)
        console.log('numero', amountRecipe)
        if(amountRecipe >= 1){
           await setRecipe({
                cheese: 100 * amountRecipe,
                powder: amountRecipe,
                walter: amountRecipe,
                milk: amountRecipe,
                oil:  amountRecipe,
                egg: 3 * amountRecipe,
                salt: amountRecipe,
            })

            return setShowRecipe(true)
        }else{
          return Alert.alert("Oops...", "A quantidade minima da receita é 30");
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
                <Text>{recipe.powder} de polvilho azedo</Text>
                  <Text>{recipe.milk} copo de leite</Text>
                  <Text>{recipe.walter} copo de água</Text>
                  <Text>{recipe.oil} copo de óleo</Text>
                  <Text>{recipe.salt} colher de sopa de sal</Text>
                  <Text>{recipe.egg} ovos</Text>
                  <Text>{recipe.cheese}g de queijo ralado</Text>
              </View>
              :
              null
          }
      </View>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
