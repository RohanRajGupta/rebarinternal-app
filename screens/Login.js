import React from "react";
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Input, FormControl, Button, ScrollView, Pressable, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, View, Text } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Logo } from "../Components/SvgLogo";

export default function Login({ navigation }) {
       //Password
       const [show, setShow] = React.useState(false);
       //Fonts
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
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: windowHeight * 0.13 }}>
                    <Logo />
                    <View style={{ padding: moderateScale(15), marginTop: moderateScale(30) }} >
                        <FormControl width="100%" mx="auto">
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Username</Text> </FormControl.Label>
                            <Input style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} borderColor="#8B9FB7" width="100%" placeholder="Type here..." />
                        </FormControl>
                        <FormControl width="100%" mx="auto" marginTop={2}>
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Password</Text></FormControl.Label>
                            <Input style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} borderColor="#8B9FB7" width="100%" placeholder="Type here..." type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                <Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="muted.400" />
                            </Pressable>} />
                        </FormControl>
                        <View>
                            <Text onPress={() => navigation.navigate('EnterNumber')} style={{ textAlign: "right", marginTop: 5, color: '#074B66', fontSize: 10, fontFamily: 'Poppins_500Medium' }}>Forgot Password?</Text>
                        </View>
                        <Button marginTop={6} borderRadius={100} backgroundColor="#81CEEC" style={{ color: "#074B66" }} onPress={() => navigation.navigate('Dashboard')}><Text color={'#074B66'} style={{ fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>LOG IN</Text></Button>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}