import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form``;

const Input = styled.input``;

const TextArea = styled.textarea``;

const Button = styled.button``;

const Right = styled.section`
  flex: 1;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Wtite your message" />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Contact;
