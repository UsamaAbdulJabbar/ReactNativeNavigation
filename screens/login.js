  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */


   import React, { useState } from 'react';
   import {
     Button,
     SafeAreaView,
     ScrollView,
     StatusBar,
     StyleSheet,
     Text,
     TextInput,
     useColorScheme,
     View,
     Image,
     TouchableOpacity,
     Pressable,
     Linking,
     ImageBackground,
   } from 'react-native';
 
 
 
   const LoginApp = ({navigation}) => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const userDetail = {
      username,
      email,
      password,
    }


    const LoginUser = () => {
      navigation.navigate('Home',{userDetail:userDetail})
      
    }

    
    
    
    
 
 
     return (
       <>
 
         <View style={styles.body} >
           <View style={styles.logoView}>
             <Image style={styles.logo} source={require('../assets/appLogo.png')} />
             <Text style={styles.logoText}>Login UI</Text>
           </View>
 
           <View style={styles.container}>
             <Text style={styles.welcomeText} onLongPress={() => {
               alert("Close App")
             }}>Welcome Back,</Text>
             <Text style={styles.loginAccText}>Login Your Account</Text>
             <View style={styles.containerTwo}>
               <TextInput style={styles.emailInput} placeholderTextColor="grey" placeholder='username' onChangeText={e=>setUsername(e)}></TextInput>
             </View>
             <View style={styles.containerTwo}>
               <TextInput keyboardType='Email' style={styles.emailInput} placeholderTextColor="grey" placeholder='email' onChangeText={e=>setEmail(e)}></TextInput>
             </View>
             <View style={styles.containerTwo}>
               <TextInput secureTextEntry={true} style={styles.emailInput} placeholderTextColor="grey" placeholder='Password' onChangeText={e=>setPassword(e)}></TextInput>
             </View>
 
             <View style={styles.forgotPassView}>
               <Text style={styles.forgotPass} onPress={Linking.openURL = () => {
                 alert("check your email !")
               }}>Forgot Password ?</Text>
             </View>
 
             <TouchableOpacity>
             <View style={styles.containerTwo}>
               <Pressable onPress={LoginUser} ><Text style={styles.loginButton}>Login</Text></Pressable>
               
             </View>
             </TouchableOpacity>
 
             <View style={styles.createNewAccView}>
               <Text style={styles.DontHaveAcc}>Don't have an account ? </Text>
               <Text onPress={() => {
                 alert("Creating New Account .....")
               }} style={styles.newAcc}>Create new Account</Text>
             </View>
 
 
 
 
 
 
           </View>
 
 
 
 
         </View>
 
 
 
 
       </>
     );
   };
 
 
 
   const styles = StyleSheet.create({
     body: {
       flex: 1,
       backgroundColor: "#2f2096",
 
 
 
 
 
     },
 
     logoView: {
       marginTop: 50,
       justifyContent: "center",
       alignItems: "center",
       padding: 5.
     },
     logo: {
       width: 100,
       height: 100,
       resizeMode: "stretch",
     },
     logoText: {
       fontSize: 32,
       fontWeight: "bold",
       color: "white",
       padding: 10,
     },
     safeAreaOne: {
 
     },
     container: {
       flex: 2,
       backgroundColor: "white",
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       marginTop: 20,
 
     },
     welcomeText: {
       marginLeft: 30,
       marginTop: 20,
       fontSize: 24,
       fontWeight: "bold",
       color: "#2f2096",
       textDecorationLine: "underline",
 
     },
     loginAccText: {
       marginLeft: 35,
       marginTop: 5,
       fontSize: 18,
       color: "black",
       textDecorationColor: "#2f2096"
 
 
     },
     containerTwo: {
       justifyContent: "center",
       alignItems: "center",
       marginTop: 7,
     },
     emailInput: {
 
       border: "1px solid #2f2096",
       backgroundColor: "white",
       color: "#2f2096",
       width: 300,
       borderRadius: 12,
       padding: 15,
       elevation: 10,
       fontSize: 16,
 
 
 
     },
 
     loginButton: {
 
       color: "white",
       fontSize: 22,
       display: "flex",
       textAlign: "center",
       justifyContent: "center",
       alignItems: "center",
       width: 120,
       height: 40,
       backgroundColor: "#2f2096",
       borderRadius: 10,
       elevation: 10,
 
     },
     forgotPassView: {
       marginTop: 5,
       padding: 5,
 
     },
 
     forgotPass: {
       color: "black",
       textDecorationLine: "underline",
       marginLeft: 200,
     },
     createNewAccView: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "center",
       padding: 10,
       marginTop:10,
     },
     DontHaveAcc: {
       color: "grey"
     },
     newAcc: {
       color: "#2f2096",
       textDecorationLine: "underline",
 
     },
     tinyLogo: {
       height: 40,
       width: 40,
     },
     tinyLogoTwitter: {
       height: 30,
       width: 30,
     },
     tinyLogoView: {
       padding:0,
       flexDirection: "row",
       display: "flex",
       justifyContent: "space-evenly",
       alignItems: "center",
 
     }
 
 
 
 
 
   })
   export default LoginApp;
 