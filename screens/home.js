/**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */


import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeApp = ({ navigation, route }) => {

    const [auth, setAuth] = useState(false);
    const user = route.params.userDetail;
    console.log(route.params)
    const [apiData, setApiData] = useState({});
    const [apiData1, setApiData1] = useState({});
    useEffect(() => {
        if (auth) {
            navigation.navigate('Login');

        } else {
            axios.get('http://fakestoreapi.com/products').then(res => {
                setApiData(res.data);
                console.log(res.data);
            });
            // axios.get('http://fakestoreapi.com/products/2').then(res => {
            //     setApiData1(res.data);
            //     console.log(res.data);
            // })
        }

    }, [])




    const getApidata = () => {
        axios.get('http://fakestoreapi.com/products').then(res => {
            setApiData(res.data);
            console.log(res.data);
        })
    }
    const apiImage = apiData.image;



    // const [image,setImage] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const productDetail = {
        // image,
        title,
        price,
    }

    // const buy = () => {
    //     navigation.navigate('Product', productDetail)
    // }
    const buy = (item) => {
        navigation.navigate("Product", item)
        
    };



    // const buyOne = () => {
    //     navigation.navigate('ProductOne')
    // }








    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

                <View style={styles.body}>
                    <View style={styles.profileView}>
                        <View style={styles.profilePicView}>
                            <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={{ uri: "https://image.shutterstock.com/image-photo/handsome-man-portrait-260nw-1266937855.jpg" }} />

                        </View>
                        <View style={styles.userDetailView}>
                            <Text><Icon name='person' size={20} color="white" /></Text>
                            <Text style={{ marginLeft: 10, fontSize: 22, textAlign: "center", color: "white" }}>{user.username}</Text>

                        </View>

                        <View style={styles.userDetailView}>
                            <Text><Icon name='email' size={20} color="white" /></Text>
                            <Text style={{ marginLeft: 10, fontSize: 18, textAlign: "center", color: "white" }}>{user.email}</Text>

                        </View>

                        <View style={styles.userDetailView}>
                            <Text><Icon name='circle' size={20} color="lightgreen" /></Text>
                            <Text style={{ marginLeft: 10, fontSize: 16, textAlign: "center", color: "white" }}>Online</Text>

                        </View>



                    </View>

                    <View style={styles.productCard}>

                        <Button onPress={getApidata} title='Refresh' />
                    </View>

                    <FlatList
                        data={apiData}
                        renderItem={({ item, i }) => {
                            return (

                                <>
                                    <SafeAreaView>
                                        <View style={styles.productView}>
                                            <View style={styles.card}>

                                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                                                    <Image style={{ width: 150, height: 100, borderRadius: 10 }} source={{ uri: item.images }} />
                                                </View>
                                                <View>
                                                    <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                                                </View>
                                                {/* <View>
                                                <Text>{apiData.description}</Text>
                                            </View> */}
                                                <View style={{ marginTop: 10 }}>
                                                    <Text style={{ color: "black", fontSize: 18 }}>Price = {item.price}</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <View>
                                                        <Pressable onPress={()=>buy(item)} style={styles.buyBtn}><Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Buy</Text></Pressable>
                                                    </View>
                                                </TouchableOpacity>



                                            </View>

                                            <View style={styles.card}>

                                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                                                    <Image style={{ width: 150, height: 100, borderRadius: 10 }} source={{ uri: item.image }} />
                                                </View>
                                                <View>
                                                    <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                                                </View>
                                                {/* <View>
    <Text>{apiData.description}</Text>
</View> */}
                                                <View style={{ marginTop: 10 }}>
                                                    <Text style={{ color: "black", fontSize: 18 }}>Price = {item.price}</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <View>
                                                        <Pressable onPress={() => buy(item)} style={styles.buyBtn}><Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Buy</Text></Pressable>
                                                    </View>
                                                </TouchableOpacity>



                                            </View>
                                        </View>
                                    </SafeAreaView>

                                </>
                            )
                        }}

                    />

                    {/* 

                        <View style={styles.card}>

                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                                <Image style={{ width: 150, height: 100, borderRadius: 10 }} source={{ uri: apiData1.image }} />
                            </View>
                            <View>
                                <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>{apiData1.title}</Text>
                            </View>

                            <View style={{ marginTop: 35 }}>
                                <Text style={{ color: "black", fontSize: 18 }}>Price = {apiData1.price}</Text>
                            </View>
                            <TouchableOpacity>
                                <View>
                                    <Pressable onPress={buyOne} style={styles.buyBtn}><Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Buy</Text></Pressable>
                                </View>
                            </TouchableOpacity>



                        </View> */}






                    {/* --=========================== */}

                </View>



            </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    profileView: {
        width: "100%",
        height: "35%",
        backgroundColor: "#2f2096",
        justifyContent: "center",
        alignItems: "center"

    },
    profilePicView: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        height: 70,
        borderRadius: 100,
        backgroundColor: "white",
        elevation: 40,



    },
    userDetailView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,

    },
    productView: {
        width: "100%",
        height: 330,
        backgroundColor: "white",
        flexDirection: "row",




    },
    card: {
        marginLeft: 10,
        width: "45%",
        height: "90%",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 10,
        elevation: 40,

    },
    buyBtn: {
        marginTop: 10,
        width: 100,
        height: 25,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        elevation: 30,
        borderRadius: 10,

    }



})


export default HomeApp;