import React, { useState } from 'react'
import { Box, Container, Heading } from 'theme-ui';
import { motion } from "framer-motion";

const StepThree = ({page, setPage, formData, setFormData, x, setX}) => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <motion.div                            //updated the div tag
    initial={{ x: x }}
    transition={{ duration: 1 }}
    animate={{ x: 0 }}
  >
    <Box className="card">
      <Container className="step-title">Location Info</Container>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) =>
          setFormData({ ...formData, address: e.target.value }) 
        }
      />
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value }) 
        }
      />
      <input
        type="text"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={(e) =>
          setFormData({ ...formData, zipcode: e.target.value }) 
        }
      />

      <button onClick={()=>{
        setPage(page+1);
        setX(35);}}>
        Next
      </button>
      <br />
      <button onClick={()=>{
        setPage(page-1);
        setX(-35);}}>
        Previous
      </button>
    </Box>
    </motion.div>
  );
}

export default StepThree;