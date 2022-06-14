import React, { useState } from 'react'
import { View } from 'react-native'
import TasksScreenView from './TasksScreenView'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../../../App'

export type TasksScreenContainerProps = NativeStackScreenProps<StackParams, 'Tasks'>

const TasksScreenContainer = (props: TasksScreenContainerProps) => {
    const { route, navigation } = props
    const task = route.params.task
    const [currentTask, setCurrentTask] = useState<number>(0)
    const onCompleteTask = () => {
        setCurrentTask(currentTask + 1)
    }
    return <TasksScreenView task={task} currentTask={currentTask} onCompleteTask={onCompleteTask} />
}
export default TasksScreenContainer