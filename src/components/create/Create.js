import React, {useState} from 'react';
import { Box, Container, Image, Heading } from 'theme-ui';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import Conclusion from './Conclusion';

const Create = () => {
    const [page, setPage] = useState(0);    
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
        email: "",
        address: "",
        nationality: "",
        zipcode: "",
        highestQualification: "", 
        occupation: "",
        about: "",
      });
    const [x, setX] = useState(0);
    
    const componentList=[
        <StepOne   page={page} setPage={setPage} formData={formData} setFormData={setFormData} x={x} setX={setX}/>,
        <StepTwo   page={page} setPage={setPage} formData={formData} setFormData={setFormData} x={x} setX={setX}/>,
        <StepThree page={page} setPage={setPage} formData={formData} setFormData={setFormData} x={x} setX={setX}/>,
        <StepFour  page={page} setPage={setPage} formData={formData} setFormData={setFormData} x={x} setX={setX}/>,
        <Conclusion formData={formData} x={x}/>,
    ]

    return( 
        <Box as="section" id="create" sx={styles.createMain}>
            <div className="progress-bar">
                <div style={{width:page===0?'25%':page===1?'50%':page===2?'75%':'100%'}}></div>
            </div>       
            <Box sx={styles.form}>{componentList[page]}</Box>
        </Box>
    );
}

export default Create;

const styles = {
    createMain: {
        pt: ['110px', '115px', '120px', '125px' , '130px'],
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        height: '100vh',
        background: '#eee',
        // background: 'radial-gradient(circle,rgba(161, 196, 253, 1) 10%,rgba(194, 233, 251, 1) 100%)',
    },  
    form:{
        background:'#fff',
        borderRadius: '5px',
        minWidth:'350px',
        width:['100%','75%','50%','45%'],
        padding:'50px',
    }
  };