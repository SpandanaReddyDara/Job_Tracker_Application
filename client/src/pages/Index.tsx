import React, { useEffect } from 'react';
import {
  chakra,
  Box,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
const Hero = require('../public/images/hero.png');
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.01],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [animation, inView]);

  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems='center'
            justifyContent='center'
            h={12}
            w={12}
            rounded='md'
            bg='linkedin.500'
            color='gray.50'
          >
            <Box fontSize='1.3rem'>{props.icon}</Box>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize='lg'
            fontWeight='medium'
            lineHeight='6'
            _light={{ color: 'gray.900' }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color='gray.500' _dark={{ color: 'gray.400' }}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <Box
      pt={{ base: '4rem', md: '7rem' }}
      px={{ base: '1rem', md: '5rem', xl: '12rem' }}
      className='main'
      pb={{ base: '5rem', md: '6rem' }}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box
        w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
        mx='auto'
        textAlign={{ base: 'left', md: 'center' }}
        maxW='7xl'
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight='bold'
          lineHeight='none'
          letterSpacing={{ base: 'normal', md: 'tight' }}
          color='gray.700'
          _dark={{ color: 'gray.100' }}
        >
          Track all your job applications
          in a single place.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 15 }}
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color='gray.600'
          _dark={{ color: 'gray.300' }}
        >
          Job Tracker is a web application that allows to you record and keep track
          of your job applications. You can categorize and seamlessly manage
          your job applications.
        </chakra.p>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: 'left', md: 'center' }}
        >
          <Button
            as='a'
            variant='solid'
            color='white'
            bg='linkedin.500'
            _hover={{ bg: 'linkedin.600' }}
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            w={{ base: 'full', sm: 'auto' }}
            mb={{ base: 2, sm: 0 }}
            size='lg'
            cursor='pointer'
            href='/login'
          >
            Get Started
            <Icon boxSize={4} ml={1} viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </Icon>
          </Button>
          <Link
            activeClass='active'
            to='howItWorks'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          </Link>
        </Stack>
      </Box>
      
    </Box>
  );
};

export default Index;
