import React, { useState, useRef } from 'react';
import {
    useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, FormControl, Button, ScrollView } from "native-base";
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { Icon2 } from "../Components/SvgLogo";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';

export default function EmailOTP({ navigation }) {
    //OTP
    const [code, setCode] = useState()
    const [value, setValue] = useState('');
    const [otp, setOtp] = useState();
    const otpInputs = useRef([]);
    const CELL_COUNT = 5;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT }); const buttonPress = () => {
        Alert.alert(phoneNumber);
    };
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

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
                    <View style={{ paddingLeft: moderateScale(15), paddingRight: moderateScale(15) }} >
                        <View style={{ marginBottom: windowHeight * 0.04 }}>
                            <Text style={{ color: '#074B66', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginBottom: 0 }}>Reset your password</Text>
                            <Text style={{ color: '#847F7F', fontSize: 8, fontFamily: 'Poppins_400Regular', marginBottom: 0 }}>A verification code is shared on your given email - abc*****we@gmail.com</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <FormControl>
                                <FormControl.Label><Text style={{ color: "#074B66", fontSize: 12, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Get OTP on Email</Text> </FormControl.Label>
                                <CodeField
                                    style={styles.codefield}
                                    ref={ref}
                                    {...props}
                                    value={value}
                                    onChangeText={setValue}
                                    cellCount={CELL_COUNT}
                                    rootStyle={styles.codeFieldRoot}
                                    keyboardType="number-pad"
                                    textContentType="oneTimeCode"
                                    renderCell={({ index, symbol, isFocused }) => {
                                        const cellStyle = [
                                            styles.cell,
                                            isFocused && styles.focusCell,
                                            index === 0 && styles.leftMarginCell,
                                            index === 5 && styles.rightMarginCell,
                                        ];
                                        return (
                                            <Text
                                                key={index}
                                                style={cellStyle}
                                                onLayout={getCellOnLayoutHandler(index)} keyboardType='number-pad'
                                            >
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        );
                                    }}
                                />
                            </FormControl>
                        </View>
                        <Button marginTop={6} borderRadius={100} backgroundColor="#81CEEC" onPress={() => navigation.navigate('ResetPassword')}><Text color={'#074B66'} style={{ fontSize: 14, fontFamily: 'Poppins_500Medium', marginBottom: 0 }}>Confirm</Text></Button>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider >
    )
}

const styles = StyleSheet.create({
    cell:
    {
        width: '17%',
        height: width * 0.15,
        fontSize: width * 0.05,
        borderWidth: 1,
        borderColor: 'white',
        textAlign: 'center',
        borderColor: '#8B9FB7',
        backgroundColor: 'white',
        borderRadius: 4,
        color: 'black',
        paddingTop: width * 0.04
    },
    codeFieldCell: {
        marginLeft: -2,
    },
    codefield: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    }
});