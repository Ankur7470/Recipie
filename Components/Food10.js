import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';


const Food10=()=>{
    return(
        <ScrollView>
            <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
           <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
                  <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>
                    FRIED RICE
                 </Text>
           </View>

           
           <View style={{borderWidth:3, borderColor:'#FEF5ED', flex:2}}>
              <Image style={{height:200, width:350, borderWidth:10, borderRadius:20}} source={require('./food10.jpg')} /> 
           </View>
          

           <View style={{marginTop:10,flex:5}}>
                 <Text style={{fontSize:30, textAlign:'center'}}>
                    RECIPE
                 </Text>

                 <Text style={{fontSize:20}}>
                 {'\n'}1.  firstly, in a large wok heat 2 tbsp oil. add 10 cloves of garlic and fry until it turns golden brown and crunchy.{'\n'}{'\n'}
                 2. add 1 inch ginger, 2 chilli, 2 tbsp spring onion and stir fry.{'\n'}{'\n'}
                 3. now add ½ onion and stir fry until the onions shrink slightly.{'\n'}{'\n'}
                 4. further add ½ carrot, ½ capsicum, 10 beans, 3 tbsp sweet corn and stir fry until the vegetables turn crunchy.{'\n'}{'\n'}
                 5. make sure not to overcook the vegetables as it turns mushy.{'\n'}{'\n'}
                 6. make some gap and add 2 tbsp chilli sauce, 2 tbsp soy sauce and 1 tbsp vinegar.{'\n'}{'\n'}
                 7. stir fry until the sauces are well combined.{'\n'}{'\n'}
                 8. now add 3 tbsp cabbage, ½ tsp pepper powder and ½ tsp salt. stir fry slightly.{'\n'}{'\n'}
                 9. further, add 4 cup of cooked rice, ½ tsp pepper powder and ½ tsp salt.{'\n'}{'\n'}
                 10. stir fry making sure everything is well combined without breaking rice.{'\n'}{'\n'}
                 11. finally, add 2 tbsp spring onion, and enjoy burnt garlic fried rice.{'\n'}{'\n'}

                 
                 </Text>
           </View>
           
        </View>
        </ScrollView>
    )
}
export default Food10;