import React from 'react';

type TasksPropsType = {
    title: string
    tasks: {
        taskId: number
        title: string
        isDone: boolean
    }[]
    students: string[]

}


export const Tasks = (props: TasksPropsType) => {

    const tasks = props.tasks.map((el) => {
        return (
            <li key={el.taskId}>
                <input type={"checkbox"} checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    })

    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {tasks}
            </ul>
            {props.students.map(el => <p>{el}</p>)}
        </div>
    );
};
