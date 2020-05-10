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
                    onClick={(event) => this.loginUser(event)}
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

  loginUser(event){
    var apiBaseUrl = "http://localhost:3100/api/";
    var self = this;
    var payload={
    "email":this.state.username,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    var uploadScreen=[];
    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.data.code == 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
}

export default LoginCard;
