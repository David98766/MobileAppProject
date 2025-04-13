import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';

let client;
try {
    client = new KindeSDK(
        'https://budgetsmart.kinde.com',
        'exp://192.168.1.12:8081',
        'f15609085d8d41eaa7aac36350d98575',
        'exp://192.168.1.12:8081'
    );
} catch (error) {
    console.error("Error initializing KindeSDK:", error);
}

export { client };