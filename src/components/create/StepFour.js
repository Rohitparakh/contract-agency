import React, { useState } from 'react'
import { Box, Container, Heading } from 'theme-ui';
import { motion } from "framer-motion";

const StepFour =  ({page, setPage, formData, setFormData, x, setX}) => {
  const [checked, setChecked] = useState('')

  return (
    <motion.div                            //updated the div tag
          initial={{ x: x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
        >
    <Box className="card">
      <Container className="step-title">Other Info</Container>
      <input
        type="text"
        placeholder="Highest Qualification"
        value={formData.highestQualification}
        onChange={(e) =>
          setFormData({ ...formData, highestQualification: e.target.value }) 
        }
      />
      <input
        type="text"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={(e) =>
          setFormData({ ...formData, occupation: e.target.value }) 
        }
      />
      <textarea
        type="text"
        placeholder="About"
        value={formData.about}
        onChange={(e) =>
          setFormData({ ...formData, about: e.target.value }) 
        }
      />
      <br />
      <button onClick={()=>{
        setPage(page+1);
      setX(35);}}> 
        Submit
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

export default StepFour;