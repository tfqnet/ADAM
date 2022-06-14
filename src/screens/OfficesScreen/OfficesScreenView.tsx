import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import styles from './OfficesScreenStyles'
import data from 'utils/data'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParams } from '../../../App'


export interface OfficesScreenViewProps {

}

const OfficesScreenView = (props: OfficesScreenViewProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()
    return (
        <View style={styles.container}>
            {data.map((item: any) =>
                <TouchableOpacity key={item.name} style={styles.button} onPress={() => navigation.navigate('Tasks', { task: item })}>
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            )}
        </View>)
}
export default OfficesScreenView