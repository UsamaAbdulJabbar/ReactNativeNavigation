import React, { useEffect, useState } from "react";
import axios from 'axios';

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



function ProductAppOne(navigation,route){

    console.log(route.params)


    const [apiData,setApiData]  = useState({});
    useEffect(()=>{
        axios.get('http://fakestoreapi.com/products/2').then(res => {
                setApiData(res.data);
                console.log(res.data);
            });
    },[])


    return(
        <>
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.body}>
                <View  style={styles.product}>
                <Image style={{ width:"60%", height: "70%" }} source={{ uri: apiData.image }} />
                </View>
                <View  style={styles.product}>
                <Text style={{color:"black",fontSize:26}}>{apiData.title}</Text>
                
                <Text style={{color:"black",fontSize:13, textAlign:"center"}}>{apiData.description}</Text>
                <Text style={{color:"black",fontSize:26}}>Price ={apiData.price}</Text>
                </View>
            </View>
        </SafeAreaView>
        
        </>
    )
}

const styles = StyleSheet.create({
    body:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
    },
    product:{
        justifyContent:"center",
        alignItems:"center",
        elevation:40,
    }
})

export default ProductAppOne;