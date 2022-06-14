import React from 'react'
import { View } from 'react-native'
import OfficesScreenView from './OfficesScreenView'
import data from 'utils/data'

export interface OfficesScreenContainerProps{

}

const OfficesScreenContainer = ({navigation} )=>{
    return <OfficesScreenView navigation={navigation}/>
}
export default OfficesScreenContainer