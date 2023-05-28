import React, { useState, useEffect } from 'react'
import CreateTask from '../modals/CreateTask';
import Card from './Card';




const TodoList = () => {

    const [modal,setModal] = useState(false);
    const [taskList,setTaskList] = useState([]);

    const toggle = () => {
        setModal(!modal);
    }

    useEffect(
        () => {
            let arr = localStorage.getItem("taskList");

            if (arr) {
                let obj = JSON.parse(arr);
                setTaskList(obj);
            }
        }, [] )




    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(taskList);
        console.log(taskList);
        setModal(false);
    }
    
    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        console.log(taskList);
        window.location.reload();
    }
    
    
    const updateListArray = (taskobj, index) => {
        let tempList = taskList;
        tempList[index] = taskobj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        console.log(taskList);
        window.location.reload();
    }

 

    return (
        <>
            <div className='header text-center'>
                <h2 style={{fontWeight:"bold",color:"white"}}>Todo<small class="text-body-secondary">ist</small></h2>
                <button className='btn btn-primary mt-1 Button' onClick={() => setModal(true)}>Create Task</button>
            </div>

            <div className='task-container'>
                {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
        

    )
}

export default TodoList