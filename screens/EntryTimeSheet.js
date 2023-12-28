import React, { useState, useEffect } from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, FormControl, Button, ScrollView, Select, CheckIcon, Input } from "native-base";
import { Dimensions, View, Text, FlatList, Alert, Image, Keyboard } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Icon1 } from "../Components/SvgLogo";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { firebase } from '../firebase'
import { SelectList } from 'react-native-dropdown-select-list';

export default function EntryTimeSheet({ navigation }) {
    const [employeeId, setEmployeeId] = useState('')
    const [selectedOption, setSelectedOption] = useState('');

    const todoRef = firebase.firestore().collection('TimeSheet');

    //UPLOAD Image
    const [uploading, setUploading] = useState(false)
    const uploadImage = async () => {

        if (entrytime && entrytime.length > 0 && exittime && exittime.length > 0 && pickedImagePath && setPickedImagePath.length > 0) {
            const data = {
                EmployeeId: employeeId,
                EntryTime: entrytime,
                ExitTime: exittime,

            };
            todoRef.add(data)
                .then(() => {
                    setEntryTime('');
                    setExitTime('')
                    setPickedImagePath(''),
                        Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
            navigation.navigate('Thankyou')
        }
        setUploading(true)
        const response = await fetch(pickedImagePath)
        const blob = await response.blob();
        const filename = pickedImagePath.substring(pickedImagePath.lastIndexOf('/') + 1);
        var ref = firebase.storage().ref().child(filename).put(blob);
        try {
            await ref;
        }
        catch (e) {
            console.log(e)
        }
        setUploading(false)

        setImage(null)
    };

    //Fetch employee data
    const [users, setUsers] = useState([])
    useEffect(() => {
        firebase.firestore()
            .collection('EmployeeData')
            .get()
            .then(querySnapshot => {
                const user = []
                querySnapshot.forEach(documentSnapshot => {
                    const { name } = documentSnapshot.data();
                    user.push({
                        key: documentSnapshot.id,
                        value: name,

                    })
                });
                setUsers(user)
            });
    }, [])





    //SELECT
    const [EmployeeType, setEmployeeType] = React.useState("");
    //TIME
    //--- ENTRY TIME
    const [isEntryTime, setEntryTime] = useState(false);
    const [entrytime, setEntrytime] = useState('Select Time');
    const showEntryTime = () => {
        setEntryTime(true);
    };
    const hideEntryTime = () => {
        setEntryTime(false);
    };
    const EntryTimeConfirm = (date) => {
        const dt = new Date(date);
        let hours = dt.getHours();
        const minutes = dt.getMinutes().toString().padStart(2, '0');
        hours = hours;
        const formattedTime = `${hours}:${minutes}:00`;
        setEntrytime(formattedTime);
        hideEntryTime();
    };
    //--- EXIT TIME
    const [isExitTime, setExitTime] = useState(false);
    const [exittime, setExittime] = useState('Select Time');
    const showExitTime = () => {
        setExitTime(true);
    };
    const hideExitTime = () => {
        setEntryTime(false);
    };
    const ExitTimeConfirm = (date) => {
        const dt = new Date(date);
        let hours = dt.getHours();
        const minutes = dt.getMinutes().toString().padStart(2, '0');
        hours = hours;
        const formattedTime = `${hours}:${minutes}:00`;
        setExittime(formattedTime);
        hideExitTime();
    };
    // FILE CHOOSE
    const [pickedImagePath, setPickedImagePath] = useState(null);
    const openCamera = async (event) => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }
        const result = await ImagePicker.launchCameraAsync();
        if (!result.canceled) {
            setPickedImagePath(result.uri);
            console.log("result.uri", result.uri);
            // console.log("filename", result.assetId)

        }
    }
    //FONTS
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
        Poppins_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <NativeBaseProvider>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: windowHeight * 0.11, borderBottomWidth: 0.8, borderBottomColor: 'lightgrey' }}>
                <Text style={{ marginTop: moderateScale(35), color: '#074B66', fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Entry Time Sheet</Text>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ marginTop: windowHeight * 0.05 }}>

                    <View style={{ paddingLeft: moderateScale(15), paddingRight: moderateScale(15) }}>
                        <Text style={{ color: '#074B66', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginBottom: 0 }}>Enter your details below!</Text>
                        <Text style={{ color: '#847F7F', fontSize: 10, fontFamily: 'Poppins_400Regular', marginBottom: 0 }}>Fill your details below</Text>
                    </View>
                    <Text style={{ textAlign: "right" }}>
                        <Icon1 />
                    </Text>
                    <View style={{ padding: moderateScale(15), marginTop: moderateScale(20) }} >
                        <FormControl width="100%" mx="auto" marginTop={2}>
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Select Employee</Text></FormControl.Label>
                            <View style={{ borderRadius: 0 }}>
                                <SelectList
                                    textStyle={{ fontSize: 9, paddingTop: 8, paddingBottom: 8 }}
                                    inputStyles={{ fontSize: 11, color: '#8B9FB7' }}
                                    boxStyles={{ borderRadius: 5, padding: 0, borderColor: '#8B9FB7' }}
                                    dropdownTextStyles={{ fontSize: 13, color: 'grey' }}
                                    dropdownStyles={{ borderColor: '#8B9FB7' }}
                                    search={false}
                                    maxHeight={150}
                                    data={users}
                                    setSelected={setEmployeeId}
                                    placeholder='Select Employee'
                                    onChange={(value) => setSelectedOption(value)}
                                />
                            </View>

                            {/* <Select style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} selectedValue={EmployeeType} readOnly borderColor="#8B9FB7" width="100%" mx="auto" accessibilityLabel="Select Employee" placeholder="Select Employee" onValueChange={itemValue => setEmployeeType(itemValue)} _selectedItem={{
                                bg: "#81CEEC",
                                endIcon: <CheckIcon size={6} style={{ color: "#fff" }} />
                            }}>
                                <Select.Item label="Suman Kumar" value="1" />
                                <Select.Item label="Abhishek Kumar" value="2" />
                                <Select.Item label="Saurabh Kumar" value="3" />
                                <Select.Item label="Ravi Kumar" value="4" />

                                <Select.Item label="Abhishek Kumar" />


                            </Select> */}
                        </FormControl>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <FormControl width="49%" mx="auto" marginTop={2} marginRight={1}>
                                <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Entry Time</Text></FormControl.Label>
                                <DateTimePickerModal
                                    isVisible={isEntryTime}
                                    mode="time"
                                    onConfirm={EntryTimeConfirm}
                                    onCancel={hideEntryTime}
                                />
                                <Button style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#8B9FB7", height: 45, textAlign: "left", alignContent: "flex-start", justifyContent: "flex-start" }} onPress={showEntryTime}>
                                    <Text style={{ color: "#8B9FB7", fontSize: 10, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>{entrytime}</Text>
                                </Button>
                            </FormControl>
                            <FormControl width="49%" mx="auto" marginTop={2} marginLeft={1}>
                                <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Exit Time</Text></FormControl.Label>
                                <DateTimePickerModal
                                    isVisible={isExitTime}
                                    mode="time"
                                    onConfirm={ExitTimeConfirm}
                                    onCancel={hideExitTime}
                                />
                                <Button style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#8B9FB7", height: 45, textAlign: "left", alignContent: "flex-start", justifyContent: "flex-start" }} onPress={showExitTime}>
                                    <Text style={{ color: "#8B9FB7", fontSize: 10, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>{exittime}</Text>
                                </Button>
                            </FormControl>
                        </View>
                        <FormControl width="100%" mx="auto" marginTop={2}>
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Image <Text style={{ color: "#1E1E1E", fontSize: 6, fontFamily: 'Poppins_400Regular' }}>(optional)</Text></Text></FormControl.Label>
                            <Button style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#8B9FB7", height: 45, textAlign: "left", alignContent: "flex-start", justifyContent: "flex-start" }
                            } width="100%" onPress={openCamera}>
                                {pickedImagePath == '' || pickedImagePath == null ?
                                    <Text style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10, marginBottom: 0 }}>Take a picture</Text> :
                                    <Text style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10, marginBottom: 0 }}>{pickedImagePath.length > 130 ? [pickedImagePath.slice(140, 170), '....', pickedImagePath.slice(-4)] : pickedImagePath}</Text>}
                            </Button>
                        </FormControl>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 15 }} >
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Button
                            onPress={() => navigation.navigate('Thankyou')}
                            // onPress={() => {
                            //     uploadImage()
                            // }}


                            borderRadius={100} backgroundColor="#81CEEC" style={{ color: "#074B66", width: "100%" }}><Text color={'#074B66'} style={{ fontFamily: 'Poppins_500Medium' }}>Continue</Text></Button>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}