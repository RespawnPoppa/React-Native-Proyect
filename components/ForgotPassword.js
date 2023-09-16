import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Center,
    Avatar,
  } from "native-base";
  import React, { useState } from "react";
  
  export default function ForgotPassword(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const handleEmailChange = (text) => {
      setEmail(text);
      setEmailError(text.length < 15);
    };
  
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const isButtonDisabled = email.length < 15; 
  
    return (
      <>
        <Center w="100%">
          <Box safeArea p="2" py="40" w="90%" maxW="290">
            <Avatar
              bg="cyan.500"
              alignSelf="center"
              size="100"
              source={{
                uri:
                  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              HS
            </Avatar>
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Recuperación contraseña
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Correo electrónico</FormControl.Label>
                <Input
                  value={email}
                  onChangeText={handleEmailChange}
                  borderColor={emailError ? "red.500" : "coolGray.200"}
                />
                {emailError && (
                  <Text color="red.500">Requiere más de 15 caracteres</Text> 
                )}
              </FormControl>
              
              <Button
                mt="2"
                bg="#0284c7"
                color="white"
                isDisabled={isButtonDisabled}
              >
                <Text>Enviar</Text>
              </Button>
              <HStack mt="3" justifyContent="center">
                <Link
                  _text={{
                    color: "#38bdf8",
                    fontWeight: "medium",
                    fontSize: "sm",
                  }}
                  href="#"
                >
                  Iniciar sesión
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </>
    );
  }
  