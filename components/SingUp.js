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
    IconButton,
    Icon,
  } from "native-base";
  import React, { useState } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  
  export default function SingUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const handleEmailChange = (text) => {
      setEmail(text);
      setEmailError(text.length < 15); // Verifica la longitud del correo electrónico
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
      setPasswordError(text.length < 3); // Verifica la longitud de la contraseña
    };
  
    const handleUsernameChange = (text) => {
      setUsername(text);
      setUsernameError(text.length < 3); // Verifica la longitud del nombre de usuario
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const isButtonDisabled =
      email.length < 15 || password.length < 3 || username.length < 3;
  
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
              Registrarse
            </Heading>
  
            <VStack space={3} mt="5">
              <FormControl.Label>Nombre de usuario</FormControl.Label>
              <Input
                value={username}
                onChangeText={handleUsernameChange}
                borderColor={usernameError ? "red.500" : "coolGray.200"}
              />
              {usernameError && (
                <Text color="red.500">Requiere más de 3 caracteres</Text>
              )}
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
              <FormControl>
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChangeText={handlePasswordChange}
                  borderColor={passwordError ? "red.500" : "coolGray.200"}
                  InputRightElement={
                    <IconButton
                      icon={
                        <Icon
                          as={MaterialIcons}
                          name={showPassword ? "visibility" : "visibility-off"}
                          color={showPassword ? "#38bdf8" : "gray.500"}
                          size={6}
                        />
                      }
                      onPress={togglePasswordVisibility}
                      variant="unstyled"
                    />
                  }
                />
                {passwordError && (
                  <Text color="red.500">Requiere más de 3 caracteres</Text>
                )}
              </FormControl>
              <Button
                mt="2"
                bg="#0284c7"
                color="white"
                isDisabled={isButtonDisabled}
              >
                <Text>Registrarse</Text>
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{ color: "warmGray.200" }}
                >
                  ¿Ya tienes una cuenta?{" "}
                </Text>
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
  