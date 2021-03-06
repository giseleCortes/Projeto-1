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
  InputGroup }

from '@chakra-ui/react'

import { Logo } from './../components/Logo'
//import firebase from './../config/firebase'


// quando eu importo o firebase da erro 

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento obrigatório'),
  password: yup.string().required('Preenchimento obrigatório'),
  username: yup.string().required('Preenchimento obrigatório'),
})

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting }
    = useFormik({
      onSubmit: async (values, form) => {
        try{const user = await firebase.auth().creatUserWithInEmailAndPassword(values.email, values.password)
        }catch (error) {
          console.log('ERROR:', error)
        }
       
      },
      validationSchema,
      initialValues: {
        email: '',
        username: '',
        password: '',
      }
    })

  return (
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

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input size="lg" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
        </FormControl>
      </Box>

      <FormControl id="username" p={4} isRequired>
        <InputGroup size="lg">
          <InputLeftAddon children='clocker.work/' />
          <Input type="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
        </InputGroup>
        {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
      </FormControl>

      <Box p={4} >
        <Button colorScheme="blue" width="100%" onClick={handleSubmit} isLoading={isSubmitting}>Entrar</Button>
      </Box>





    </Container>

  )
}




// Box username torto, verificar na documentação do chakra 

// quando adiciono <Logo /> na div a baixo o codigo entra em colapso 
//consegui uma solução mais sujou o codigo verificar depois //


//padding no chakra é por escala por isso  p={4} verificar na documentação
// alias verificar tudo na verificação do chakra sobre a pagina de singup 