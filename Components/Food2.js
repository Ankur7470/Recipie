import React from 'react';
import {View, Text} from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

const Food2 = () => {
    return(
        <ScrollView>
        <View style={{flex:1, alignItems:'stretch', backgroundColor:'#FEF5ED',margin:5}}>
            <View style={{flex:2, alignItems:'center',paddingTop:25}}>
                <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>MATAR PANEER</Text>
            </View>
            
            
            <View style={{flex:4,alignItems:'center',borderWidth:20,  borderColor:'#FEF5ED'  }}>
                <Image style={{ resizeMode:'stretch',height:200,width:350, borderRadius:40}} source={require('./food2.jpg')}/>
            </View>
            
            <View style={{flex:9}} >
                <Text style={{fontSize:30,textAlign:'center'}}>RECIPE </Text>
                   <Text style={{fontSize:20, letterSpacing:1}}> 1. First, you will take all of the masala paste ingredients and add them to a grinder or a blender.</Text>

<Text style={{fontSize:20, letterSpacing:1}}>2. After that, you will grind the ingredients into a smooth paste. If needed add 2 to 3 tablespoons of water while grinding the masala paste. When the paste is creamy and blended to a fine consistency, set aside until later.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>3. Next add 3 tablespoons oil in a 2-litre pressure cooker or a pot. Let the oil become hot. Reduce heat to a medium-low heat. Add ½ teaspoon cumin seeds and fry until they splutter.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>4. Next, add in your ground masala paste, and mix well.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>5. Now you will sauté the paste mixture for about 10 to 12 minutes on a medium-low heat.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>6. After sautéing the masala paste, add in all of the dry spice powders, stir to combine well and sauté for a minute.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>7. Next, add in 1 cup of rinsed green peas or matar.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>8. Mix again.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>9. Then, add 1 to 1.25 cups water, salt and mix thoroughly.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>10. Its now time to pressure cook the green peas until they are fully cooked. Be sure to cover the cooker tightly, then cook for about 9 to 10 minutes or 2 to 3 whistles on medium to medium-high heat.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>11. Finally, add the paneer cubes and mix well or simmer on a low heat for a few seconds or until the paneer cubes are fully cooked. Don’t overcook as the paneer will become dense and hard.</Text>
<Text style={{fontSize:20, letterSpacing:1}}>12. Now that your matar paneer is ready to eat, garnish with chopped coriander leaves and serve hot or warm.</Text>
            </View>
            
        </View>
        </ScrollView>
    )

}
export default Food2;