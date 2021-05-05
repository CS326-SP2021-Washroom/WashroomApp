# WashroomApp  
**Written by Andrew Baker and Josh Ridder**  

### Background
The Calvin Washroom app provides a client for users to view washroom status from the Raspberry Pi setup in on campus apartment and dorm washrooms. Code for the Washroom App has been largely original, with some code having been adapted from the [Habit Buddy app](https://github.com/calvin-cs262-fall2020-teamH/habitbuddy-client). Calvin Washroom is functional for all dorm and apartment sensor set ups and can be deployed accross campus if desired.   

Possible work going forward would be to create a timer system, allowing users to both see the status of washers and dryers as well as see the remaining time on each. Additionally, work to perfect the dorms washers and dryers would be necessary, as there are more machines in the dorms than in the apartments. Finally, some slight visual tweaks and changes would be welcome to polish up the look of the final application. 

### Use
To clone the client repo, use the following command:
```
git clone https://github.com/CS326-SP2021-Washroom/WashroomApp.git
```

To run the app on Expo, use the following commands:
```
npm install
expo start
```
Doing so will either open the default web browser with a status page or display a QR code within the terminal. Scan the QR code with your device or Android/IOS simulator to use the app.

**ATTENTION: Username and password for MQTT broker have been omitted for security. Alter "Watcher.js" to use.**
