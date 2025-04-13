import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import LoginPicture from '../../assets/LoginPicture.png';
import { Colors } from '../../util/Colors';
import { services } from '../../util/services';
import {useRouter} from 'expo-router';


export default function SignUpScreen() {

    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSignUp = async (email, password, firstName, lastName) => {
        try {
          // Call the storeUser function from services
          await services.storeUser('userProfile', email, password, firstName, lastName);
          console.log("User successfully signed up!");
        } catch (error) {
          console.error("Error during sign up:", error);
        }
        router.replace('/login')
      };

    const router=useRouter()

      
  return (
    <View style={styles.container}>
      <Image source={LoginPicture} style={styles.bgImage} />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to BudgetSmart start getting crafty with money today</Text>
        <Text style={styles.descriptionText}>Stay on Track, Event by Event: Your Personal Budget Planner App</Text>

        <TextInput
        style={styles.input} // Combine both styles
        placeholder="Enter your First Name"
        placeholderTextColor={Colors.LIGHT_GRAY} // Set placeholder color (optional)
        keyboardType="first-name" 
        value={firstName} 
        onChangeText={setFirstName} 
        />
       <TextInput
        style={styles.input} // Combine both styles
        placeholder="Enter your Last Name"
        placeholderTextColor={Colors.LIGHT_GRAY} // Set placeholder color (optional)
        keyboardType="last-name" 
        value={lastName} 
        onChangeText={setLastName} 
        />
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
            onPress={handleSignUp}>
                <Text style={{textAlign:'center',
                color:Colors.PRIMARY
                }}>Sign Up</Text>
            </TouchableOpacity>
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
    marginTop: -150,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    color: '#fff', // Ensures visibility on the PRIMARY background
    fontSize: 20,
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
