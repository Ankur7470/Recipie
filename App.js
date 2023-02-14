import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ImageBackground, Switch } from 'react-native';
import { useState } from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YoutubePlayer from 'react-native-youtube-iframe';

import Food1 from './Components/Food1';
import Food2 from './Components/Food2';
import Food3 from './Components/Food3';
import Food4 from './Components/Food4';
import Food5 from './Components/Food5';
import Food6 from './Components/Food6';
import Food7 from './Components/Food7';
import Food8 from './Components/Food8';
import Food9 from './Components/Food9';
import Food10 from './Components/Food10';

//// navigator////

const Stack = createNativeStackNavigator();

////////////////Main App/////////////////

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#E9eeee' }, headerTintColor: '#040527' }}>
        <Stack.Screen name="Home" component={Homescreen}
          options={({ navigation }) => ({
            headerTitle: (props) => <LogoImage5 {...props} />
          })} />
        <Stack.Screen name="Main" component={Mainscreen}
          options={({ navigation }) => ({
            headerTitle: (props) => <LogoImage6 {...props} />
          })} />
        <Stack.Screen name="Indian" component={IndianFood}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            // headerRight:(props) => <Icon1 {...props}/>,
            headerTitle: (props) => <LogoImage1 {...props} />
          })} />

        <Stack.Screen name="Chinese" component={ChineseFood}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage2 {...props} />
          })} />
        <Stack.Screen name="Dhokla" component={Dhokla}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage3 {...props} />
          })} />
        <Stack.Screen name="Matar Paneer" component={Matar}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage3 {...props} />
          })} />
        <Stack.Screen name="Dal Tadka" component={Dal}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage3 {...props} />
          })} />
        <Stack.Screen name="Samosa" component={Samosa}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage3 {...props} />
          })} />
        <Stack.Screen name="Aloo Gobi" component={Aloo_Gobi}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage3 {...props} />
          })} />
        <Stack.Screen name="Chowmein" component={Chowmein}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage4 {...props} />
          })} />
        <Stack.Screen name="Manchurian" component={Manchurian}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage4 {...props} />
          })} />
        <Stack.Screen name="Paneer Chilli" component={Paneer_chilli}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage4 {...props} />
          })} />
        <Stack.Screen name="Spring Roll" component={Spring_roll}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage4 {...props} />
          })} />
        <Stack.Screen name="Fried Rice" component={Fried_rice}
          options={({ navigation }) => ({
            headerRight: () => (<Button title='Menu' color={'black'} onPress={() => { navigation.navigate("Main") }} />),
            headerTitle: (props) => <LogoImage4 {...props} />
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

/////////Screens/////////////

function Homescreen({ navigation }) {

  // let [mode, setMode] = useState(false);
  // let [textColor, setTextColor] = useState({color:'black'})


  // const toggleMode=()=>{
  //   if(mode === 'light'){
  //     setMode(!mode);
  //     setMode('dark');

  //   }
  //   else{
  //     setMode('light');

  //   }
  // }

  return (
    <ImageBackground resizeMode='cover' source={require('./Images/09.jpg')} style={{ flex: 1, flexDirection: 'column', position: 'relative', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, color: 'grey', margin: 20, fontWeight: '700', textAlign: 'center' }}>Enter to Explore the Food Zone</Text>
      <TouchableOpacity style={[styles.button, { marginBottom: 50, width: '30%', height: '15%', borderColor: 'none', position: 'absolute', bottom: 0 }]} onPress={() => { navigation.navigate('Main') }}>
        <Image resizeMode='contain' style={{ height: '100%', width: '100%' }} source={require('./Images/pieces.png')} />
        <Text style={{ paddingTop: 20, fontSize: 30, color: 'grey', fontWeight: '500', textAlign: 'center' }}>Enter</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={toggleMode}>
          <Text>Switch Mode</Text>
        </TouchableOpacity> */}
    </ImageBackground>
  )
}

function Mainscreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: "space-evenly", backgroundColor: '#FEF5ED' }}>
      <TouchableOpacity style={[styles.button, { width: '90%', height: '40%', margin: 30 }]} onPress={() => { navigation.navigate('Indian') }}>
        <Image style={{ height: '100%', width: '100%', borderRadius: 20 }} source={{ uri: "https://imgs.search.brave.com/W0F_RoYjSy-QKJUW0vVHq_SnTM4jXQf5wd7xRKhfF2s/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/eVA5c3A4VDktQ3R1/MWhPZjZfOFVBSGFF/SyZwaWQ9QXBp" }} />
        <Text style={styles.text1} >Indian</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '90%', height: '40%', margin: 30 }]} onPress={() => { navigation.navigate('Chinese') }}>
        <Image style={{ height: '100%', width: '100%', borderRadius: 20 }} source={{ uri: "https://imgs.search.brave.com/grVTptBaRXdIZMqqemuhdIwCoFDD0JpVO6idDPju28k/rs:fit:914:572:1/g:ce/aHR0cDovL2NoaW5n/c3NlY3JldC5jb20v/cHVibGljL3VwbG9h/ZHMvYmxvZ3MvMTU4/MjI4Njg1NV8xX2Jm/aV9pbS5wbmc" }} />
        <Text style={styles.text1}>Chinese</Text>
      </TouchableOpacity>
    </View>

  )
}

