import React, { Component } from 'react'
import login1 from './login.css'
import { Button } from '@material-ui/core'

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  login, logout
} from '../../modules/login'

class About extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: null,
      password: null
    }
  }

  handleChange = (event) => {
    this.setState({ [`${event.target.id}`]: event.target.value })
  }

  loginHandler = (userName, password) => {
    this.props.login(userName, password)
  }

  logoutHandler = () => {
    this.props.logout()
    this.setState({
      userName: null,
      password: null
    })
  }

  render() {

    const { userName, password } = this.state
    const { loggedIn, loginCredentials, imageListAdmin, imageListUser } = this.props
    const imageList = loginCredentials === 'admin' ? imageListAdmin : imageListUser

    return (
      <div>
        <header className='header' style={{ backgroundImage: 'linear-gradient(-90deg, #483D8B, #87CEEB)' }}>
          {
            !loggedIn || (loggedIn && (loginCredentials !== 'admin' && loginCredentials !== 'user')) ?
              (
                <div className='headerDiv'>
                  <div style={{ padding: '10px', margin: 'auto' }}>
                    <label for="userName">Username</label>
                    <input type="text" value={userName} id="userName" onChange={(event) => this.handleChange(event)} style={{ marginLeft: '10px' }}></input>
                  </div>
                  <div style={{ padding: '10px', margin: 'auto' }}>
                    <label for="password">Password</label>
                    <input type="password" value={password} id="password" onChange={(event) => this.handleChange(event)} style={{ marginLeft: '10px' }}></input>
                  </div>
                  <Button disabled={!userName || !password} onClick={() => this.loginHandler(userName, password)} style={{ background: '#1C86EE', color: 'white', margin: 'auto', width: '100%', maxWidth: '200px' }}>
                    <label for="confirmPass" style={{
                      color: '#FFFFF',
                      opacity: '100%',
                      fontSize: '14px',
                      fontFamily: 'arial',
                      lineHeight: '16px',
                      letterSpacing: '0.5px'
                    }}>LOGIN</label>
                  </Button>
                </div>
              ) : <div style={{ width: '300px', height: '100%', marginRight: '20px', float: 'right', display: 'grid', gridTemplateColumns: '1fr 0.8fr' }}>
                <div style={{ margin: 'auto' }}>Loggen in as {loginCredentials}</div>
                <Button onClick={this.logoutHandler} style={{ background: '#1C86EE', color: 'white', margin: 'auto', width: '100%' }}>
                  <label for="confirmPass" style={{
                    color: '#FFFFF',
                    opacity: '100%',
                    fontSize: '14px',
                    fontFamily: 'arial',
                    lineHeight: '16px',
                    letterSpacing: '0.5px'
                  }}>LOGOUT</label>
                </Button>
              </div>
          }
        </header>
        {
          loggedIn && (loginCredentials === 'admin' || loginCredentials === 'user') ? (
            <div style={{ height: '80vh' }}>
              <h1 style={{ textAlign: 'imageList' }}>Product Categories</h1>
              <div className='imageList'>
                {
                  imageList && imageList.map((image) => {
                    return (
                      <div style={{ textAlign: 'center' }}>
                        <img src={require(`../images/${image.Image}`)}></img>
                        <h5>{image.Name}</h5>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          ) : null
        }

      </div>
    )
  }
}

const mapStateToProps = ({ login }) => ({
  loginCredentials: login.loginCredentials,
  loggedIn: login.loggedIn,
  imageListAdmin: login.imageListAdmin,
  imageListUser: login.imageListUser
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
      logout,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(About)
