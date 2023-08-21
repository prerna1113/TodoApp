
import { Box, Button, ButtonGroup, Heading, IconButton, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './CSS/Todo.module.css'
import { AddIcon } from '@chakra-ui/icons'
function Todo() {
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const [newTask, setNewTask] = useState('')

  const handleInput = (event) => {
    setNewTask(event.target.value); // Update new task input state
  };

  const addTask = () => {
    if (newTask.trim() === '') {
      return; // Don't add empty tasks
    }

    setTasks([...tasks, { text: newTask, showDiv: false }]);
    setNewTask(''); // Clear the input field after adding task
  };

  const toggleDiv = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].showDiv = !updatedTasks[index].showDiv;
    setTasks(updatedTasks);
  };




  return (
    <Box className={styles.box}>
      <form
       
      >
     

        <Box className={styles.input}>
          <Box
            className={styles.container}>
            <Heading
              className={styles.heading}
              as='h2' size='lg'>
              TODO APP
            </Heading>

            <p
              className={styles.subHeading}>
              by Prerna Dubey

            </p>


          </Box>


          <Box
            style={{ display: "flex" }}>
             


            <Input
              style={{
                backgroundColor: "white",
                borderRadius: "14px",
                height: "55px",
                fontSize: "28px",
                marginTop: "15px"
              }}
              name="task"
              type="text"
              value ={tasks.task}
            //  onChange={handleInput}

              placeholder="write something"
            />

            <Box
              className={styles.btnBox} >
              <ButtonGroup
               onClick={(e) => {
                e.preventDefault();
  
                
                addTask();
                // e.target.reset();
              }}

                className={styles.btn}
                size='lg'
                isAttached variant='outline'>
                <IconButton
                type="submit"
                  aria-label='Add to friends'
                  icon={<AddIcon />} />
              </ButtonGroup>
            </Box>

            </Box>
            
          </Box>
          </form>
         
          



          <div>
          <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.text}
              <button
                style={{ width: "20%", border: "1px solid red" }}
                onClick={() => toggleDiv(index)}>
                div
              </button>
              {task.showDiv && <div>This is the hidden div for task {index + 1}</div>}
            </li>
          ))}
        </ul>
          </div>
        </Box>
        );
}

        export default Todo;








