import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';


const Food6=()=>{
    return(
        <ScrollView>
            <View style={{flex:1,backgroundColor:'#FEF5ED'}}>
           <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
                  <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>
                    CHOW MEIN
                 </Text>
           </View>

           
           <View style={{borderWidth:3, borderColor:'#FEF5ED', flex:2}}>
              <Image style={{height:200, width:350, borderWidth:10, borderRadius:20}} source={require('./food6.jpg')} /> 
           </View>
          

           <View style={{marginTop:10,flex:5}}>
                 <Text style={{fontSize:30, textAlign:'center'}}>
                    RECIPE
                 </Text>

                 <Text style={{fontSize:20}}>
                  {'\n'}
                 1. firstly, in a large wok, heat 2 tbsp oil and stir fry 3 clove garlic, 1 inch ginger and few spring onion.{'\n'}{'\n'}
                 2. add ½ onion, ½ green capsicum, ½ red capsicum, ½ carrot and ½ cup cabbage.{'\n'}{'\n'}
                 3. stir fry until the vegetables shrink yet remain crunchy.{'\n'}{'\n'}
                 4. make sone space in the centre and pour the prepared sauce.{'\n'}{'\n'}
                 5. stir fry on high flame for a minute until everything is well combined.{'\n'}{'\n'}
                 6. also, add ½ cup cabbage and stir fry.{'\n'}{'\n'}
                 7. further, add boiled noodles and give a good toss.{'\n'}{'\n'}
                 8. make sure the spices are well combined with noodles.{'\n'}{'\n'}
                 9. finally, add more spring onions, and enjoy veg chowmein.{'\n'}
                 </Text>
           </View>
           
        </View>
        </ScrollView>
    )
}
export default Food6;