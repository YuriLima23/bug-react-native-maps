import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



const Map = () => {
  const position = {latitude: 40.68816862892598, longitude:  -73.99758773340365}
  return (
    <MapView initialRegion={{...position, latitudeDelta: 0.009, longitudeDelta: 0.009}} style={StyleSheet.absoluteFillObject}>
      <Marker coordinate={position} title='Local'>

      </Marker>

    </MapView>
  )
}

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.regionButton}>
      <Button title='Go to Maps' onPress={() => navigation.navigate("Map")} />

    </View>)
}


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Map',
  screens: {
    Home: Home,
    Map: Map,
  },
});

const Navigation = createStaticNavigation(RootStack);



export default function App() {
  return <Navigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  regionButton:{
    flex: 1, 
    backgroundColor: "#fff",
    justifyContent:"center" 
  }
});
