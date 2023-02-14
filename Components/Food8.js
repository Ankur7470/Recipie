import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';


const Food8=()=>{
    return(
        <ScrollView>
            <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
           <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
                  <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>
                    PANEER CHILLI
                 </Text>
           </View>

           
           <View style={{borderWidth:3, borderColor:'#FEF5ED', flex:2}}>
              <Image style={{height:200, width:350, borderWidth:10, borderRadius:20}} source={require('./food8.jpg')} /> 
           </View>
          

           <View style={{marginTop:10,flex:5}}>
                 <Text style={{fontSize:30, textAlign:'center'}}>
                    RECIPE
                 </Text>

                 <Text style={{fontSize:20}}>
                    
                 {'\n'}1.  firstly, in a small bowl take ¼ cup corn flour and 2 tbsp maida.{'\n'}{'\n'}
                 2.  also add 1 tsp ginger garlic paste, ½ tsp chilli powder, ¼ tsp pepper powder and ½ tsp salt.
                 3.  form a smooth lump free batter adding ¼ cup water.{'\n'}{'\n'}
                 4.  now dip 12 cubes paneer and coat uniformly.{'\n'}{'\n'}
                 5.  deep fry in hot oil making sure the flame is on medium.{'\n'}{'\n'}
                 6.  stir occasionally until the paneer cubes turn golden brown and crisp.{'\n'}{'\n'}
                 7.  drain off the fried paneer and keep aside.{'\n'}{'\n'}
                 8.  in a large kadai heat 2 tbsp oil and saute 2 clove garlic, 1 chilli and 2 tbsp spring onion.{'\n'}{'\n'}
                 9.  also, saute ½ onion and ½ capsicum on high flame for a minute.{'\n'}{'\n'}
                 10. further add 1 tsp chilli sauce, 2 tbsp tomato sauce, 2 tbsp vinegar and 2 tbsp soy sauce.{'\n'}{'\n'}
                 11. now add ¼ tsp chilli powder, ¼ tsp pepper powder and ¼ tsp salt.{'\n'}{'\n'}
                 12. stir fry until the sauce is combined well.{'\n'}{'\n'}
                 13. prepare the corn flour slurry by mixing 1 tsp corn flour in 2 tbsp water.{'\n'}{'\n'}
                 14. pour the cornflour slurry into the wok and mix continuously.{'\n'}{'\n'}
                 15. stir fry until the sauce turns glossy and thickens.{'\n'}{'\n'}
                 16. add in fried paneer and 2 tbsp spring onion. mix well.{'\n'}{'\n'}
                 17. finally, enjoy chilly paneer with fried rice.{'\n'}{'\n'}

                 
                 </Text>
           </View>
           
        </View>
        </ScrollView>
    )
}
export default Food8;