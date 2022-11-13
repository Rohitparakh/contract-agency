import React, { useState } from 'react'
import { motion } from "framer-motion";
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

const StepOne = ({page, setPage, formData, setFormData, x, setX}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <motion.div                            //updated the div tag
          initial={{ x: x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
        >
    {/* <div className="card">
      <div className="step-title">Sign Up</div> 
      <input
        type="text"
        placeholder="Full Name"
        className="form-group"
        value={formData.fullname}
          onChange={(e) =>
            setFormData({ ...formData, fullname: e.target.value }) 
          }
      />
      <input
        type="text"
        className="form-group"
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value }) 
        }
      />
      <input
        type="text"
        className="form-group"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value }) 
        }
      />
      <button onClick={()=>{
        setPage(page+1);
        setX(35);}}>
        Next
      </button>
    </div> */}   
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
<Button onClick={()=>{
    setPage(page+1);
    setX(35);
  }}>Next</Button>
</Box>
    </motion.div>
  );
}

export default StepOne;