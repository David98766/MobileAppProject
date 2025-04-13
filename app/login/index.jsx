import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import LoginPicture from '../../assets/LoginPicture.png';
import { Colors } from '../../util/Colors';
import { client } from '../../util/KindConfig';
import services from '../../util/services';
import {useRouter} from 'expo-router';

console.log("Client object:", client);

export default function LoginScreen() {

    const [email, setEmail] = useState('');  // State to hold the email input
    const [password, setPassword] = useState('');  // State to hold the email input


    const router=useRouter()

    
    const handleLogIn = async () => {
        try {
          // Call authenticateUser with email and password entered by the user
          const isAuthenticated = await services.authenticateUser(email, password);
          
          if (isAuthenticated) {
            console.log("Login successful");
    
            // Store login status if authentication is successful
            await services.storeData('login', 'true');
            router.replace('/'); // Navigate to home or main page
          } else {
            console.log("Login failed: Incorrect email or password");
    
            // You could show an error message to the user if authentication fails
            // For example: Alert.alert('Login Failed', 'Invalid email or password');
          }
        } catch (error) {
          console.error("Error during login:", error);
          // Handle any errors during authentication (e.g., network issues)
        }
      };

      const handleSignUp = () => {
        router.push('/signup'); // Navigate to sign-up page
      };

  return (
    <View style={styles.container}>
      <Image source={LoginPicture} style={styles.bgImage} />
      <View style={styles.content}>
        <Text style={styles.text}>Personal Budget Planner</Text>
        <Text style={styles.descriptionText}>Stay on Track, Event by Event: Your Personal Budget Planner App</Text>

        <TextInput
        style={styles.input} // Combine both styles
        placeholder="Enter your email"
        placeholderTextColor={Colors.LIGHT_GRAY} // Set placeholder color (optional)
        keyboardType="email-address" 
        value={email} 
        onChangeText={setEmail} 
        />
        <TextInput
        style={styles.input} // Combine both styles
        placeholder="Enter your Password"
        placeholderTextColor={Colors.LIGHT_GRAY} // Set placeholder color (optional)
        keyboardType="password" 
        value={password} 
        onChangeText={setPassword} 
        />
        <TouchableOpacity style={styles.button}
        onPress={handleLogIn}>
            <Text style={{textAlign:'center',
            color:Colors.PRIMARY
            }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={handleSignUp}>
            <Text style={{textAlign:'center',
            color:Colors.PRIMARY
            }}>Sign Up</Text>
        </TouchableOpacity>
        
        <Text style={{fontSize:13,
            color:Colors.LIGHT_GRAY, marginTop:10
        }}>* By login/signup you will agree to out Terms and Conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  bgImage: {
    width: 200,
    height: 400,
    marginTop: 70,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: Colors.BLACK,
  },
  button: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    paddingHorizontal: 5,
    marginTop: 13, // Give it some space
    borderRadius: 99, // Optional: Rounded corners for better look
  },
  
  content: {
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    height: '100%',
    padding: 20,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    color: '#fff', // Ensures visibility on the PRIMARY background
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  descriptionText: {
    color: '#fff',
    textAlign: 'center',
    color:Colors.WHITE,
    marginTop: 20
  },
  textInputDescription: {
    color: Colors.WHITE,
    fontsize: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 99,
    marginBottom: 15,
    paddingLeft: 10,
    marginTop: 10
  },
});
