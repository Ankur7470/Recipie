import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native';

const Food3 =() => {
    return (
        <ScrollView>
        <View style={{flex:1, alignItems:'stretch', backgroundColor:'#FEF5ED',margin:5}}>
            <View style={{flex:2, alignItems:'center',paddingTop:25}}>
                <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>DAL TADKA</Text>
            </View>
            
            
            <View style={{flex:4,alignItems:'center',borderWidth:20,  borderColor:'#FEF5ED'  }}>
                <Image style={{ resizeMode:'stretch',height:200,width:350, borderRadius:40}} source={require('./food3.jpg')}/>
            </View>
            
            <View style={{flex:9}} >
                <Text style={{fontSize:30,textAlign:'center'}}>RECIPE </Text>
                <Text style={{fontSize:20, letterSpacing:1}}>1.  Firstly, in a pressure cooker take ½ cup toor dal, 2 tbsp masoor dal. you can also add moong dal if you prefer.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>2.  Also add ¼ tsp turmeric, ½ tsp salt, 1 tsp oil and 1½ cup water.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>3.  Pressure cook for 5 whistles or until dal is cooked well.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>4.  Add 1 cup water and adjust consistency. keep aside.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>5.  Now in a large kadai heat 2 tbsp ghee and splutter ½ tsp cumin, 1 bay leaf, pinch hing and 2 dried red chilli.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>6.  Also add 2 clove garlic, 1 inch ginger, 1 chilli and saute slightly.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>7.  Further add 1 onion and saute until it turns golden brown.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>8.  Keeping the flame on low add ¼ tsp turmeric, ½ tsp chilli powder, ½ tsp coriander powder and ½ tsp salt.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>9.  Add 1 tomato and saute until it turns soft and mushy.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>10.  Add in cooked dal and stir well adjusting consistency as required.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>11.  Simmer for 5 minutes or until flavours are well combined.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>12.  Now add 2 tbsp coriander, 1 tsp kasuri methi and ¼ tsp garam masala. mix well.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>13.  Finally, enjoy dal tadka with jeera rice or steamed rice.</Text> 
                   
            </View>
            
        </View>
        </ScrollView>
    )
}
export default Food3;