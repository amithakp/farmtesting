import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdsPurchase from './screens/drawerscreens/adspurchase';
import PaymentHistory from './screens/drawerscreens/paymenthistory';
import ContactUs from './screens/drawerscreens/contactus';
import { navigationRef } from './RootNavigation';
import HomeTabs from './screens/hometabs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import CustomDrawer from './components/drawer';
import HomeStack from './screens/homeStack';
import HomeDrawer from './screens/homedrawer';
import Details from './screens/stackscreens/details';
import Notifications from './screens/stackscreens/notifications';
import SearchScreen from './screens/stackscreens/searchscreen';

import EditProfile from './screens/stackscreens/editProfile';
import Machineries from './screens/stackscreens/machineries';
import Fertilizers from './screens/stackscreens/fertilizers';
import Seeds from './screens/stackscreens/seeds';
import MachineriesDetails from './screens/stackscreens/machineriesDetails';
import FertilizersDetails from './screens/stackscreens/fertilizersDetails';
import SeedsDetails from './screens/stackscreens/seedsDetails';
import Login from './screens/login';

export default function App() {



  const Stack = createNativeStackNavigator()

  const Draw = createDrawerNavigator()
  

  // return (
  //   <>
  //   <StatusBar backgroundColor='green'/>
  //   <NavigationContainer
  //   >
  //     <Draw.Navigator
  //       drawerContent={props=> <CustomDrawer {...props}/>

  //     }
  //     screenOptions={{

  //       headerStyle:{
  //         backgroundColor : 'green'
  //       }

  //     }}
  //     >
  //       <Draw.Screen name='HomeStack' component={HomeStack}

  //         options={{

  //           drawerItemStyle: {
  //             display: 'none'
  //           },
  //           headerTitleAlign: 'center',
  //           headerLeftContainerStyle: {
  //           },
  //           headerRightContainerStyle: {
  //             marginRight: 10
  //           },

  //           headerTitle: () => (
  //             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //               <Ionicons name='location' size={20} color='black' style={{
  //                 marginRight: 10
  //               }} />
  //               <Text>kerala</Text>
  //             </View>

  //           ),

  //           headerRight: () => (
  //             <View style={{ flexDirection: 'row' }}>
  //               <Ionicons name='notifications' size={20} color='black'
  //                 style={{ marginRight: 10 }}
  //               />
  //               <MaterialIcons name="g-translate" size={20} color="black" />
  //             </View>


  //           )

  //         }}
  //       />
  //       <Draw.Screen name='MoreAds' component={AdsPurchase} />
  //       <Draw.Screen name='PaymentHistory' component={PaymentHistory} />
  //       <Draw.Screen name='ContactUs' component={ContactUs} />
  //     </Draw.Navigator>
  //   </NavigationContainer>
  //   </>
  // );

  return(
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown : false
      }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='HomeDrawer' component={HomeDrawer}/>
          <Stack.Screen name='Details' component={Details}/>
          <Stack.Screen name='Notifications' component={Notifications}/>
          <Stack.Screen name='SearchScreen' component={SearchScreen}/>
          <Stack.Screen name='Edit' component={EditProfile}/>
          <Stack.Screen name='Machineries' component={Machineries}/>
          <Stack.Screen name='Fertilizers' component={Fertilizers}/>
          <Stack.Screen name='Seeds' component={Seeds}/>
          <Stack.Screen name='MachineriesDetails' component={MachineriesDetails}/>
          <Stack.Screen name='FertilizersDetails' component={FertilizersDetails}/>
          <Stack.Screen name='SeedsDetails' component={SeedsDetails}/>


      </Stack.Navigator>
    </NavigationContainer>
  )

}

