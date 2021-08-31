
import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react'
import { Logo } from './../components/Logo'


export default function Home() {
  return ( // quando adiciono <Logo /> na div a baixo o codigo entra em colapso // 

    //padding no chakra é por escala por isso  p={4} verificar na documentação//
    // alias verificar tudo na verificação do chakra sobre a pagina de singup //
    //<FormHelperText>We'll never share your email.</FormHelperText> verificar sobre validação depois  //
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" />         
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Senha</FormLabel>
        <Input type="password" />         
      </FormControl>



    </Container>

  )
}
// consegui uma solução mais sujou o codigo verificar depois //