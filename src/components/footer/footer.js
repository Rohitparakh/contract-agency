/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import logoLight from 'assets/logo-light.svg';
import menuItems from './footer.data';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width:'100%',
            flexDirection: ['column', null, null, null, null, 'row'],
          }}
        >
          <Logo image={logoLight} />
          <Text
            as="p"
            sx={{
              color: '#ffffff',
              opacity: '0.7',
              fontSize: '14px',
              mt: ['10px', null, null, null, null, '0'],
            }}
          >
            Copyright by Rohcodes {new Date().getFullYear()} 
          </Text>
        </Box>
        <Box sx={styles.linksWrap}>
            {menuItems.map(({ header, items}, i)=>{
              return (<div sx={styles.linkColumn} key ={i}>
              <h2>{header}</h2>
              <div sx={styles.linkContainer}>
              {items.map(({path,label})=>{
                return <Link path={path}>{label}</Link>
              })}
              </div>
              </div>)
            })}
          {/* <Link path="/">Home</Link>
          <Link path="/">Advertise</Link>
          <Link path="/">Supports</Link>
          <Link path="/">Marketing</Link>
          <Link path="/">FAQ</Link> */}
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#020718',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      opacity: '0.05',
    },
    h2:{
      color:'#aaf',
    }
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
  },
  linksWrap: {
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    justifyContent: 'center',
    textAlign:['center',null,null,null,null,'space-between'],
    width:'100%',
    gap:'20px',
    flexWrap: 'wrap',
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#fff',
      transition: 'all 500ms ease',
      '&:hover': { opacity: 0.7 },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
  },
  linkContainer:{
    a:{
      display:'block',
      ml:'0 !important',
    }
  },
  linkColumn:{
    minWidth:'300px',

    // display:'flex',
    // flexDirection: 'column'
  }
};
