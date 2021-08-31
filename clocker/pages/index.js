
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

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
      </Box>


      <Box>
        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
      </Box>
      
      <Box display="flex" flexDirection="row" alignItems="center">
        <Text>clocker.work/</Text>
        <FormControl id="username" p={4} isRequired>
          <Input type="username" />
          </FormControl>
        </Box>
      

      <Box p={4} >
        <Button width="100%">Entrar</Button>
      </Box>





    </Container>

  )
}
// consegui uma solução mais sujou o codigo verificar depois //
// Box username torto, verificar na documentação do chakra //
