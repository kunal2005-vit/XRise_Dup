import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, VStack, Text, Input, FormLabel, Button } from "@chakra-ui/react";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('https://xrise-dup.onrender.com/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    console.log("Login Success");
                    alert('Login successful!');
                    navigate('/base');
                } else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            height="100vh"
            bgGradient="linear(to-b, #00d5ff, #0095ff, rgba(139, 220, 114, 0.56))"
        >
            <Box
                bg="white"
                p={6}
                rounded="lg"
                width="40%"
                boxShadow="lg"
            >
                <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
                    Login
                </Text>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="stretch">
                        <Box textAlign="left">
                            <FormLabel htmlFor="email" fontWeight="bold">
                                Email Id
                            </FormLabel>
                            <Input
                                type="email"
                                placeholder="Enter Email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                isRequired
                            />
                        </Box>
                        <Box textAlign="left">
                            <FormLabel htmlFor="password" fontWeight="bold">
                                Password
                            </FormLabel>
                            <Input
                                type="password"
                                placeholder="Enter Password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                isRequired
                            />
                        </Box>
                        <Button colorScheme="blue" type="submit">
                            Login
                        </Button>
                    </VStack>
                </form>
                <Text mt={4}>Don&apos;t have an account?</Text>
                <Button as={Link} to="/register" colorScheme="gray" variant="outline" mt={2}>
                    Register
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
