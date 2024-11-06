import { StyleSheet } from "react-native";

const loginstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    loginImage: {
      width: 100,
      height: 100,
      marginBottom: 20,
      borderRadius: 50,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    loginButton: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      detailsText: {
        fontSize: 16,
        color: '#333',
      },
  });
  export default loginstyles;