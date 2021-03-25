import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'



export default function CategoryContainer(props){
    return(
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={props.image} resizeMode={'contain'}></Image>
            </View>
            <View>
                <Text style={styles.text} numberOfLines={1}>{props.name}</Text>
            </View>
            <View style={styles.containerStatus}>
                <View style={styles.status}/>
                <Text style={styles.text2}>{props.views}</Text>
            </View>
        </View>                   
    )
}

const styles = StyleSheet.create({
    container:{
        height: 180,
        width: 98,
        backgroundColor: '#FFF',
        marginRight:10,
        justifyContent: 'flex-start',
    },
    image:{
        width: 98,
        height: 130,
    },
    text:{
        padding:0,
        color:'#000',
        maxWidth: 98,
        fontWeight: 'bold',
    },
    text2:{
        padding:0,
        color:'#000',
        maxWidth: 98,
        fontWeight: 'bold',
    },
    status:{
        height: 10,
        width: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        marginRight:3,
    },
    containerStatus:{
        flexDirection:'row',
        alignItems:'center',
    }
})