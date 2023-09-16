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
  
  export default function ForgotPassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentPasswordError, setCurrentPasswordError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const handleCurrentPasswordChange = (text) => {
      setCurrentPassword(text);
      setCurrentPasswordError(text.length < 3); // Cambia 3 por la longitud mínima requerida
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
      setPasswordError(text.length < 3);
    };
  
    const handleConfirmPasswordChange = (text) => {
      setConfirmPassword(text);
      setConfirmPasswordError(text.length < 3 || text !== password);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const isButtonDisabled =
      currentPassword.length < 3 ||
      password.length < 3 ||
      confirmPassword.length < 3 ||
      password !== confirmPassword;
  
    return (
      <>
        <Center w="100%">
          <Box safeArea p="4" py="40" w="90%" maxW="290">
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
              mt="3"
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Resetear contraseña
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Contraseña actual</FormControl.Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={currentPassword}
                  onChangeText={handleCurrentPasswordChange}
                  borderColor={currentPasswordError ? "red.500" : "coolGray.200"}
                  _focus={{
                    borderColor: currentPasswordError ? "red.500" : "#0284c7",
                  }}
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
                {currentPasswordError && (
                  <Text color="red.500">Requiere más de 3 caracteres</Text>
                )}
              </FormControl>
              <FormControl>
                <FormControl.Label>Nueva contraseña</FormControl.Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChangeText={handlePasswordChange}
                  borderColor={passwordError ? "red.500" : "coolGray.200"}
                  _focus={{
                    borderColor: passwordError ? "red.500" : "#0284c7",
                  }}
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
              <FormControl>
                <FormControl.Label>Confirmar contraseña</FormControl.Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChangeText={handleConfirmPasswordChange}
                  borderColor={confirmPasswordError ? "red.500" : "coolGray.200"}
                  _focus={{
                    borderColor: confirmPasswordError ? "red.500" : "#0284c7",
                  }}
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
                {confirmPasswordError && (
                  <Text color="red.500">
                    Las contraseñas no coinciden o requieren más de 3 caracteres
                  </Text>
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
  