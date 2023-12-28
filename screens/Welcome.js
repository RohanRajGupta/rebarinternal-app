import React from "react";
import { NativeBaseProvider, ScrollView } from "native-base";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
// for Responsive screen
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Logo } from "../Components/SvgLogo";

export default function Welcome() {
    const navigation = useNavigation();
    const startTimer = () => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000);
    };
    useEffect(function () {
        startTimer();
    }, [])
    return (
        <NativeBaseProvider>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: windowHeight * 0.43 }}>
                        <Logo />
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}