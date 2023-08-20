
import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './CSS/Todo.module.css'

function Todo() {
  return (
   <Box  className={styles.box}>


    <Box className={styles.input}>
        <Input
        style={{
            height:"55px",
            borderRadius:"14px",
            backgroundColor:"white",
            fontSize:"28px"
        }}
        type="text"
        placeholder="Write Something"
         />
        

    </Box>
   
   </Box>
       

    
  )
}

export default Todo