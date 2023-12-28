import React, { useState, useEffect } from "react";
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Input, FormControl, Button, ScrollView } from "native-base";
import { Dimensions, View, Text, Keyboard } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Logo } from "../Components/SvgLogo";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { firebase } from '../firebase'


export default function AddEmployee({ navigation, route }) {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState('');
    const [type, setType] = useState(route.params.type);
    const [userId, setUserId] = useState(route.params.id)
    console.log('type',type);
    console.log(route.params.id)
        //fetch data from firebase
        useEffect(() => {
            firebase.firestore()
                .collection('EmployeeData')
                .doc(userId)
                .get()
                .then(documentSnapshot => {     
                    const user = []
                    console.log('User exists: ', documentSnapshot.exists);
    
                    if (documentSnapshot.exists) {
                        console.log('User data: ', documentSnapshot.data());
                        setUserName(documentSnapshot.data().name)
                        setEmail(documentSnapshot.data().email)
                        setDobDate(documentSnapshot.data().DOB)
            
                    }
    
                });
        }, [])
    

    //Date
    //--- DOB Date
    const [isDobDate, setDobDatePickerVisibility] = useState(false);
    const [dobdate, setDobDate] = useState('Select Date of birth');
    const showDobDate = () => {
        setDobDatePickerVisibility(true);
    };
    const hideDobDate = () => {
        setDobDatePickerVisibility(false);
    };
    const handleDobDate = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        const formattedDate = x1[2] + "/" + x1[1] + "/" + x1[0];
        setDobDate(formattedDate);
        hideDobDate();
        setCurrentDate(dobdate);
    };
    //FONT
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
        Poppins_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }
    const addData =()=>{
        if (route.params.type === 0) {
            firebase.firestore()
                .collection('EmployeeData')
                .doc(userId)
                .update({

                    name: userName,
                    email: email,
                    DOB: dobdate,
                    

                })
                .then(() => {
                    navigation.navigate('Thankyou')
                    console.log('User updated!');
                });
        }
        else {
            if (userName && userName.length > 0 && email && email.length > 0 && dobdate && dobdate.length > 0) {

                const data = {
    
                    name: userName,
                    DOB: dobdate,
                    email: email,
                };
                todoRef.add(data)
                    .then(() => {
                        setDobDate('');
                        setUserName('')
                        setEmail(''),
                            Keyboard.dismiss();
                    })
                    .catch((error) => {
                        alert(error);
                    })
                navigation.navigate('Thankyou')
            }
           

        }
    }

    //add data to firebase
    const todoRef = firebase.firestore().collection('EmployeeData');
    const addField = () => {
        if (userName && userName.length > 0 && email && email.length > 0 && dobdate && dobdate.length > 0) {

            const data = {

                name: userName,
                DOB: dobdate,
                email: email,
            };
            todoRef.add(data)
                .then(() => {
                    setDobDate('');
                    setUserName('')
                    setEmail(''),
                        Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
            navigation.navigate('Thankyou')
        }
    }
    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: '#fff', height: windowHeight * 0.05, borderBottomWidth: 0.8, borderBottomColor: 'lightgrey' }}>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: windowHeight * 0.05 }}>
                    <Logo />
                    <View style={{ padding: moderateScale(15), marginTop: moderateScale(20) }} >
                        <FormControl width="100%" mx="auto">
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Name</Text> </FormControl.Label>
                            <Input
                                onChangeText={(text) => setUserName(text)} defaultValue={userName}
                                style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} borderColor="#8B9FB7" width="100%" placeholder="Type here..." />
                        </FormControl>
                        <FormControl width="auto" marginTop={2}>
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Date of birth</Text></FormControl.Label>
                            <DateTimePickerModal
                                isVisible={isDobDate}
                                mode="date"
                                onConfirm={handleDobDate}
                                onCancel={hideDobDate}
                            />
                            <Button style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#8B9FB7", height: 45, justifyContent: "flex-start", width: "100%" }} onPress={showDobDate}>
                                <Text style={{ color: "#8B9FB7", fontSize: 10, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>{dobdate}</Text>
                            </Button>
                        </FormControl>
                        <FormControl width="100%" mx="auto" marginTop={2}>
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>E-mail</Text></FormControl.Label>
                            <Input
                                onChangeText={(text) => setEmail(text)} value={email}
                                style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} borderColor="#8B9FB7" width="100%" placeholder="Type here..." />
                        </FormControl>
                    </View>
                </View>
                <View style={{ padding: 15 }} >
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Button borderRadius={100} backgroundColor="#81CEEC" style={{ color: "#074B66", width: "100%" }} onPress={addData}><Text color={'#074B66'} style={{ fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Submit</Text></Button>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}