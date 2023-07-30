import React from 'react';
import { Text, View ,SafeAreaView, Image} from 'react-native';
import Home from './home';
import Login from './login';
import Setting from './setting';
import Tracking from './settingPage/Tracking';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './product';
import Profile from './profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    // onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = ()=>{
    return (

        <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:({ color, size })=>
                        // <Image source={require("../images/message.jpg") }  style={{height:35,width:35}} resizeMode="stretch" />
                        (
                            <Icon name="home" color={color} size={size} />
                          )
                    
                }} />
                <Tab.Screen name="Profile" component={Profile} options={{
                   tabBarLabel: 'Profile',
                   tabBarIcon:({ color, size })=>
                       // <Image source={require("../images/message.jpg") }  style={{height:35,width:35}} resizeMode="stretch" />
                       (
                           <Icon name="user" color={color} size={size} />
                         )
                    }} />
                {/* <Tab.Screen name="Products" component={Products} /> */}
                <Tab.Screen name="Setting" component={Setting} options={{
                   tabBarLabel: 'Setting',
                   tabBarIcon:({ color, size })=>
                       (
                           <Icon name="gear" color={color} size={size} />
                         )
                    }}/>


        </Tab.Navigator>
    )
    
}

const RootComponent = () => {
    return (
            <NavigationContainer>
                 <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="HomeTabs" component={MyTabs} />
                    <Stack.Screen name="Tracking" component={Tracking} />
                   
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default RootComponent;