import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Header(props){
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={require('../../images/mandalorian_circle.png')} resizeMode='contain' />
                <View style={styles.status}/>
            </View>
            <TouchableOpacity style={{marginRight:25}}>
                <MaterialIcons name='videocam' size={34} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:25}}>
                <MaterialIcons name='inbox' size={26}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:25}}>
                <MaterialIcons name='chat-bubble-outline' size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name='search' size={29}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '9%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor:'#FFF',
        paddingRight: 14,
    },
    containerImage:{
        position: 'absolute',
        left: 14,
        height: 30,
        width: 30,
    },
    image:{
        height: 30,
        width: 30,
    },
    status:{
        position: 'absolute',
        height: 12,
        width: 12,
        backgroundColor: '#b4d169',
        right: -3,
        bottom: -3,
        borderColor: '#FFF',
        borderRadius: 6,
        borderWidth: 2.5,
    }
})