import React from 'react';
import{View, Text, Image, ScrollView} from 'react-native';

const Food5 = () => {
    return(
        <ScrollView>
        <View style={{flex:1, alignItems:'stretch', backgroundColor:'#FEF5ED',margin:5}}>
            <View style={{flex:2, alignItems:'center',paddingTop:25}}>
                <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>ALOO GOBI</Text>
            </View>
            
            
            <View style={{flex:4,alignItems:'center',borderWidth:20,  borderColor:'#FEF5ED'  }}>
                <Image style={{ resizeMode:'cover',height:200,width:350, borderRadius:40}} source={require('./food5.jpg')}/>
            </View>
            
            <View style={{flex:9}} >
                <Text style={{fontSize:30, textAlign:'center'}}>RECIPE </Text>
                <Text style={{fontSize:20, letterSpacing:1}}>1.  Firstly, in a large vessel take 4 cup water and boil with 1 tsp salt, ½ tsp turmeric.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>2.  Add 2 cup gobi and boil for 2 minutes or until gobi is blanched well.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>3.  Drain off the water and keep aside.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>4.  In a kadai heat 2 tbsp oil and saute 1 inch ginger, 2 chilli and few curry leaves.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>5.  Add 1 onion and saute until onions shrink.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>6.  Further add ½ tsp turmeric, ½ tsp chilli powder and ½ tsp salt. saute well.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>7.  Now add 1 tomato and saute until tomatoes turn soft and mushy.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>8.  Additionally, add blanched gobi and ½ cup peas.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>9.  Mix gently without breaking gobi.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>10.  Add 2 tbsp water, cover and simmer for 5 minutes.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>11.  Now add 1 tsp lemon juice and 2 tbsp coriander. mix well.</Text>
                <Text style={{fontSize:20,letterSpacing:1}}>12.  Finally, enjoy gobhi ki sabji with hot steamed rice or phulka.</Text>
            </View>
            
        </View>
        </ScrollView>

    )
}
export default Food5;