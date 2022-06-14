import React from 'react'
import { View, Text,Button,TouchableOpacity } from 'react-native'
import styles from './OfficesScreenStyles'
import data from 'utils/data'


export interface OfficesScreenViewProps{
    data:any
}

const OfficesScreenView = ({navigation})=>{
    return (
    <View style={styles.container}>
        {data.map((item:any) => 
            <TouchableOpacity  key={item.name} style={styles.button} onPress={()=> navigation.navigate('Tasks', {task:item})}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )}
    </View>)
}
export default OfficesScreenView