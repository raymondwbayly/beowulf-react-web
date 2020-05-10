import React, { Component } from "react";
import Link from "next/link";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
class RegisterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="CardContainer">
        <Card className="LoginCard">
          <CardHeader className="CardHeader">Register</CardHeader>
          <CardBody className="CardBody">
            <div>
              <MuiThemeProvider>
                <div>
                  <TextField
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    onChange={(event, newValue) =>
                      this.setState({ first_name: newValue })
                    }
                  />
                  <br />
                  <TextField
                    hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange={(event, newValue) =>
                      this.setState({ last_name: newValue })
                    }
                  />
                  <br />
                  <TextField
                    hintText="Enter your Email"
                    type="email"
                    floatingLabelText="Email"
                    onChange={(event, newValue) =>
                      this.setState({ email: newValue })
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
                    styleName="RegisterButton"
                    onClick={(event) => this.handleClick(event)}
                  />
                   <RaisedButton
                    label="Cancel"
                    primary={false}
                    styleName="CancelButton"
                    onClick={(event) => this.handleClick(event)}
                  />
                </div>
              </MuiThemeProvider>
            </div>
          </CardBody>
          <CardFooter className="CardFooter"></CardFooter>
        </Card>
      </div>
    );
  }
}

export default RegisterCard;
