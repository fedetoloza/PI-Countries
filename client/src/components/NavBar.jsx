import React from "react";
import { LinkTo } from "../styles/Link";
import { Nav, Container, Title } from "../styles/Nav";
import { Button } from "../styles/Button";
import { BackBtn } from "../styles/CardDetail";

export default function NavBar() {
  return (
    <Container>
      <Title>
        <h1>Countries App</h1>
      </Title>
      <Nav>
        <LinkTo to="/">
          <BackBtn />
        </LinkTo>
        <br />
        <LinkTo to="/create">
          <Button title="Crear Actividad" secondary>
            <span>Create Activity</span>
          </Button>
        </LinkTo>  
      </Nav>
    </Container>
  );
}


