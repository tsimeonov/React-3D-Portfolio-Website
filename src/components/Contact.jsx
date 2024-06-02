import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;

const Left = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;

const Title = styled.h1`
  height: 100vh;
  scroll-snap-align: center;
`;

const Form = styled.form`
  height: 100vh;
  scroll-snap-align: center;
`;

const Input = styled.input`
  height: 100vh;
  scroll-snap-align: center;
`;

const TextArea = styled.textarea`
  height: 100vh;
  scroll-snap-align: center;
`;

const Button = styled.button`
  height: 100vh;
  scroll-snap-align: center;
`;

const Right = styled.section`
  height: 100vh;
  scroll-snap-align: center;
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
