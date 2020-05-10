import React, { Component } from 'react';
import Link from "next/link";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

import "./FPCard.scss";
class FPCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  render() {
    return (
      <div className="CardContainer">
        <Card className="LoginCard">
          <CardHeader className="CardHeader">Forgot Password</CardHeader>
          <CardBody className="CardBody">
            <div>
              <MuiThemeProvider>
                <div>
                  <br />
                  <TextField
                    type="text"
                    hintText="Enter your Email"
                    floatingLabelText="email"
                    onChange={(event, newValue) =>
                      this.setState({ email: newValue })
                    }
                  />
                  <br />
                  <RaisedButton
                    label="Send my Password"
                    primary={true}
                    styleName="LoginButton"
                    onClick={(event) => this.handleClick(event)}
                  />
                </div>
              </MuiThemeProvider>
            </div>
          </CardBody>
          <CardFooter className="CardFooter">
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default FPCard;
