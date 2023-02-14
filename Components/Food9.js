import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';


const Food9=()=>{
    return(
        <ScrollView>
            <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
           <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
                  <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>
                    SPRING ROLL
                 </Text>
           </View>

           
           <View style={{borderWidth:3, borderColor:'#FEF5ED', flex:2}}>
              <Image style={{height:200, width:350, borderWidth:10, borderRadius:20}} source={require('./food9.jpg')} /> 
           </View>
          

           <View style={{marginTop:10,flex:5}}>
                 <Text style={{fontSize:30, textAlign:'center'}}>
                    RECIPE
                 </Text>

                 <Text style={{fontSize:20}}>
                  {'\n'}
                 How to prepare spring roll wrapper:{'\n'}{'\n'}{'\n'}
                 1. firstly, in a large bowl take 2 cup maida, 2 tbsp corn flour and ½ tsp salt.{'\n'}{'\n'}
                 2. add 2½ cup water and mix well using a whisk.{'\n'}{'\n'}
                 3. whisk until a smooth lump-free batter is formed adding water as required.{'\n'}{'\n'}
                 4. now grease the pan and pour a ladleful of batter on a hot pan.{'\n'}{'\n'}
                 5. swirl once making sure the batter is uniformly spread.{'\n'}{'\n'}
                 6. cook for a minute or until the sheet is cooked without browning.{'\n'}{'\n'}
                 7. now flip over gently and continue to cook.{'\n'}{'\n'}
                 8. finally, spring roll wrapper is ready. you can cover and use to prepare patti samosa or spring rolls.{'\n'}{'\n'}{'\n'}

                 How to prepare veg stuffing:{'\n'}{'\n'}{'\n'}

                 1. firstly, in a large wok, heat 2 tbsp oil. saute 3 clove garlic, 2 chilli and 2 tbsp spring onion.{'\n'}{'\n'}
                 3. now add 1 carrot, 2 cup cabbage, 5 beans, ½ capsicum.{'\n'}{'\n'}
                 4. stir fry without losing the crunchiness of vegetables.{'\n'}{'\n'}
                 5. further, add 2 tbsp vinegar, 2 tbsp soy sauce, 2 tsp chilli sauce, ¼ tsp pepper powder and ½ tsp salt.{'\n'}{'\n'}
                 6. mix well making sure everything is well combined. stuffing is ready.{'\n'}{'\n'}{'\n'}


                 How to fold and fry spring roll:{'\n'}{'\n'}{'\n'}

                 1. firstly, take a prepared wrapper and place a tbsp of prepared veg stuffing.{'\n'}{'\n'}
                 2. rub a tsp of maida paste around the edge. maida helps to seal the roll.{'\n'}{'\n'}
                 3. now roll and fold the sides making sure the roll is sealed tight.{'\n'}{'\n'}
                 4. deep fry in hot oil, keeping the flame on low.{'\n'}{'\n'}
                 5. stir occasionally, until the roll turns golden brown and crisp.{'\n'}{'\n'}
                 6. drain off removing excess oil.{'\n'}{'\n'}
                 7. inally, enjoy veg spring roll with sweet chilli sauce.{'\n'}{'\n'}

                 
                 </Text>
           </View>
           
        </View>
        </ScrollView>
    )
}
export default Food9;