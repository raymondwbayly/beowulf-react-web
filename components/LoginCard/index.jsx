import React, { Component } from 'react';
import Link from "next/link";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

import "./LoginCard.scss";
class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="CardContainer">
        <Card className="LoginCard">
          <CardHeader className="CardHeader">Login to Beowulf</CardHeader>
          <CardBody className="CardBody">
            <div>
              <MuiThemeProvider>
                <div>
                  <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange={(event, newValue) =>
                      this.setState({ username: newValue })
                    }
                  />
                  <br />
                  <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) =>
                      this.setState({ password: newValue })
                    }
                  />
                  <br />
                  <RaisedButton
                    label="Submit"
                    primary={true}
                    styleName="LoginButton"
                    onClick={(event) => this.handleClick(event)}
                  />
                </div>
              </MuiThemeProvider>
            </div>
          </CardBody>
          <CardFooter className="CardFooter">
          <Link href="/forgot">
      <a> Forgot Username/Password</a>
    </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default LoginCard;
