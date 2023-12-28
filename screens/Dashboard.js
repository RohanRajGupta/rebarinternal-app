import React from "react";
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, ScrollView } from "native-base";
import { Dimensions, View, Text } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Logo, Manageusericon, Reporticon, Timesheeticon, ConcernsIcon } from "../Components/SvgLogo";

export default function Login({ navigation }) {
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
                                <Manageusericon onPress={() => navigation.navigate('ManageUsersDashboard')} />
                                <Text onPress={() => navigation.navigate('ManageUsersDashboard')} style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', marginTop: moderateScale(10) }}>Manage Users</Text>
                            </View>
                            <View style={{ width: "48%", alignItems: "center", borderWidth: 1, borderColor: "#eee", paddingTop: moderateScale(20), paddingBottom: moderateScale(15), borderRadius: 10, marginLeft: 5 }}>
                                <Timesheeticon onPress={() => navigation.navigate('TeamSheetTeamLead')} />
                                <Text onPress={() => navigation.navigate('TeamSheetTeamLead')} style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', marginTop: moderateScale(10) }}>View Time Sheet</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(15), alignItems: 'center', justifyContent: 'space-between', }}>
                            <View style={{ width: "48%", alignItems: "center", borderWidth: 1, borderColor: "#eee", paddingTop: moderateScale(20), paddingBottom: moderateScale(15), borderRadius: 10, marginRight: 5 }}>
                                <Reporticon onPress={() => navigation.navigate('ViewReports')} />
                                <Text onPress={() => navigation.navigate('ViewReports')} style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', marginTop: moderateScale(10) }}>View Reports</Text>
                            </View>
                            <View style={{ width: "48%", alignItems: "center", borderWidth: 1, borderColor: "#eee", paddingTop: moderateScale(20), paddingBottom: moderateScale(15), borderRadius: 10, marginLeft: 5 }}>
                                <ConcernsIcon onPress={() => navigation.navigate('ViewConcerns')} />
                                <Text onPress={() => navigation.navigate('ViewConcerns')} style={{ fontSize: scale(12), fontFamily: 'Poppins_500Medium', color: '#074B66', marginTop: moderateScale(10) }}>View Concerns</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}