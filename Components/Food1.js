import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import { ScrollView } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
// import { WebView } from 'react-native-webview';

const Food1 = () =>{
    return(
       
        <ScrollView>
        <View style={{flex:1, backgroundColor:'#FEF5ED',margin:5}}>
            <View style={{flex:2, alignItems:'center',paddingTop:25}}>
                <Text style={{fontSize:40, marginTop:30, fontWeight:'bold', textAlign:'center'}}>DHOKLA</Text>
            </View>
            
            
            <View style={{flex:4,alignItems:'center',borderWidth:20,  borderColor:'#FEF5ED'  }}>
                <Image style={{ resizeMode:'stretch',height:200,width:350, borderRadius:40}} source={require('./food1.jpg')}/>
            </View>
            
            <View style={{flex:9,marginTop:10}} >
                <Text style={{fontSize:30, textAlign:"center"}}>RECIPE </Text>
                    <Text style={{fontSize:20, letterSpacing:1}}> 1. In a large bowl, add chickpea flour, sooji, hing, salt, and sugar. You can store this mix in an airtight container and when ready mix in the ingredients mentioned under  “wet ingredients.”</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>2.  Add oil, citric acid, green chili + ginger paste, and salt.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>3.  Add water and mix until well blended. Khaman Dhokla Recipe</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>4. Time to instantly ferment the batter by adding eno. Stir in eno and whisk until it is well blended.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>5.  Wisk the mixture in one direction.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>6.  The mixture will become frothy and double in size.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>7.  Pour the batter to a greased container.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>8.  Fill a large pan with water and place a trivet at the base. Set khaman dhokla container over the trivet. Cover it with a lid and steam khaman for about 15- 20 minutes.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>9.  After the cooking time is over, insert a toothpick to check if khaman is cooked correctly. It should come out clean.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>10. Allow it to cool for 10 minutes. Insert a knife around the edges to loosen up Khaman dhokla from all the sides. Flip it over onto a plate.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>11. Using a sharp knife cut khaman into pieces. Dont press the blade down; instead, cut it the way we cut a cake.</Text>
                    <Text style={{fontSize:20, letterSpacing:1}}>12. In a pan heat oil, add green chilies, and let it crackle on a low flame. Add curry leaves, and when they are crisp, add sugar and water. Mix to combine. Khaman Dhokla Recipe
                                 Pour this hot mixture over steamed khaman. Enjoy this delicious and nutritious Gujarati khaman with the chutney of your choice</Text>
            </View>
        </View>
        {/* <YoutubePlayer
        height={300}
        videoId={"iee2TATGMyI"}
            /> */}
        </ScrollView>
        
       );
}
export default Food1;