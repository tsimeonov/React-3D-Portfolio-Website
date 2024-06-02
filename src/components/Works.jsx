import React from "react";
import styled from "styled-components";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.section`
  flex: 1;
`;

const List = styled.ul``;

const ListItem = styled.li``;

const Right = styled.section`
  flex: 2;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            <ListItem></ListItem>
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Works;
