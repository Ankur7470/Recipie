import React from 'react';
import {Text, View, Image} from 'react-native';
import { ScrollView } from 'react-native';

const Food4 = () => {
    return (
        <ScrollView>
        <View style={{flex:1, alignItems:'stretch', backgroundColor:'#FEF5ED',margin:5}}>
            <View style={{flex:2, alignItems:'center',paddingTop:25}}>
                <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>SAMOSA</Text>
            </View>
            
            
            <View style={{flex:4,alignItems:'center',borderWidth:20,  borderColor:'#FEF5ED'  }}>
                <Image style={{ resizeMode:'stretch',height:200,width:350, borderRadius:40}} source={require('./food4.jpg')}/>
            </View>
            
            <View style={{flex:9}} >
                <Text style={{fontSize:30, textAlign:'center'}}>RECIPE </Text>
                <Text style={{fontSize:20, letterSpacing:1}}>1.  Pinch a ball sized dough and grease with oil.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>2.  Roll the dough into oval shape.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>3.  Now cut it horizontally, diving into 2 equal portions using a knife.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>4.  Grease with water and make cone.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>5.  Stuff 2 tbsp of prepared samosa masala into the cone.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>6.  Grease little water on the edges.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>7.  Close and seal tightly by pressing firmly.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>8.  Deep-fry the samosa on a low flame. alternatively bake at 180 degree celcius for 40 minutes.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>9.  Stir occasionally, frying the samosa on low flame for atleast 15 minutes.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>10. Once the aloo samosa turns golden and crisp, drain off over kitchen paper.</Text>
                <Text style={{fontSize:20, letterSpacing:1}}>11. Finally, enjoy aloo samosa with green chutney and tamarind chutney.</Text>
            </View>
            
        </View>
        </ScrollView>
    )
}
export default Food4;