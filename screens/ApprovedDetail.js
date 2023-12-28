import React from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, ScrollView } from "native-base";
import { Dimensions, View, Text } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ApprovedDetail({ navigation }) {
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
                <Text style={{ marginTop: moderateScale(35), color: '#074B66', fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Concerns Detail</Text>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ padding: moderateScale(15) }}>
                    <View style={{ height: 'auto', borderLeftWidth: 4, borderColor: "#074B66", backgroundColor: '#fff', borderRadius: 5, paddingBottom: 10, elevation: 3 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(140) }}>Name{'\n'}<Text style={{ color: "#7896B9" }}>Saurabh Kumar</Text></Text>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(140) }}>E-mail{'\n'}<Text style={{ color: "#7896B9" }}>saurabh@gmail.com</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingBottom: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(140) }}>Entry Time{'\n'}<Text style={{ color: "#7896B9" }}>09:00:00</Text></Text>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(140) }}>Exit Time{'\n'}<Text style={{ color: "#7896B9" }}>05:00:00</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(140) }}>Image{'\n'}<Text style={{ color: "#FF4545" }}>View Image</Text></Text>
                        </View>
                    </View>
                    <View style={{ height: 'auto', marginTop: 30, borderLeftWidth: 4, borderColor: "#5cb85c", backgroundColor: '#fff', borderRadius: 5, paddingTop: 10, paddingBottom: 10, elevation: 3 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: scale(14), fontFamily: 'Poppins_500Medium', backgroundColor: "#5cb85c", color: '#fff', width: scale(140), padding: 3, textAlign: "center", borderBottomRightRadius: 12, borderTopRightRadius: 12, }}>Approved</Text>
                            <Text style={{ color: '#074B66', fontFamily: 'Poppins_500Medium', fontSize: scale(12), paddingRight: 10, width: scale(130) }}><Text style={{ color: "#8B9FB7" }}></Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingBottom: 10, paddingRight: 10, marginTop: 10 }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(140) }}>Entry Time{'\n'}<Text style={{ color: "#7896B9" }}>12:12:12</Text></Text>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', width: scale(140) }}>Exit Time{'\n'}<Text style={{ color: "#7896B9" }}>12:12:12</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66' }}>Remark{'\n'}<Text style={{ color: "#7896B9" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}