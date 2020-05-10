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
          <CardHeader className="CardHeader">Register on Beowulf</CardHeader>
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
                    onClick={(event) => this.registerUser(event)}
                  />
                  <RaisedButton
                    label="Cancel"
                    primary={false}
                    styleName="CancelButton"
                    onClick={(event) => this.cancelEvent(event)}
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

  registerUser(event) {
    var apiBaseUrl = "http://localhost:4000/api/";
    console.log(
      "values",
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password
    );
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(apiBaseUrl + "/register", payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          //  console.log("registration successfull");
          var loginscreen = [];
          // loginscreen.push(<LoginCard parentContext={this} />);
          var loginmessage = "Not Registered yet.Go to registration";
          self.props.parentContext.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
            buttonLabel: "Register",
            isLogin: true,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  cancelEvent(event) {
    window.location.href = "/";
  }
}

export default RegisterCard;
