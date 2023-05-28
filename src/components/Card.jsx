import React from 'react'
import { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#4942E4",
            secondaryColor : "#8696FE"
        },
        {
            primaryColor : "#E08E6D",
            secondaryColor : "#F6C391"
        },
        {
            primaryColor : "#5C469C",
            secondaryColor : "#D4ADFC"
        },
        {
            primaryColor : "#A0D8B3",
            secondaryColor : "#DDFFBB"
        },
        {
            primaryColor : "#393646",
            secondaryColor : "#4F4557"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (taskobj) => {
        updateListArray(taskobj, index)
    }

    const handleDelete = (index) => {
        deleteTask(index);
    }

  return (
    <div className = "card-wrapper mr-5 box">
    <div className = "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
    <div className = "task-holder">
        <span className = "card-header" style={{backgroundColor: colors[index%5].secondaryColor, borderRadius: "10px"}}>{taskObj.Name}</span>
        <p className = "mt-3">{taskObj.Description}</p>

        <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
            <i className = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>

            <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer", margin:"4px"}} onClick = {handleDelete}></i>
        </div>
</div>

<EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>

</div>
  )
}

export default Card;