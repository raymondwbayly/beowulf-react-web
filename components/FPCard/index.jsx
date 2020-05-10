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
                    styleName="FPButton"
                    onClick={(event) => this.sendPassword(event)}
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
          <CardFooter className="CardFooter">
          </CardFooter>
        </Card>
      </div>
    );
  }

  sendPassword(event){
    var apiBaseUrl = "http://localhost:4000/api/";
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

    cancelEvent(event){
        window.location.href="/";
      }

}

export default FPCard;
