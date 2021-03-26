import React from 'react'
import { View, Text,Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'

export default function LiveContainer(props){
    const tags = props.tags
    console.log(tags)

    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground style={styles.thumbContainer} source={props.thumb} resizeMode={'contain'}>
                <View style={styles.containerStatus} >
                    <View style={styles.status}/>
                    <Text style={styles.text2}>{props.views}</Text>
                </View>
            </ImageBackground>
            <View style={{ justifyContent:'space-around', backgroundColor:'#FFF', marginLeft:16}}>
                <View style={styles.liveName}>
                    <Image style={styles.icon} source={props.source}/>
                    <Text style={styles.textBold}>{props.name}</Text>
                </View>
                <Text numberOfLines={1} style={styles.textNormal}>{props.streamTitle}</Text>
                <Text style={styles.textNormal}>{props.game}</Text>
                <View style={{flexDirection:'row'}}>
                    {tags? tags.map((Item) => (
                            <View style={styles.tag}>
                                <Text style={styles.textTag}>{Item}</Text>
                            </View> 
                            )
                        )
                    :<Text></Text>}
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:95,
        backgroundColor: '#FFF',
        marginBottom:10,
    },
    thumbContainer:{
        width:120,
        height:70,
    },
    status:{
        height: 10,
        width: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        marginRight:3,
    },
    containerStatus:{
        position:'absolute',
        left:4,
        bottom:3,
        flexDirection:'row',
        alignItems:'center',
    },
    textBold:{
        fontSize:15,
        marginLeft:3,
        color:'#000',
        fontWeight: 'bold',
    },
    textNormal:{
        fontSize:13,
        color:'#000',
        maxWidth:210,
    },
    textTag:{
        fontSize:13,
        color:'#000',
    },
    text2:{
        padding:0,
        color:'#FFF',
        fontWeight: 'bold',
    },
    liveName:{
        flexDirection:'row',
        alignItems:'center',
    },
    icon:{
        height: 20,
        width: 20,
    },
    tag:{
        bottom: 0,
        height: 18,
        alignSelf:'flex-start',
        paddingHorizontal: 8,
        backgroundColor: '#D3D3D3',
        borderRadius:9,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:4,
    }
})