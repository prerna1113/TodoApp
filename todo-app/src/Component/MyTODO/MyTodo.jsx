
import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function MyTodo() {
    const [state,setState] = useState("")
    console.log(state);
    return (
        <div>
            <form>
                <Box  
                style={{display:"flex",
                margin:"auto",
                textAlign:"center",
                marginLeft:"30%",
               marginTop:"50px"
            }}
                >

                <Input
                    style={{
                        width: "40%",
                        //  margin: "auto"
                    }}

                    type="text"
                    name="text"
                    placeholder="Write Something"
                    onChange={(event)=>{setState({
                        ...state,
                        name: event.target.value

                    })}}
                />
                <br></br>

                <Button
                // style={{margin: "auto"}}
                >
                    submit

                </Button>

                </Box>
               

            </form>
        </div>
    )
}

export default MyTodo