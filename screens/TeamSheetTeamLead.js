import React, { useState } from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Button, ScrollView, FormControl, Select, CheckIcon } from "native-base";
import { Dimensions, View, Text } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function TeamSheetTeamLead({ navigation }) {
    //SELECT
    const [EmployeeType, setEmployeeType] = React.useState("");
    //Date
    //--- From Date
    const [isFromDate, setFromDatePickerVisibility] = useState(false);
    const [fromdate, setFromDate] = useState('Select From Date');
    const showFromDate = () => {
        setFromDatePickerVisibility(true);
    };
    const hideFromDate = () => {
        setFromDatePickerVisibility(false);
    };
    const handleFromDate = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        const formattedDate = x1[2] + "/" + x1[1] + "/" + x1[0];
        setFromDate(formattedDate);
        hideFromDate();
        setCurrentDate(fromdate);
    };
    //--- To Date
    const [isToDate, setToDatePickerVisibility] = useState(false);
    const [todate, setToDate] = useState('Select To Date');
    const showToDate = () => {
        setToDatePickerVisibility(true);
    };
    const hideToDate = () => {
        setToDatePickerVisibility(false);
    };
    const handleToDate = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        const formattedDate = x1[2] + "/" + x1[1] + "/" + x1[0];
        setToDate(formattedDate);
        hideToDate();
        setCurrentDate(todate);
    };
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
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#074B66', height: windowHeight * 0.11, borderBottomWidth: 0.8, borderBottomColor: 'lightgrey' }}>
                <Text style={{ marginTop: moderateScale(35), color: '#fff', fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Time Sheet</Text>
            </View>
            <View style={{ padding: moderateScale(15), backgroundColor: "#fff" }}>
                <FormControl width="100%" mx="auto">
                    <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Select Employee</Text></FormControl.Label>
                    <Select style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} selectedValue={EmployeeType} readOnly borderColor="#8B9FB7" width="100%" mx="auto" accessibilityLabel="Select Employee" placeholder="Select Employee" onValueChange={itemValue => setEmployeeType(itemValue)} _selectedItem={{
                        bg: "#81CEEC",
                        endIcon: <CheckIcon size={6} style={{ color: "#fff" }} />
                    }}>
                        <Select.Item label="Suman Kumar" value="1" />
                        <Select.Item label="Abhishek Kumar" value="2" />
                        <Select.Item label="Saurabh Kumar" value="3" />
                        <Select.Item label="Ravi Kumar" value="4" />
                    </Select>
                </FormControl>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <FormControl width="48%" mx="auto" marginTop={2} marginRight={1.5}>
                        <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>From Date</Text></FormControl.Label>
                        <DateTimePickerModal
                            isVisible={isFromDate}
                            mode="date"
                            onConfirm={handleFromDate}
                            onCancel={hideFromDate}
                        />
                        <Button style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#8B9FB7", height: 45, textAlign: "left", alignContent: "flex-start", justifyContent: "flex-start" }} onPress={showFromDate}>
                            <Text style={{ color: "#8B9FB7", fontSize: 10, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>{fromdate}</Text>
                        </Button>
                    </FormControl>
                    <FormControl width="48%" mx="auto" marginTop={2} marginLeft={1.5}>
                        <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>To Date</Text></FormControl.Label>
                        <DateTimePickerModal
                            isVisible={isToDate}
                            mode="date"
                            onConfirm={handleToDate}
                            onCancel={hideToDate}
                        />
                        <Button style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#8B9FB7", height: 45, textAlign: "left", alignContent: "flex-start", justifyContent: "flex-start" }} onPress={showToDate}>
                            <Text style={{ color: "#8B9FB7", fontSize: 10, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>{todate}</Text>
                        </Button>
                    </FormControl>
                </View>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ paddingLeft: moderateScale(15), paddingRight: moderateScale(15), paddingTop: moderateScale(9), paddingBottom: moderateScale(7), backgroundColor: "#eee" }}>
                    <Text style={{ color: '#074B66', fontFamily: 'Poppins_700Bold', fontSize: scale(10) }}>07 Nov 2023</Text>
                </View>
                <View style={{ padding: moderateScale(15), paddingBottom: 0 }}>
                    <View style={{ height: 'auto', borderLeftWidth: 4, borderColor: "#81CEEC", backgroundColor: '#fff', borderRadius: 5, padding: 10, elevation: 3, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Name:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> Suman</Text></Text>
                            <Text onPress={() => navigation.navigate('EntryTimeSheet')} style={{ color: '#074B66', fontFamily: 'Poppins_700Bold', fontSize: scale(10), width: scale(90), alignItems: "center" }}>Edit</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Email:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> suman@gmail.com</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Time:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> 10:00am to 4:00pm</Text></Text>
                            <Button
                                style={{
                                    backgroundColor: '#074B66',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: verticalScale(30),
                                    width: scale(90),
                                }}
                                onPress={() => navigation.navigate('TimeSheetDetail')}

                            >
                                <Text style={{ color: '#fff', fontSize: scale(10), fontFamily: 'Poppins_500Medium', lineHeight: moderateScale(12) }}>View Details</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ height: 'auto', borderLeftWidth: 4, borderColor: "#81CEEC", backgroundColor: '#fff', borderRadius: 5, padding: 10, elevation: 3, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Name:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> Suman</Text></Text>
                            <Text onPress={() => navigation.navigate('EntryTimeSheet')} style={{ color: '#074B66', fontFamily: 'Poppins_700Bold', fontSize: scale(10), width: scale(90), alignItems: "center" }}>Edit</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Email:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> suman@gmail.com</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Time:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> 10:00am to 4:00pm</Text></Text>
                            <Button
                                style={{
                                    backgroundColor: '#074B66',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: verticalScale(30),
                                    width: scale(90),
                                }}
                                onPress={() => navigation.navigate('TimeSheetDetail')}

                            >
                                <Text style={{ color: '#fff', fontSize: scale(10), fontFamily: 'Poppins_500Medium', lineHeight: moderateScale(12) }}>View Details</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}