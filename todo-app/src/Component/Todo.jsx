
import { Box, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './CSS/Todo.module.css'

function Todo() {
const [state,setState] = useState('')
console.log(state);
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
                className={styles.subHeading}
                // as= 'h9' size = 'xs'
                >
                    by Prerna Dubey

                </p>
                

                </Box>

               
                <Box>
                <Input
                    style={{
                        backgroundColor: "white",
                        borderRadius:"14px",
                        height:"55px",
                        fontSize:"28px",
                        marginTop:"15px"
                    }}
                   
                   
                   placeholder="write something"
                    onChange={(event)=>{setState({
                        ...state,
                        name:event.target.value
                    })}}
                    />
                </Box>

               




            </Box>

        </Box>



    )
}

export default Todo