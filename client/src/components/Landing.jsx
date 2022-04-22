import React from "react";
import { LinkTo } from "../styles/Link";
import { LandingSection, Content, Title, Reference, Btn } from "../styles/Landing";

export default function LandingPage() {
    return (
        <LandingSection>
            <Content>
                <Title>
                <h2>HENRY PI</h2>
                <h1>COUNTRIES APP</h1>
                <p>
                    En esta aplicacion se utilizaron las herramientas que nos enseñaron
                    en el BootCamp de Henry, los datos consumidos para ella se sacaron de
                    la siguiente API
                    <Reference
                    href="https://restcountries.com/"
                    target={"_blank"}
                    rel="noreferrer"
                    >
                    https://restcountries.com/
                    </Reference>
                </p>
                <p>
                herramientas utilizadas: React, Redux, Express, y Sequelize - Postgres. 
                </p>
                </Title>
                <LinkTo to="/home">
                    <Btn primary>GET STARTED</Btn>
                </LinkTo>
            </Content>
        </LandingSection>
    );
}