function IndianFood({ navigation }) {
  return (
    <ImageBackground style={{ flex: 1, justifyContent: 'space-between', alignItems: "center", position: 'relative', backgroundColor: '#FEF5ED' }}>
      <Text style={{ fontSize: 18, color: 'grey' }}>Choose any Dish and see the Desi Indian Food Recipe</Text>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%', left: 0, top: 0, margin: 40 }]} onPress={() => { navigation.navigate('Dhokla') }}>
        <Image source={require('./Components/food1.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Dhokla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%', margin: 10 }]} onPress={() => { navigation.navigate('Matar Paneer') }}>
        <Image resizeMode='cover' source={require('./Components/food2.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Matar Paneer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%', margin: 10 }]} onPress={() => { navigation.navigate('Dal Tadka') }}>
        <Image source={require('./Components/food3.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Dal Tadka</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%' }]} onPress={() => { navigation.navigate('Samosa') }}>
        <Image source={require('./Components/food4.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Samosa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%' }]} onPress={() => { navigation.navigate('Aloo Gobi') }}>
        <Image resizeMode='cover' source={require('./Components/food5.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Aloo Gobhi</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

function ChineseFood({ navigation }) {
  return (
    <ImageBackground style={{ flex: 1, justifyContent: 'space-between', alignItems: "center", position: 'relative', backgroundColor: '#FEF5ED' }}>
      <Text style={{ fontSize: 18, color: 'grey' }}>Choose any Dish and see the Chinese Food Recipe</Text>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%', left: 0, top: 0, margin: 40 }]} onPress={() => { navigation.navigate('Chowmein') }}>
        <Image resizeMode='repeat' source={require('./Components/food6.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Chowmein</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%', margin: 10 }]} onPress={() => { navigation.navigate('Manchurian') }}>
        <Image resizeMode='cover' source={require('./Components/food7.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Manchurian</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%', margin: 10 }]} onPress={() => { navigation.navigate('Paneer Chilli') }}>
        <Image source={require('./Components/food8.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Paneer Chilli</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%' }]} onPress={() => { navigation.navigate('Spring Roll') }}>
        <Image source={require('./Components/food9.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Spring Roll</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '60%', height: '12%' }]} onPress={() => { navigation.navigate('Fried Rice') }}>
        <Image resizeMode='cover' source={require('./Components/food10.jpg')}
          style={styles.imageStyle} />
        <Text style={styles.textSmall}>Fried Rice</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

function Dhokla({ navigation }) {
  return (<View><Food1 /></View>)
}
function Matar({ navigation }) {
  return (<View><Food2 /></View>)
}
function Dal({ navigation }) {
  return (<View><Food3 /></View>)
}
function Samosa({ navigation }) {
  return (<View><Food4 /></View>)
}
function Aloo_Gobi({ navigation }) {
  return (<View><Food5 /></View>)
}
function Chowmein({ navigation }) {
  return (<View><Food6 /></View>)
}
function Manchurian({ navigation }) {
  return (<View><Food7 /></View>)
}
function Paneer_chilli({ navigation }) {
  return (<View><Food8 /></View>)
}
function Spring_roll({ navigation }) {
  return (<View><Food9 /></View>)
}
function Fried_rice({ navigation }) {
  return (<View><Food10 /></View>)
}
////////////////logo//////////
function LogoImage1(navigation) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', position: 'relative' }}>
      <Image
        style={{ width: 35, height: 40 }}
        source={require('./Images/cooking.png')}
      />
      <Text style={{ fontSize: 20, marginLeft: 10, color: '#04052f' }}>Desi Tadka</Text>
      {/* <TouchableOpacity style={{width:'10%', height:'100%', marginLeft:80}} onPress={()=>{navigation.navigate("Main")}}>
       
        <Text>Home</Text> */}
      {/* </TouchableOpacity> */}

    </View>
  );
}

function LogoImage2(navigation) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        style={{ width: 35, height: 40 }}
        source={require('./Images/cooking.png')}
      />
      <Text style={{ fontSize: 20, marginLeft: 10, color: '#04052f' }}>Chinese Tadka</Text>
    </View>

  );
}
function LogoImage3(navigation) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require('./Images/dish.png')}
      />
      <Text style={{ fontSize: 20, marginLeft: 10, color: '#04052f' }}>Desi Tadka</Text>
    </View>

  );
}
function LogoImage4(navigation) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        style={{ width: 60, height: 40, borderRadius: 30 }}
        source={require('./Images/8e3f759.jpg')}
      />
      <Text style={{ fontSize: 20, marginLeft: 10, color: '#04052f' }}>Chinese Tadka</Text>
    </View>

  );
}
function LogoImage5(navigation) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        style={{ width: 80, height: 50, borderRadius: 30 }}
        source={require('./Images/7ea858ac-2db8-48af-9f1d-08c3a56f2f82.jpg')} />
      <Text style={{ fontSize: 24, marginLeft: 20, color: '#04052f', fontWeight: 'bold' }}>Recipe App</Text>
    </View>
  )
}
function LogoImage6(navigation) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        style={{ width: 80, height: 50, borderRadius: 30 }}
        source={require('./Images/7ea858ac-2db8-48af-9f1d-08c3a56f2f82.jpg')} />
      <Text style={{ fontSize: 24, color: '#04052f', fontWeight: 'bold', marginLeft: 20 }}>Main Menu</Text>
    </View>
  )
}
///////////////styling//////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    elevation: 10,
    backgroundColor: "#C1bdbd",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: 'blue',
    shadowRadius: 20,
    borderRadius: 20
  },
  heading: {
    fontSize: 25
  },
  text1: {
    fontSize: 30,
    color: 'grey',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 20
  },
  textSmall: {
    fontSize: 20,
    paddingTop: 6,
    color: 'grey'
  }
})