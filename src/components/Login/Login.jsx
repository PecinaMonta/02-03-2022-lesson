import styled from "styled-components"

import ContentContainer from "../ContentContainer/ContentContainer"

const StyledForm = styled.form`
    width: 24rem;
    height: 24rem;
    margin: auto;
    
`

const Heading = styled.h3`
    width: 100%;
    height: 1.5rem;
    text-align: center;
    
`

const FieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 1rem 0;
    input {
        height: 1.5rem;
        border: 1px solid #DBE2EF;
    }
`

const SubmitBtn = styled.button`
    width: 100%;
    height: 1.5rem;
    background: #112D4E;
    color: #F9F7F7;
    border: none;
    margin-top: 1rem;
`

const Login = (props) => {
    return (
        <ContentContainer>
            <StyledForm>
                <Heading>Register</Heading>
                <FieldContainer>
                    <label htmlFor="username"></label>
                    <input type="text" name="username" placeholder="Username"/>
                </FieldContainer>
                <FieldContainer>
                    <label htmlFor="password"></label>
                    <input type="text" name="password" placeholder="Password"/>
                </FieldContainer>
                <SubmitBtn onClick={() => {console.log('form submitted')}}>Register</SubmitBtn>
            </StyledForm>
        </ContentContainer>
        
    )
}

export default Login