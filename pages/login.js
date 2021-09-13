import {Button } from "@material-ui/core"
import Head from "next/head";
import styled from "styled-components"
import { auth, provider } from "../firebase";
import Image from "next/image"

function Login() {
const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
}; 


    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Navigation>
                    <Navbox>
                         <a href="/" >Web Version</a>
                    </Navbox>
                    <Navbox>
                         <a href="/" >Features</a>
                    </Navbox>
                    <Navbox>
                         <a href="/" >Security</a>
                    </Navbox>
                    <Navbox>
                         <a href="/" >Help</a>
                    </Navbox>
                </Navigation>
                    
                <Content>
                    <Logo src="data:image/png;base64,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"/>
                    <HeaderContent>
                        Simple.Secure. <br/>
                        Reliable Messaging App <br/>
                        (Mobile Version Coming soon)
                    </HeaderContent>
                    <HeaderDesc>
                    This is a free messaging app developed by 
                    <a href="/"> Ebiwari Meshach </a> <br/>
                    as a contribution to the tech community. Login and Enjoy
                    </HeaderDesc>
                    
                <Button onClick={signIn} 
                style={{
                        backgroundColor:"#1F3832",
                        color:'whitesmoke',
                        marginTop:'3rem'
                }} variant="outline">Sign in with Google</Button>
                </Content>
                <SubContainer>
                    <ImgCon>
                    <Image src="/phone.png" alt="" width={250} height={500}/>
                    </ImgCon>
                </SubContainer>
                
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:whitesmoke;
`
const LoginContainer = styled.div`
 overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  background: #F6F6EE;
`
const Logo = styled.img`
height: 60px;
width: 60px;
margin-bottom:-1rem;

`
const SubContainer = styled.div`
overflow: hidden;
  position: absolute;
  left: 60%;
  top: 0;
  width: 40%;
  height: 100%;
  padding-left:0;
  background: linear-gradient(#1F3832,#1E2322);
  transition: transform 1.2s ease-in-out;
`;
const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  outline: none;
  border:none;
  position: absolute;
  justify-content: space-between;
  text-transform: uppercase;
  
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  > a {
      font-size:15px;
    text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 4.5vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #1F3832;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color:#1F3832 ;
    ::after {
      width: 100%;
    }
  }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    
  }
`
const ImgCon = styled.div`
padding: 8rem 0 0 10rem;
`;
const Content = styled.div`
padding: 12rem 0 0 9rem;
`;

const HeaderContent = styled.h1`
font-weight: normal;
font-size:50px;


`;
const HeaderDesc = styled.p`
> a {
    font-weight: bold;
    transition: all 200ms ease-in;
    ::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #1F3832;
    ::after {
      width: 100%;
    }
}
}
`;