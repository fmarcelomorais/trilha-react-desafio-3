import React from 'react'
import { Header } from '../../components/Header'
import { Title, Container, Column, Row, Wrapper, TitleLogin, SubtitleLogin, EsqueciText, CriarText } from './styles'
import { Input } from '../../components/Header/styles'
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button'
import { useForm } from "react-hook-form";

const Register = () => {

    //const handleSubmit = () => {}
    const onSubmit = () => {}
    
   // const navigate = React.useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });


  return ( <>
      <Header/>
      <Container>
        <Column>           
            <Title>
                A Plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>       
        </Column>
        <Column>   
            <Wrapper> 
                <div>
                <Title>Comece agora grátis</Title>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" name="nome" control={control}/>
                    <Input placeholder="E-mail" leftIcon={<MdEmail/>} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <p>
                        Ao clicar em criar minha conta gratis; declaro que aceito as politicas de Privacidade e os termos de uso da DIO.                    
                    </p>
                    <CriarText>
                     <p>
                        Já tenho conta. Fazer Login
                        </p>   
                    </CriarText>
                </Row>                
                    </div>           
            </Wrapper>    
        </Column>
      </Container>
    </>
  )
}

export default Register
