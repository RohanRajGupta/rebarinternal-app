import React from "react";
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, ScrollView } from "native-base";
import { Dimensions, View, Text } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Logo, Manageteamicon, ManageLeadicon, Manageemployeeicon } from "../Components/SvgLogo";

export default function ManageUsersDashboard({ navigation }) {
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
            <View style={{ backgroundColor: '#fff', height: windowHeight * 0.05, borderBottomWidth: 0.8, borderBottomColor: 'lightgrey' }}>
            </View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: windowHeight * 0.08 }}>
                    <Logo />
                    <View style={{ padding: moderateScale(15), marginTop: moderateScale(30) }} >
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'space-between', }}>
                            <View style={{ width: "48%", alignItems: "center", borderWidth: 1, borderColor: "#eee", paddingTop: moderateScale(20), paddingBottom: moderateScale(15), borderRadius: 10, marginRight: 5 }} >
                                <Manageteamicon onPress={() => navigation.navigate('UsersListAdmin')} />
                                <Text onPress={() => navigation.navigate('UsersListAdmin')} style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', marginTop: moderateScale(10) }}>Admin</Text>
                            </View>
                            <View style={{ width: "48%", alignItems: "center", borderWidth: 1, borderColor: "#eee", paddingTop: moderateScale(20), paddingBottom: moderateScale(15), borderRadius: 10, marginLeft: 5 }}>
                                <ManageLeadicon onPress={() => navigation.navigate('TeamLead')} />
                                <Text onPress={() => navigation.navigate('TeamLead')} style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', marginTop: moderateScale(10) }}>Team Lead</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(15), alignItems: 'center', justifyContent: 'space-between', }}>
                            <View style={{ width: "48%", alignItems: "center", borderWidth: 1, borderColor: "#eee", paddingTop: moderateScale(20), paddingBottom: moderateScale(15), borderRadius: 10, marginRight: 5 }}>
                                <Manageemployeeicon onPress={() => navigation.navigate('Employee')} />
                                <Text onPress={() => navigation.navigate('Employee')} style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', marginTop: moderateScale(10) }}>Employee</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}