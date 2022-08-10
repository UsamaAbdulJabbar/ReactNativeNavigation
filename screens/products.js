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
    Alert,
} from 'react-native';



function ProductApp({navigation,route}){
    const [apiData,setApiData]  = useState({});
  const product = route.params
   console.log(product)

   const addToCart=()=>{
    Alert.alert("Congratulation",
        "Item addes to your cart successfully"
    )
   }
    


    // useEffect(()=>{
    //     axios.get('http://fakestoreapi.com/products/1').then(res => {
    //             setApiData(res.data);
    //             console.log(res.data);
    //         });
    // },[])


        
    return(
        <>
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.body}>
                <Text style={{color:"black",fontSize:28,margin:10,fontWeight:"bold"}}>Catagory: {product.category}</Text>
                <View  style={styles.product}>
                <Image  style={{width:"90%",height:"70%",elevation:0 }} source={{ uri: product.image }} />
                </View>
                <View  style={styles.product}>
                <Text style={{color:"black",fontSize:26}}>{product.title}</Text>
                
                <Text style={{color:"black",fontSize:16, textAlign:"left"}}>{product.description}</Text>
                <Text style={{color:"black",fontSize:26,fontWeight:"bold"}}>Price ={product.price}</Text>
                </View>

                <View  style={{elevation:40}}>
                    <Pressable onPress={addToCart} style={
                        {marginTop:10, width:120,height:40,backgroundColor:"#2c79f5",justifyContent:"center",alignItems:"center",borderRadius:10,elevation:40}
                        }><Text style={{color:"white",fontSize:20}}>Add To Cart</Text></Pressable>
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
         justifyContent:"center",
         alignItems:"center",
    },
    product:{
        width:"100%",
        height:"40%",
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"center",
        alignItems:"center",
       
    }
})

export default ProductApp;