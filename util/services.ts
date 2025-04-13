import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../model/User";

const storeUser = async (
  key: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<void> => {
  try {
    // Create the User object
    const user = new User(firstName, lastName, email, password); // Create User instance

    // Convert the User object to a JSON string
    const jsonValue = JSON.stringify(user.toJSON());

    // Save the User JSON string to AsyncStorage using the provided key
    await AsyncStorage.setItem(key, jsonValue);
    console.log("User saved successfully!");
  } catch (e) {
    console.error("Error saving user:", e);
  }
};

const getUser = async (key: string): Promise<User | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? User.fromJSON(JSON.parse(jsonValue)) : null;
  } catch (e) {
    console.error("Error retrieving user:", e);
    return null;
  }
};

const authenticateUser = async (email: string, password: string): Promise<boolean> => {
  try {
    const storedUser = await getUser("userProfile");

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log("Authentication successful!");
      return true;
    } else {
      console.log("Authentication failed: Incorrect email or password");
      return false;
    }
  } catch (e) {
    console.error("Error during authentication:", e);
    return false;
  }
};

export default {
  storeUser,
  getUser,
  authenticateUser,
};
