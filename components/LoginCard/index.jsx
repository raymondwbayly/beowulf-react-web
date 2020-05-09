import Link from "next/link";
import React from 'react';
import { render } from 'react-dom';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
 

import "./LoginCard.scss";

const LoginCard = props => (
  <div className="CardContainer">
    <Card className="LoginCard">
        <CardHeader className="CardHeader">{props.appTitle} Login</CardHeader>
        <CardBody className="CardBody">Body</CardBody>
        <CardFooter className="CardFooter">Footer</CardFooter>
    </Card>
  </div>
);

export default LoginCard;