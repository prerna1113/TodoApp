
import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './CSS/Todo.module.css'

function Todo() {
    return (
        <Box className={styles.box}>
            <Box className={styles.input}>

                <Heading as='h2' size='xl'>
                   TODO APP
                </Heading>

                <Input
                    className={styles.inputBox}
                    type="text"
                    placeholder="Write Something" />




            </Box>

        </Box>



    )
}

export default Todo