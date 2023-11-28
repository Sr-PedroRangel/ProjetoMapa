import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const locations = [
  { name: 'Cristo Redentor', country: 'Brasil', coordinate: { latitude: -22.9519, longitude: -43.2105 } },
  { name: 'Machu Picchu', country: 'Peru', coordinate: { latitude: -13.1631, longitude: -72.5450 } },
  { name: 'Chichén Itzá', country: 'México', coordinate: { latitude: 20.6843, longitude: -88.5678 } },
  { name: 'Coliseu', country: 'Itália', coordinate: { latitude: 41.8902, longitude: 12.4922 } },
  { name: 'Ruínas de Petra', country: 'Jordânia', coordinate: { latitude: 30.3285, longitude: 35.4444 } },
  { name: 'Taj Mahal', country: 'Índia', coordinate: { latitude: 27.1751, longitude: 78.0421 } },
  { name: 'Grande Muralha da China', country: 'China', coordinate: { latitude: 40.4319, longitude: 116.5704 } },
];

const MapScreen = () => {
  const renderMarkers = () => {
    return locations.map((location, index) => (
      <Marker
        key={index}
        coordinate={location.coordinate}
        title={location.name}
        description={location.country}
      >
        <Image source={{ uri: `https://www.countryflags.io/${location.country}/flat/64.png` }} style={{ width: 30, height: 30 }} />
      </Marker>
    ));
  };

  const handleButtonPress = (coordinate) => {
    // Implement logic to move the map to the specified coordinate
    // This could involve using a reference to the MapView and calling methods like animateToRegion
  };

  const renderButtons = () => {
    return locations.map((location, index) => (
      <TouchableOpacity
        key={index}
        style={{ position: 'absolute', top: 20 + index * 60, left: 10, backgroundColor: 'white', padding: 10, borderRadius: 10 }}
        onPress={() => handleButtonPress(location.coordinate)}
      >
        <Image source={{ uri: `https://www.countryflags.io/${location.country}/flat/64.png` }} style={{ width: 30, height: 30, marginRight: 10 }} />
        <Text>{location.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      >
        {renderMarkers()}
      </MapView>
      {renderButtons()}
    </View>
  );
};

export default MapScreen;
