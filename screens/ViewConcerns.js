import React from "react";
import { useState } from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, FormControl, Button, ScrollView, Modal, TextArea } from "native-base";
import { Dimensions, View, Text } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function ViewConcerns({ navigation }) {
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
                <Text style={{ marginTop: moderateScale(35), color: '#fff', fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>View Concerns</Text>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ paddingLeft: moderateScale(15), paddingRight: moderateScale(15), paddingTop: moderateScale(9), paddingBottom: moderateScale(7), backgroundColor: "#eee" }}>
                    <Text style={{ color: '#074B66', fontFamily: 'Poppins_700Bold', fontSize: scale(10) }}>07 Nov 2023</Text>
                </View>
                <View style={{ padding: moderateScale(15) }}>
                    <View style={{ height: 'auto', borderLeftWidth: 4, borderColor: "#5cb85c", backgroundColor: '#fff', borderRadius: 5, padding: 10, elevation: 3, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Name:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> Suman</Text></Text>
                            <Text onPress={() => navigation.navigate('ApprovedDetail')} style={{ color: '#FF4545', fontFamily: 'Poppins_700Bold', fontSize: scale(10), width: scale(90), alignItems: "center" }}>View Concerns</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Time:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> 10:00am to 4:00pm</Text></Text>
                            <Button
                                style={{
                                    backgroundColor: '#5cb85c',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: verticalScale(30),
                                    width: scale(90),
                                    paddingTop: 11,
                                    paddingBottom: 7
                                }}>
                                <Text style={{ color: '#fff', fontSize: scale(10), fontFamily: 'Poppins_500Medium', lineHeight: moderateScale(11) }}>Approved</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ height: 'auto', borderLeftWidth: 4, borderColor: "#FDC300", backgroundColor: '#fff', borderRadius: 5, padding: 10, elevation: 3, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Name:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> Suman</Text></Text>
                            <Text onPress={() => navigation.navigate('PendingDetail')} style={{ color: '#FF4545', fontFamily: 'Poppins_700Bold', fontSize: scale(10), width: scale(90), alignItems: "center" }}>View Concerns</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Time:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> 10:00am to 4:00pm</Text></Text>
                            <Button
                                style={{
                                    backgroundColor: '#FDC300',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: verticalScale(30),
                                    width: scale(90),
                                    paddingTop: 11,
                                    paddingBottom: 7
                                }}>
                                <Text style={{ color: '#fff', fontSize: scale(10), fontFamily: 'Poppins_500Medium', lineHeight: moderateScale(11) }}>Pending</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ height: 'auto', borderLeftWidth: 4, borderColor: "#FF4545", backgroundColor: '#fff', borderRadius: 5, padding: 10, elevation: 3, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Name:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> Suman</Text></Text>
                            <Text onPress={() => navigation.navigate('RejectDetail')} style={{ color: '#FF4545', fontFamily: 'Poppins_700Bold', fontSize: scale(10), width: scale(90), alignItems: "center" }}>View Concerns</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Time:- <Text style={{ color: '#8B9FB7', fontFamily: 'Poppins_500Medium', fontSize: scale(12) }}> 10:00am to 4:00pm</Text></Text>
                            <Button
                                style={{
                                    backgroundColor: '#FF4545',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: verticalScale(30),
                                    width: scale(90),
                                    paddingTop: 11,
                                    paddingBottom: 7
                                }}>
                                <Text style={{ color: '#fff', fontSize: scale(10), fontFamily: 'Poppins_500Medium', lineHeight: moderateScale(11) }}>Reject</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}