import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../util/services'

export default function Home() {

    const router=useRouter();
    useEffect(()=> {
        checkUserAuth();

    },[])

    /*Used to check if User is Authenicated */

    const checkUserAuth = async () => {
        try {
          const result = await services.getUser('login');
          console.log('Auth check result:', result);
          if (result !== 'true') {
            router.replace('/login');
          }
        } catch (error) {
          console.error('Error checking user auth:', error);
        }
      };
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontsize:20
    }
}
)