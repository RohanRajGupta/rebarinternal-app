import React from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Button, ScrollView } from "native-base";
import { Dimensions, View, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Thankyouicon } from "../Components/SvgLogo";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ResetPasswordThankyou({ navigation }) {
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
            <View style={{ backgroundColor: '#fff', height: windowHeight * 0.05, borderBottomWidth: 0.8, borderBottomColor: 'lightgrey' }}>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ padding: moderateScale(15), marginTop: moderateScale(20), alignItems: "center" }} >
                    <Thankyouicon />
                    <Text style={{ color: '#074B66', fontSize: 18, fontFamily: 'Poppins_500Medium', marginBottom: 0, textAlign: "center", marginTop: moderateScale(30) }}>
                        Reset Password Confirmation.
                    </Text>
                    <Text style={{ color: '#847F7F', fontSize: 11, fontFamily: 'Poppins_400Regular', marginBottom: 0, textAlign: "center", marginTop: moderateScale(30) }}>
                        Your password has been reset. Please click here to login button
                    </Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 15 }} >
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Button onPress={() => navigation.navigate('Login')} borderRadius={100} backgroundColor="#81CEEC" style={{ color: "#074B66", width: "100%" }}><Text color={'#074B66'} style={{ fontFamily: 'Poppins_500Medium' }}>LOG IN</Text></Button>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}