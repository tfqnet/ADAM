import React from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import styles from './TasksScreenStyles'

export interface TasksScreenViewProps {
    task: any,
    currentTask: number,
    onCompleteTask: () => void
}

const TasksScreenView = (props: TasksScreenViewProps) => {
    const { task = [], currentTask = 0, onCompleteTask } = props


    const renderConfirmButton = (currentTask: number, index: number) => {
        if (index > currentTask) {
            return (
                <TouchableOpacity style={[styles.confirmButton, { backgroundColor: '#737373' }]} disabled >
                    <Text style={styles.confirmButtonText}>Complete previous task</Text>
                </TouchableOpacity>
            )
        }
        if (index < currentTask) {
            return (
                <TouchableOpacity style={[styles.confirmButton, { backgroundColor: '#00cc00' }]} disabled>
                    <Text style={styles.confirmButtonText}>Completed</Text>
                </TouchableOpacity>
            )
        }
        if (currentTask === index) {
            return (
                <TouchableOpacity onPress={onCompleteTask} style={[styles.confirmButton, { backgroundColor: '#ff4d4d' }]} >
                    <Text style={styles.confirmButtonText}>Mark as complete</Text>
                </TouchableOpacity>
            )
        }

    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {task.tasks.map((item: any, index: number) => {
                return (
                    <View key={item.taskName} style={styles.button}>
                        <Text style={styles.text}>{item.taskName}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        {renderConfirmButton(currentTask, index)}
                    </View>)
            }
            )}
        </ScrollView>)
}
export default TasksScreenView