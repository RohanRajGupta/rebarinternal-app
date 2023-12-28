import React, { useState, useEffect } from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Input, FormControl, Button, ScrollView, Select, CheckIcon } from "native-base";
import { Dimensions, View, Text, FlatList } from 'react-native';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { auth } from '../firebase';
import { firebase } from '../firebase'

export default UserListAdmin = ({ navigation }) => {
    const [users, setUsers] = useState([])

    console.log('user', users)
    //fetch data from firebase

    useEffect(() => {
        firebase.firestore()
            .collection('AdminData')
            .get()
            .then(querySnapshot => {
                const user = []
                querySnapshot.forEach(documentSnapshot => {
                    const { email, name, DOB } = documentSnapshot.data();
                    user.push({
                        id:documentSnapshot.id,
                        name,
                        email,
                        DOB,
                        
                    })
                });
                setUsers(user)
            });
    }, [])

    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [DOB, setDOB] = useState("");

    //     //FONTS
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
        Poppins_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <NativeBaseProvider>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#074B66', height: windowHeight * 0.11, borderBottomWidth: 0.8, borderBottomColor: 'lightgrey' }}>
                <Text style={{ marginTop: moderateScale(35), color: '#fff', fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Manage Admin</Text>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ padding: moderateScale(15) }}>
                    <FlatList
                        data={users}
                        renderItem={({ item }) =>
                            <View style={{ height: 'auto', borderLeftWidth: 4, borderColor: "#81CEEC", backgroundColor: '#fff', borderRadius: 5, borderWidth: 0.1, padding: 10, elevation: 3, marginBottom: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={{ fontSize: scale(11), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(150) }}>Name:- <Text style={{ color: "#8B9FB7" }}> {item.name}</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                                    <Text style={{ fontSize: scale(11), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(200) }}>Date of birth:- <Text style={{ color: "#8B9FB7" }}> {item.DOB}</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: moderateScale(5), alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={{ fontSize: scale(11), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Email:- <Text style={{ color: "#8B9FB7" }}> {item.email}</Text></Text>
                                    <Button
                                        style={{
                                            backgroundColor: '#074B66',
                                            borderRadius: 5,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: verticalScale(30),
                                            width: scale(70),
                                        }}
                                        onPress={() => navigation.navigate('AddUser', {'type':0, id: item.id})}
                                    >
                                        <Text style={{ color: '#fff', fontSize: scale(10), fontFamily: 'Poppins_500Medium', lineHeight: moderateScale(12) }}>Edit</Text>
                                    </Button>
                                </View>
                            </View>
                        }
                    />
                </View>
            </ScrollView>
            <View style={{ padding: moderateScale(15), backgroundColor: "#fff" }}>
                <Button onPress={() => navigation.navigate('AddUser', {'type':1} )} borderRadius={100} backgroundColor="#81CEEC" style={{ color: "#074B66" }}><Text color={'#074B66'} style={{ fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Add Admin</Text></Button>
            </View>
        </NativeBaseProvider>
    )
}

