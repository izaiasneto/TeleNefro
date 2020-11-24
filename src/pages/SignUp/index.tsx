import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../Utils/getValidationErros';

import Button from '../../components/button';
import Input from '../../components/input';

import { Container, Content} from './styles';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback( async (data: object) =>{
      try {
        formRef.current?.setErrors({});
  
        const schema = Yup.object().shape({
          name:  Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos')
        });
  
        await schema.validate(data, {
          abortEarly: false,
        });
  
  
      } catch (err) {
  
        const errors = getValidationErrors(err);
  
        formRef.current?.setErrors(errors);
      }
    }, []);

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>TeleNefro</h1>
                    <h2> Faça seu cadastro</h2>

                    <Input name="name" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>

                    <a href="login">
                        <FiArrowLeft />
                        Voltar para logon
                    </a>
                </Form>
            </Content>
        </Container>
    )
};

export default SignIn;