import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';


const Food7=()=>{
    return(
        <ScrollView>
            <View style={{flex:1,  backgroundColor:'#FEF5ED'}}>
           <View style={{flex:1, backgroundColor:'#FEF5ED'}}>
                  <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>
                    MANCHURIAN
                 </Text>
           </View>

           
           <View style={{borderWidth:3, borderColor:'#FEF5ED', flex:2}}>
              <Image style={{height:200, width:350, borderWidth:10, borderRadius:20}} source={require('./food7.jpg')} /> 
           </View>
          

           <View style={{marginTop:10,flex:5}}>
                 <Text style={{fontSize:30, textAlign:'center'}}>
                    RECIPE
                 </Text>

                 <Text style={{fontSize:20}}>
                 {'\n'}1.  firstly, in a large bowl take 1 carrot, 5 tbsp cabbage, 2 tbsp spring onion, ½ onion and ½ tsp ginger garlic paste.{'\n'}{'\n'}
                 2.  also add 1 tsp chilli sauce, ½ tsp salt.{'\n'}{'\n'}
                 3.  mix well making sure everything is combined well,{'\n'}{'\n'}
                 4.  further, add 2 tbsp maida, 2 tbsp cornflour and mix well.{'\n'}{'\n'}
                 5.  form a soft dough adding maida if required.{'\n'}{'\n'}
                 6.  now prepare a small ball sized balls.{'\n'}{'\n'}
                 7.  deep fry in hot oil keeping the flame on medium.{'\n'}{'\n'}
                 8.  stir occasionally, until the balls turn golden brown.{'\n'}{'\n'}
                 9.  drain off the manchurian balls and keep aside.{'\n'}{'\n'}
                 10. now in a large wok, heat 2 tbsp oil and saute 1 inch ginger, 3 clove garlic, 1 chilli and 2 tbsp spring onion.{'\n'}{'\n'}
                 11. add ½ onion and stir fry on high flame.{'\n'}{'\n'}
                 12. further, add ½ capsicum and stir fry until it shrinks slightly.{'\n'}{'\n'}
                 13. add 2 tbsp vinegar, 2 tbsp soy sauce, 1 tsp chilli sauce, 2 tbsp tomato sauce, ½ tsp pepper powder and ¼ tsp salt.{'\n'}{'\n'}
                 14. stir fry making sure all the sauces are well combined.{'\n'}{'\n'}
                 15. add in 1¼ cup water and boil on medium flame.{'\n'}{'\n'}
                 16. in a small bowl take 2 tsp cornflour and ¼ cup water.{'\n'}{'\n'}
                 17. mix well forming a lump-free slurry.{'\n'}{'\n'}
                 18. pour in cornflour slurry and mix well.{'\n'}{'\n'}
                 19. continue to boil until the gravy thickens and turns glossy.{'\n'}{'\n'}
                 20. add in prepared veg manchurian balls, 2 tbsp spring onion and mix well.{'\n'}{'\n'}
                 21. finally, serve veg manchurian gravy with fried rice.{'\n'}{'\n'}

                 
                 </Text>
           </View>
           
        </View>
        </ScrollView>
    )
}
export default Food7;