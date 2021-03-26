import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList} from 'react-native'

import CategoryContainer from '../../components/CategoryContainer'
import data from '../../components/CategoryContainer/data'

import LiveContainer from '../../components/LiveContainer'
import dataLive from '../../components/LiveContainer/data'

export default function following(){
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} stickyHeaderIndices={[1,3]}>
            <Text style={styles.title}>Following</Text>
            <View>
                <Text style={styles.title2}>FOLLOWED CATEGORIES</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginHorizontal:14}}>
                {data.map((item, index) => <CategoryContainer key={index} name={item.name} image={item.source} views={item.views}></CategoryContainer>)}
            </ScrollView>
            <View>
                <Text style={styles.title2}>LIVE CHANNELS</Text>
            </View>
            <ScrollView style={{marginHorizontal:14}}>
                {dataLive.map((item, index) => <LiveContainer key={index} name={item.name} thumb={item.thumb} source={item.icon} game={item.game} streamTitle={item.streamTitle} views={item.views} tags={item.tags}/>)}
            </ScrollView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
    },
    title:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        left: 14,
    },
    title2:{
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
        left: 14,
        backgroundColor:'#FFF',
        paddingVertical: 5,

    }
})