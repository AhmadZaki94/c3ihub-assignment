import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box backgroundColor='teal.500' display='flex' justifyContent='space-evenly' w='100%' h='50px'>
        <Link to='/' >
            <Heading as='h4' size='lg'>Courses</Heading>
        </Link>
        <Link to='/login'>
            <Heading as='h4' size='lg'>LogIn</Heading>
        </Link>
        <Link to='/signup'>
            <Heading as='h4' size='lg'>SignUp</Heading> 
        </Link>
        
    </Box>
  )
}
