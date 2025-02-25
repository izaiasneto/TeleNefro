import React, { useRef, useCallback} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../Utils/getValidationErros';

import Button from '../../components/button';
import Input from '../../components/input';

import { Container, Content} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const history = useHistory();

    const handleSubmit = useCallback( async (data: SignInFormData) =>{
      try {
        formRef.current?.setErrors({});
  
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória')
        });
  
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        })

        history.push('/dashboard');
  
      } catch (err) {
  
        if( err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err);
  
          formRef.current?.setErrors(errors);
        }
        
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login'
        });
      }
    }, [signIn, addToast, history]);

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>TeleNefro</h1>
                    <h2> Faça seu logon</h2>

                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                    <Button type="submit">Entrar</Button>

                    <a href="/forgot">Esqueci minha senha</a>
                </Form>
                
                
            </Content>
        </Container>
    )
};

export default SignIn;