import React,{ useState } from 'react'
import { View } from 'react-native'
import TasksScreenView from './TasksScreenView'
import data from 'utils/data'

export interface TasksScreenContainerProps{

}

const TasksScreenContainer = ({navigation,route})=>{
    const {task }= route.params
    const [currentTask, setCurrentTask] = useState<number>(0)
    const onCompleteTask = ()=>{
        setCurrentTask(currentTask+1)
    }
    return <TasksScreenView task={task} currentTask={currentTask} onCompleteTask={onCompleteTask}/>
}
export default TasksScreenContainer