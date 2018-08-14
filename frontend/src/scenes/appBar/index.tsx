import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { loginFacebook, logOut} from '../../redux/auth/actions';
import './index.css'

interface ResumeReferenceProps {
  loginFacebook: (accessToken: string) => Promise<void>,
  logOut: () => void,
  auth: {
    isAuthenticated: boolean
    username: string
  }
}

class TopBar extends React.Component<ResumeReferenceProps> {
  
  public componentClicked() {
    return null;
  }

  public responseFacebook = (userInfo: ReactFacebookLoginInfo & { accessToken: string }) => {
    if (userInfo.accessToken) {
      this.props.loginFacebook(userInfo.accessToken);
    }
    return null;
  }

  public logoutFacebook = () => {
    this.props.logOut();
    return null;
  }

  public render() {
    const style = {
      appBar: {
        backgroundImage: 'linear-gradient(to right, #2b5876 0%, #4e4376 100%)'
      }
    }
    console.log(this.props)
    return (
      <AppBar style={style.appBar} position="static">
        <Toolbar>
          <IconButton aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className="app-bar-flex">
            <div>Resuman</div>
            {!this.props.auth.isAuthenticated ? 
              <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                cssClass="facebook-login-button"
                icon="fa-facebook-square"
              /> : 
              <div className="facebook-login-button-logged">
                <Icon className="fa fa-facebook-square fa-1 facebook-logged-icon"/>
                <div style={{width: '100%'}}>{this.props.auth.username}</div>
                <Icon className="fa fa-sign-out fa-1 facebook-logout" onClick={this.logoutFacebook}/>
              </div>}
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state: ResumeReferenceProps) => {
  console.log(state)
  return {
    ...state
  }
}

export const ApplicationBar = connect(mapStateToProps, (dispatch: any) => ({
  loginFacebook: (accessToken: string) => dispatch(loginFacebook(accessToken)),
  logOut: () => dispatch(logOut())
}))(TopBar);