import React, { useState } from 'react'
import { Box, Container, Heading } from 'theme-ui';
import { motion } from "framer-motion";

export default ({ formData, x}) => {
  const [checked, setChecked] = useState('')

  return (
    <motion.div                            //updated the div tag
          initial={{ x: x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
        >
    <Box className="card">
      <Container className="step-title">Submitted Details</Container>
      <p>{formData.fullname}</p>
        <p>{formData.username}</p>
        <p>{formData.password}</p>
        <p>{formData.nickname}</p>
        <p>{formData.email}</p>
        <p>{formData.address}</p>
        <p>{formData.nationality}</p>
        <p>{formData.zipcode}</p>
        <p>{formData.highestQualification}</p> 
        <p>{formData.occupation}</p>
        <p>{formData.about}</p>
    </Box>
    </motion.div>
  );
}