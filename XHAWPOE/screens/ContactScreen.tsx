import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

import { contactStyles, themeFonts } from '../styles';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !phone || !email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    Alert.alert('Success', `Thank you, ${name}. Your inquiry has been sent.`);
  };

  return (
    <ScrollView style={contactStyles.container}>
      <Text style={{ ...themeFonts.title, fontWeight: 'bold' }}>Contact Empowering the Nation</Text>
      <View style={contactStyles.contactInfo}>
        <Text style={themeFonts.text}>Phone: (011) 123 4567</Text>
        <Text style={themeFonts.text}>Email: info@empoweringthenation.com</Text>
        <Text style={themeFonts.text}>Address: Johannesburg</Text>
      </View>

      

      <Text style={themeFonts.text}>Fill in your details:</Text>
      <TextInput
        style={contactStyles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={contactStyles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={contactStyles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity 
        style={contactStyles.button} 
        onPress={handleSubmit}
      >
        <Text style={contactStyles.buttonText}>Submit Inquiry</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
//I was going to add maps to the website but im getting dependencies errors that I cant find fixes for
//import MapView, { Marker } from 'react-native-maps';
      //<View style={contactStyles.mapContainer}>
      //  <MapView style={contactStyles.map}>
      //    <Marker coordinate={{ latitude: -26.2041, longitude: 28.0473 }} title="Venue 1" />
      //  </MapView>
      //</View>
export default ContactScreen;
