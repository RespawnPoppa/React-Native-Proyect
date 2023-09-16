import {Text, Input} from "native-base";

export default function CustomInput({text}){
    return(<>
    <Text>{text}</Text>
        <Input mx= "3" placeholder= "Escribiri aqui" w="100" /> 
    </>)
}