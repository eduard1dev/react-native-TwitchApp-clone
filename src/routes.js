import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native'

import Header from './components/Header'

import Following from './pages/Following'
import Discover from './pages/Discover'
import Browse from './pages/Browse'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from './styles/colors'


const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Header/>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let IconName 
                    if (route.name === 'Following') {
                        IconName = focused?'favorite':'favorite-border'
                    } else if (route.name === 'Discover') {
                        IconName = focused?'explore':'explore'
                    } else { 
                        IconName = focused?'file-copy':'content-copy'
                    }
                    return <MaterialIcons name={IconName} size={25} color={focused?Colors.purple:'#000'}/>
                }
            })} 
            tabBarOptions={{activeTintColor: Colors.purple, inactiveTintColor:'#000', labelStyle:{fontSize: 12}}}
            >
                <Tab.Screen name='Following' component={Following}/>
                <Tab.Screen name='Discover' component={Discover}/>
                <Tab.Screen name='Browse' component={Browse}/>
            </Tab.Navigator> 
        </NavigationContainer>
    )
}