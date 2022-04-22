//import liraries
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './hometabs';
import AdsPurchase from './drawerscreens/adspurchase';
import PaymentHistory from './drawerscreens/paymenthistory';
import ContactUs from './drawerscreens/contactus';
import WeatherReport from './drawerscreens/weatherreport';
import OurBlogs from './drawerscreens/ourblogs';
import PrivacyPolicy from './drawerscreens/privacypolicy';
import Settings from './drawerscreens/settings';
import Education from './drawerscreens/education';
import InternshipForm from './drawerscreens/internshipform';
import AboutUs from './drawerscreens/aboutus';
import LogOut from './drawerscreens/logout';
import { Text, View } from 'react-native';
import {Ionicons , MaterialIcons , FontAwesome ,Fontisto,  AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import CustomDrawer from '../components/drawer';

// create a component
const HomeDrawer = ({navigation}) => {
  
    const Draw = createDrawerNavigator()


    return (
        <Draw.Navigator
        drawerContent={props=> <CustomDrawer {...props}/>}

        screenOptions={{
        
        headerStyle:{
          backgroundColor : 'Red'
        }
        }} >
            <Draw.Screen component={HomeTabs} name='HomeTabs'
                options={{
                              drawerItemStyle: {
                                display: 'none'
                              },
                              headerTitleAlign: 'center',
                              headerLeftContainerStyle: {
                              },
                              
                  
                              headerTitle: () => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                  {/* <Ionicons name='location' size={20} color='black' style={{
                                    marginRight: 10
                                  }}
                                  
                                  /> */}
                                  <Text style={{ fontWeight:'bold', color:'green' }} > FarmEasy</Text>
                                </View>
                  
                              ),
                  
                              headerRight: () => (
                                <View style={{ flexDirection: 'row' , marginRight : 10 }}>
                                  <Ionicons name='notifications' size={20} color='black'
                                    style={{ marginRight: 10 }}
                                    onPress={()=>navigation.navigate('Notifications')}
                                  />
                                  {/* <MaterialIcons name="g-translate" size={20} color="black" /> */}
                                </View>
                  
                  
                              )
                  
                            }}
            />
            <Draw.Screen name='MoreAds' component={AdsPurchase} options={{
                title : 'Purchase More Ads',
                drawerIcon : ()=>(
                    <FontAwesome name="dollar" size={24} color="black" />
                ),
                drawerLabel : 'Purchase More Ads'
                
            }} />
            <Draw.Screen name='PaymentHistory' component={PaymentHistory} options={{
                                title : 'Payment history',

                drawerLabel : 'Payment History',
                drawerIcon : ()=>(
                    <AntDesign name="creditcard" size={24} color="black" />
                )
            }} />
            <Draw.Screen name='ContactUs' component={ContactUs} options={{
                title : 'Contact us',
                drawerIcon : ()=>(
                    <MaterialIcons name="contact-page" size={24} color="black" />
                ),
                drawerLabel : 'Contact us'
            }}  />
            <Draw.Screen name='WeatherReport' component={WeatherReport} options={{
                title : 'Weather Report',
                drawerIcon : ()=>(
                  <MaterialCommunityIcons name="weather-partly-cloudy" size={24} color="black" /> 
                ),
                drawerLabel : 'Weather Report'
            }}  />
            <Draw.Screen name='OurBlogs' component={OurBlogs} options={{
                title : 'Our Blogs',
                drawerIcon : ()=>(
                  <Fontisto name="blogger" size={24} color="black" />
                ),
                drawerLabel : 'Our Blogs'
            }}  />
            <Draw.Screen name='Privacy Policy' component={PrivacyPolicy} options={{
                title : 'Privacy Policy',
                drawerIcon : ()=>(
                  <MaterialIcons name="policy" size={24} color="black" />                   
                ),
                drawerLabel : 'Privacy Policy'
            }}  />
            <Draw.Screen name='Settings' component={Settings} options={{
                title : 'Settings',
                drawerIcon : ()=>(
                  <Ionicons name="settings-outline" size={24} color="black" />      
                ),
                drawerLabel : 'Settings'
            }}  />
            <Draw.Screen name='Education' component={Education} options={{
                title : 'Education',
                drawerIcon : ()=>(
                  <MaterialIcons name="cast-for-education" size={24} color="black" />      
                ),
                drawerLabel : 'Education'
            }}  />
            <Draw.Screen name='Internship Form' component={InternshipForm} options={{
                title : 'Internship Form',
                drawerIcon : ()=>(
                  <AntDesign name="form" size={24} color="black" />      
                ),
                drawerLabel : 'Internship Form'
            }}  />
            <Draw.Screen name='About Us' component={AboutUs} options={{
                title : 'AboutUs',
                drawerIcon : ()=>(
                  <Ionicons name="people-circle" size={24} color="black" />     
                ),
                drawerLabel : 'AboutUs'
            }}  />
            <Draw.Screen name='Log Out' component={LogOut} options={{
                title : 'LogOut',
                drawerIcon : ()=>(
                  <MaterialIcons name="logout" size={24} color="black" />    
                ),
                drawerLabel : 'LogOut'
            }}  />
        </Draw.Navigator>
    );
};


export default HomeDrawer;
