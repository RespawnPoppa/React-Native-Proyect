import React, { useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const handleEmailChange = (text) => {
    setEmail(text);

    if (!emailRegex.test(text)) {
      setEmailError("Correo electrónico inválido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);

    if (text.length < 3) {
      setPasswordError("La contraseña debe tener al menos 3 caracteres");
    } else {
      setPasswordError("");
    }
  };

  const handleUsernameChange = (text) => {
    setUsername(text);

    if (text.length < 3) {
      setUsernameError("El nombre de usuario debe tener al menos 3 caracteres");
    } else {
      setUsernameError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isButtonDisabled =
    emailError || email.length === 0 || passwordError || password.length < 3 || usernameError || username.length < 3;

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
            <FormControl>
              <FormControl.Label>Nombre de usuario</FormControl.Label>
              <Input
                value={username}
                onChangeText={handleUsernameChange}
                borderColor={usernameError ? "red.500" : "coolGray.200"}
              />
              {usernameError && (
                <Text color="red.500">{usernameError}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormControl.Label>Correo electrónico</FormControl.Label>
              <Input
                value={email}
                onChangeText={handleEmailChange}
                borderColor={emailError ? "red.500" : "coolGray.200"}
              />
              {emailError && (
                <Text color="red.500">{emailError}</Text>
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
                <Text color="red.500">{passwordError}</Text>
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
