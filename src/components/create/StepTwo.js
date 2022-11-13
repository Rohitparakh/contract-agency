import React, { useState } from 'react'
import {
  Box,
  Flex,
  Button,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
} from 'theme-ui'
import { motion } from "framer-motion";

const StepTwo = ({page, setPage, formData, setFormData, x, setX}) => {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  return (
    <motion.div                            //updated the div tag
    initial={{ x: x }}
    transition={{ duration: 1 }}
    animate={{ x: 0 }}
  >
     <Box as="form" onSubmit={(e) => e.preventDefault()}>
  <Label htmlFor="fullname">Name</Label>
  <Input name="fullname" id="fullname" mb={3} 
    value={formData.fullname}
    onChange={(e) =>
      setFormData({ ...formData, fullname: e.target.value }) 
   } />
  <Label htmlFor="username">Username</Label>
  <Input type="username" name="username" id="username" mb={3} 
    value={formData.username}
    onChange={(e) =>
      setFormData({ ...formData, username: e.target.value }) 
   }/>
  <Label htmlFor="password">Password</Label>
  <Input type="password" name="password" id="password" mb={3} 
    value={formData.password}
    onChange={(e) =>
      setFormData({ ...formData, password: e.target.value }) 
    }/>
  <Label htmlFor="email">Email</Label>
  <Input type="email" name="email" id="email" mb={3}
    value={formData.email}
    onChange={(e) =>
      setFormData({ ...formData, email: e.target.value }) 
   } />
   <Flex >
  <Button variant="secondary" onClick={()=>{
    setPage(page-1);
    setX(-35);
  }}>Previous</Button>
  <Button onClick={()=>{
    setPage(page+1);
    setX(-35);
  }}>Next</Button>
  </Flex>
</Box>
    {/* <Box className="card">
      <Container className="step-title">Personal Info</Container>
      <input
        type="text"
        placeholder="Nickname"
        value={formData.nickname}
        onChange={(e) =>
          setFormData({ ...formData, nickname: e.target.value }) 
        }
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value }) 
        }
      />
      <button onClick={()=>{
        setPage(page+1);
        setX(35);}}>
        Next
      </button>
      <br/>
      <button onClick={()=>{
        setPage(page-1);
        setX(-35);}}>
        Previous
      </button>
    </Box> */}
    </motion.div>

  );
}

export default StepTwo;