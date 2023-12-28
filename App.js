import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import AddUser from './screens/AddUser';
import EntryTimeSheet from './screens/EntryTimeSheet';
import EnterNumber from './screens/EnterNumber';
import EmailOTP from './screens/EmailOTP';
import PhoneOTP from './screens/PhoneOTP';
import ResetPassword from './screens/ResetPassword';
import TeamSheetTeamLead from './screens/TeamSheetTeamLead';
import UsersListAdmin from "./screens/UsersListAdmin";
import Dashboard from "./screens/Dashboard";
import ManageUsersDashboard from "./screens/ManageUsersDashboard";
import ViewReports from "./screens/ViewReports";
import Employee from "./screens/Employee";
import AddEmployee from "./screens/AddEmployee";
import Thankyou from "./screens/Thankyou";
import ResetPasswordThankyou from "./screens/ResetPasswordThankyou";
import ViewConcerns from "./screens/ViewConcerns";
import ApprovedDetail from "./screens/ApprovedDetail";
import TimeSheetDetail from "./screens/TimeSheetDetail"
import RejectDetail from "./screens/RejectDetail"
import PendingDetail from "./screens/PendingDetail"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='EntryTimeSheet' component={EntryTimeSheet}></Stack.Screen> */}
        {/* <Stack.Screen name='EntryTimeSheet' component={EntryTimeSheet}></Stack.Screen> */}
        <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='AddUser' component={AddUser}></Stack.Screen>
        <Stack.Screen name='EnterNumber' component={EnterNumber}></Stack.Screen>
        <Stack.Screen name='EmailOTP' component={EmailOTP}></Stack.Screen>
        <Stack.Screen name='PhoneOTP' component={PhoneOTP}></Stack.Screen>
        <Stack.Screen name='ResetPassword' component={ResetPassword}></Stack.Screen>
        <Stack.Screen name='TeamSheetTeamLead' component={TeamSheetTeamLead}></Stack.Screen>
        <Stack.Screen name='UsersListAdmin' component={UsersListAdmin}></Stack.Screen>
        <Stack.Screen name='Dashboard' component={Dashboard}></Stack.Screen>
        <Stack.Screen name='ManageUsersDashboard' component={ManageUsersDashboard}></Stack.Screen>
        <Stack.Screen name='ViewReports' component={ViewReports}></Stack.Screen>
        <Stack.Screen name='Employee' component={Employee}></Stack.Screen>
        <Stack.Screen name='AddEmployee' component={AddEmployee}></Stack.Screen>
        <Stack.Screen name='Thankyou' component={Thankyou}></Stack.Screen>
        <Stack.Screen name='ResetPasswordThankyou' component={ResetPasswordThankyou}></Stack.Screen>
        <Stack.Screen name='ViewConcerns' component={ViewConcerns}></Stack.Screen>
        <Stack.Screen name='ApprovedDetail' component={ApprovedDetail}></Stack.Screen>
        <Stack.Screen name='TimeSheetDetail' component={TimeSheetDetail}></Stack.Screen>
        <Stack.Screen name='RejectDetail' component={RejectDetail}></Stack.Screen>
        <Stack.Screen name='PendingDetail' component={PendingDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}