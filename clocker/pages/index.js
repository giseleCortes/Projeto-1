

import { useFormik } from 'formik'

import * as yup from 'yup'

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLeftAddon,
  InputGroup
} from '@chakra-ui/react'

import { Logo } from './../components/Logo'

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento Obrigatório'),
  password: yup.string().required('Preenchimento Obrigatório'),
  username: yup.string().required('Preenchimento Obrigatório'),
  // o correto seria buscar no banco de dados se o nome do usuário ja existe verificar depois // 

})

export default function Home() {
  const { 
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting } = useFormik({ onSubmit: ( value, form) => { 
      console.log(values)
    }, validationSchema,
      initialValues: {
        email: '',
        usermane: '',
        password: '',

      }
    })
  return ( // quando adiciono <Logo /> na div a baixo o codigo entra em colapso // 

    //padding no chakra é por escala por isso  p={4} verificar na documentação//
    // alias verificar tudo na verificação do chakra sobre a pagina de singup //

    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input size="lg" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
        </FormControl>
      </Box>


      <Box>
        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input size="lg" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
        </FormControl>
      </Box>





      <FormControl id="username" p={4} isRequired>
        <InputGroup size="lg">
          <InputLeftAddon children="clocker.work/" />
          <Input type="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
        </InputGroup>
        {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
      </FormControl>



      <Box p={4} >
        <Button colorScheme="blue" width="100%"  onClick={handleSubmit}isLoading={isSubmitting}>Entrar</Button>
      </Box>





    </Container>

  )
}
// consegui uma solução mais sujou o codigo verificar depois //
// Box username torto, verificar na documentação do chakra //
