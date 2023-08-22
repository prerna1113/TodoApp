import { Box, Button, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from './CSS/Todo.module.css'


function TodoApp() {
  const [tasks, setTasks] = useState([]); 
  const [flag, setStatus] = useState('true');

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, showDiv: false }]); // Add new task to the tasks array
  };

  const toggleDiv = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].showDiv = !updatedTasks[index].showDiv;
    setTasks(updatedTasks);
   
}

  const resetTask =() =>{
    setTasks([]);
  }

  return (
    <div>
      
      <Box
        className={styles.box}>
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

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newTask = e.target.task.value;
              addTask(newTask);
              e.target.reset();
            }}>
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
                type="text"
                name="task"
                placeholder="Enter a new task" />


              <Box
                className={styles.btnBox} >

                <Button
                  className={styles.btn}
                  size='lg'
                  type="submit"> +</Button>
              </Box>
              </Box>
          </form>
        


          <Box  className={styles.liBox}>
            <Box>
          <ul>
            {tasks.map((task, index) => (
              <li
              className={styles.li}
                
                key={index}>
                {task.text}
                <Box 
                style={{
                  border:"1px solid red",
                  width:"20%",
                  marginLeft:"70%",
                }}
                >
                <button
                style={{
                 
                  border: "1px solid black",
                  width:"100%",
                  borderRadius:"14px"



                }}

                  onClick={() => toggleDiv(index)
                  
                  }> -</button>
                  </Box>
                {task.showDiv && 
                <div 
                style={{ textDecoration : 'line-through'}}
                 >
                  {task.text}
                 
                 </div>}
              </li>
             
            ))}
            

          </ul>


         


          </Box>
          <Button 
          onClick={resetTask}
          
      className={styles.button}
      size='lg'
      >
        Reset
      </Button>
          </Box>


        </Box>
      </Box>

    </div>
  );


}

export default TodoApp;
