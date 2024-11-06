import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ route, navigation }) => {
  const { username } = route.params;
  const { password } = route.params;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {username}! con contraseña: {password}</Text>
      <Button title="Cerrar sesión" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Home;