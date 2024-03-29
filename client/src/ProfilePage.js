import React, { Component, Fragment } from "react";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import LoginButtons from './components/LoginButtons';
import { Flex, Spacer } from "@chakra-ui/react"
import { connect } from "react-redux";
import PropTypes from "prop-types";

const isEmpty = require("is-empty");

class ProfilePage extends Component {
  render() {
    const username = this.props.match.params.username;
    const username2 = !isEmpty(this.props.user) ? this.props.user.username : null;

    return (
      <Fragment>
        <Flex>
          <Spacer />
          <Sidebar isProfile={true} username={username}/>
          <Feed mode={username === username2 ? "profile" : "user"} username={username} community=""/>
          <Spacer />
        </Flex>
        <LoginButtons />
      </Fragment>
    );
  }
}

ProfilePage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(ProfilePage);