import React from "react";
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Input, FormControl, Button, ScrollView } from "native-base";
import { Dimensions, View, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Icon2 } from "../Components/SvgLogo";

export default function EnterNumber({ navigation }) {
    //FONT
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
                <Text style={{ marginTop: moderateScale(35), color: '#074B66', fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Reset Password</Text>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
                    <Icon2 />
                    <View style={{ paddingLeft: moderateScale(15), paddingRight: moderateScale(15) }} >
                        <View style={{ marginBottom: windowHeight * 0.04 }}>
                            <Text style={{ color: '#074B66', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginBottom: 0 }}>Forgot password?</Text>
                            <Text style={{ color: '#847F7F', fontSize: 8, fontFamily: 'Poppins_400Regular', marginBottom: 0 }}>Enter your Email ID for verification</Text>
                        </View>
                        <FormControl width="100%" mx="auto">
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Enter your Email ID</Text> </FormControl.Label>
                            <Input style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} borderColor="#8B9FB7" width="100%" placeholder="Type here..." />
                        </FormControl>
                        <Button marginTop={8} borderRadius={100} backgroundColor="#81CEEC" onPress={() => navigation.navigate('EmailOTP')}><Text color={'#074B66'} style={{ fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Get OTP</Text></Button>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}