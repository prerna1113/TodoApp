
import { Box, Button, ButtonGroup, Heading, IconButton, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './CSS/Todo.module.css'
import { AddIcon } from '@chakra-ui/icons'


function Todo() {
    const [tasks, setTasks] = useState(['']);
    const [newTask, setNewTask] = useState("");
    const [divElements, setDivElements] = useState([]);

  

    const handleInputChange =(event) =>{
        setNewTask(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault()
       
    }

    

      const addDiv = () => {  
        const addTask = (newTask) => {
            setTasks([...tasks, { text: newTask, showDiv: false }]); // Add new task to the tasks array
          };
       

        const newDiv = <Input 
        className={styles.hiddenDiv}
        key={divElements.length} 
    />;
        setDivElements([...divElements, newDiv]); 
      };

    return (
        <Box className={styles.box}>
           
            <Box className={styles.input}>
           

                <Box
                    className={styles.container}
                >
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
                style={{display:"flex"}}
                >
                    <Input
                        style={{
                            backgroundColor: "white",
                            borderRadius: "14px",
                            height: "55px",
                            fontSize: "28px",
                            marginTop: "15px"
                        }}
                        value={newTask}
                        placeholder="write something"
                        onChange={handleInputChange}
                    />

                    <Box 
                    className={styles.btnBox}
                    >
                        <ButtonGroup 
                        onClick={addDiv}
                        className= {styles.btn}
                        size='lg' 
                        isAttached variant='outline'>
                            <IconButton 
                            aria-label='Add to friends'
                             icon={<AddIcon />} />
                        </ButtonGroup>
                    </Box>
                    
                   

                </Box>
               
                <div>
        {divElements.map((div, index) => (
          <div key={index}>{div}</div>
        ))}
      </div>


           
             
     
     
        </Box>
        
        </Box>



    )
}

export default Todo