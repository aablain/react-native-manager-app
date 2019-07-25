/*
  * Component Description
*/
import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { emailChanged, loginUser, passwordChanged } from "../actions/";

import { Card, CardSection, Input, Button, Spinner } from "./common/";

class LoginForm extends React.Component {
displayName: "LoginForm"

constructor(props) {
super(props);

this.onEmailChange = this.onEmailChange.bind(this);
this.onButtonPress = this.onButtonPress.bind(this);
this.onPasswordChange = this.onPasswordChange.bind(this);
this.renderError = this.renderError.bind(this);
}

render() {
    const { email, loading, password } = this.props;
    
  return (
      <View style={{
          flexGrow: 1,
          justifyContent: "center"
      }}>
        <Card>
            <CardSection>
                <Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange} value={email} />
            </CardSection>

            <CardSection>
                <Input label="Password" onChangeText={this.onPasswordChange} placeholder="password" isPassword={true} value={password} />
            </CardSection>

            {this.renderError()}

            <CardSection>
                {loading ? (
                    <Spinner size="large" />
                ) : (
                    <Button onPress={this.onButtonPress}>Login</Button>
                )}
            </CardSection>
        </Card>
      </View>
  );
}

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onButtonPress() {
        const { email, loginUser, password } = this.props;
        loginUser({ email, password });
    }
    
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={styles.errorContainerStyle}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
}

const styles = {
    errorContainerStyle: {
        backgroundColor: "#fff"
    },
    errorTextStyle: {
        paddingLeft: 6,
        paddingRight: 6,
        alignSelf: "center",
        color: "red"
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        email: auth.email,
        error: auth.error,
        loading: auth.loading,
        password: auth.password
    }
}

export default connect(mapStateToProps, { emailChanged, loginUser, passwordChanged })(LoginForm)