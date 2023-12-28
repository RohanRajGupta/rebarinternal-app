import React from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Input, FormControl, Button, ScrollView, Pressable, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, View, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Icon2 } from "../Components/SvgLogo";

export default function ResetPassword({ navigation }) {
    //Password
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    // FONTS
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
                    <View style={{ paddingLeft: moderateScale(15), paddingRight: moderateScale(15), marginBottom: moderateScale(15) }} >
                        <View style={{ marginBottom: windowHeight * 0.02 }}>
                            <Text style={{ color: '#074B66', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginBottom: 0 }}>Reset your password</Text>
                            <Text style={{ color: '#847F7F', fontSize: 8, fontFamily: 'Poppins_400Regular', marginBottom: 0 }}>Confirm your new password below</Text>
                        </View>
                        <FormControl width="100%" mx="auto">
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Reset Your New Password</Text> </FormControl.Label>
                            <Input style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} borderColor="#8B9FB7" width="100%" placeholder="Type here..." type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                <Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="muted.400" />
                            </Pressable>} />
                        </FormControl>
                        <FormControl width="100%" mx="auto" marginTop={2}>
                            <FormControl.Label style={{ marginBottom: 0 }}><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Confirm New Password</Text></FormControl.Label>
                            <Input style={{ fontFamily: 'Poppins_500Medium', color: "#1E1E1E", fontSize: 10 }} borderColor="#8B9FB7" width="100%" placeholder="Type here..." type={show1 ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow1(!show1)}>
                                <Icon as={<Ionicons name={show1 ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="muted.400" />
                            </Pressable>} />
                        </FormControl>
                        <Button marginTop={6} borderRadius={100} backgroundColor="#81CEEC" onPress={() => navigation.navigate('ResetPasswordThankyou')}><Text color={'#074B66'} style={{ fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Confirm</Text></Button>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider >
    )
}