export default class User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  
    constructor(email: string, password: string, firstName: string, lastName: string) {
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Convert instance to JSON object
    toJSON(): Record<string, string> {
      return {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
      };
    }
  
    // Create a User instance from JSON data
    static fromJSON(json: Record<string, string>): User {
      return new User(json.email, json.password, json.firstName, json.lastName);
    }
  }