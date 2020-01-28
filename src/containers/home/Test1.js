import React, { Component } from 'react'
import { Checkbox, Button } from '@material-ui/core'
import home from './home.css'

class Test1 extends Component {

    constructor(props) {

        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPass: '',
            month: null,
            date: null,
            year: null,
            phone: '',
            zip: null,
            firstNameErr: false,
            lastNameErr: false,
            emailErr: false,
            passwordErr: false,
            confirmPassErr: false,
            monthErr: false,
            dateErr: false,
            yearErr: false,
            phoneErr: false,
            zipErr: false,
            submitted: false
        }
    }

    onTextChange = (event) => {
        let regex = (event.target.id === 'firstName' || event.target.id === 'lastName') ? /^[A-Za-z]+$/ : event.target.id === 'email' ? /\S+@\S+\.\S+/ : /^[A-Za-z]+$/
        const hasError = regex.test(event.target.value)
        this.setState({ [`${event.target.id}Err`]: !hasError, [`${event.target.id}`]: event.target.value })
    }

    onSubmit = (submitted) => {
        this.setState({ submitted: !submitted })
    }

    render() {

        const {
            firstName,
            lastName,
            email,
            password,
            confirmPass,
            month,
            date,
            year,
            phone,
            zip,
            firstNameErr,
            lastNameErr,
            emailErr,
            passwordErr,
            confirmPassErr,
            monthErr,
            dateErr,
            yearErr,
            phoneErr,
            zipErr,
            submitted
        } = this.state

        const firstNameErrMsg = firstNameErr ? 'invalid firstname' : null
        const lastNameErrMsg = lastNameErr ? 'invalid lastname' : null
        const emailErrMsg = emailErr ? 'Invalid Email' : null
        const passwordErrMsg = (password && confirmPass) ? ( password !== confirmPass ? 'Passwords do not match' : null ) : null
        const monthErrMsg = !month ? 'Please select month' : null
        const dateErrMsg = !date ? 'Please select date' : null
        const yearErrMsg = !yearErr ? 'Please select year' : null
        const phoneErrMsg = phoneErr ? 'Invalid Phone number' : null
        const zipErrMsg = zipErr ? 'Invalid zipcode' : null

        const errMsgArray = [
            firstNameErrMsg, 
            lastNameErrMsg, 
            emailErrMsg, 
            passwordErrMsg, 
            monthErrMsg,
            dateErrMsg,
            yearErrMsg,
            phoneErrMsg,
            zipErrMsg 
        ]



        return (
            <div className='mainDiv1' >
                <div className='mainDiv2'>
                    <span style={{ margin: 'auto' }}>
                        <img src={require('./logo-mobile@2x.png')}></img>
                    </span>
                </div>
                <div className='registerHeader'>
                    REGISTER
                </div>
                <div className='enterInfoGrid'>
                    <div className='enterInfoLabel'>
                        <span>Enter your information below for exclusive offers, promotions and savings.</span>
                    </div>
                    <div className='fieldsDiv'>
                        <span>* Fields Required</span>
                        <form style={{ marginTop: '12px', marginBottom: '12px' }}>
                            <label for="fname" style={{ color: firstNameErr && submitted && 'red' }}>First Name *</label>
                            <input type="text" className='textInput' value={this.state.firstName} error={firstNameErr} onChange={(event) => this.onTextChange(event)} id="firstName" name="firstName" style={{color: firstNameErr && submitted && 'red'}}></input>
                            <label for="lname" style={{ color: lastNameErr && submitted && 'red' }}>Last Name</label>
                            <input type="text" className='textInput' value={lastName} id="lastName" onChange={(event) => this.onTextChange(event)} name="lastName" style={{ color: lastNameErr && submitted && 'red'}}></input>
                            <label for="email" style={{ color: emailErr && submitted && 'red' }}>Email Address *</label>
                            <input type="text" className='textInput' value={email} id="email" onChange={(event) => this.onTextChange(event)} name="emailaddress" style={{ color: emailErr && submitted && 'red'}}></input>
                            <label for="pass">Choose Password *</label>
                            <input type="password" className='textInput' value={password} id="password" onChange={(event) => this.onTextChange(event)} name="choosePass"></input>
                            <label for="confirmPass">Confirm Password *</label>
                            <input type="password" className='textInput' value={confirmPass} id="confirmPass" onChange={(event) => this.onTextChange(event)} name="confirmPassword" ></input>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 25px' }}>
                                <label for="confirmPass">Birthdate *</label>
                                <img src={require('./ico-help-mobile@2x.png')}></img>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '5px' }}>
                                <select id="month" name="month" style={{
                                    width: '100%',
                                    paddingTop: '12px',
                                    paddingBottom: '12px',
                                    margin: '8px 0',
                                    display: 'inline - block',
                                    border: '1px solid transparent',
                                    borderRadius: '4px',
                                    boxSizing: 'border-box',
                                    color: '#CAC7C7',
                                    fontSize: '14px',
                                    fontFamily: 'arial',
                                }}
                                >
                                    <option value="" disabled selected hidden>Month</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select id="Day" name="Day" style={{
                                    width: '100%',
                                    paddingTop: '12px',
                                    paddingBottom: '12px',
                                    margin: '8px 0',
                                    display: 'inline - block',
                                    border: '1px solid transparent',
                                    borderRadius: '4px',
                                    boxSizing: 'border-box',
                                    color: '#CAC7C7',
                                    fontSize: '14px',
                                    fontFamily: 'arial',
                                }}>
                                    <option value="" disabled selected hidden>Day</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select id="Year" name="Year" style={{
                                    width: '100%',
                                    paddingTop: '12px',
                                    paddingBottom: '12px',
                                    margin: '8px 0',
                                    display: 'inline - block',
                                    border: '1px solid transparent',
                                    borderRadius: '4px',
                                    boxSizing: 'border-box',
                                    color: '#CAC7C7',
                                    fontSize: '14px',
                                    fontFamily: 'arial',
                                }}>
                                    <option value="" disabled selected hidden>Year</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>

                            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridGap: '5px' }}>
                                <label for="confirmPass">Phone Number</label>
                                <label for="loremIpsum"
                                    style={{
                                        color: '#206FCC',
                                        fontSize: '12px',
                                        fontFamily: 'arial',
                                        lineHeight: '14px',
                                    }}
                                >
                                    lorem ipsum dolor
                        </label>
                            </div>
                            <input type="text" id="Phone" name="phoneNumber" style={{
                                width: '100%',
                                padding: '12px 20px',
                                paddingLeft: '2px',
                                margin: '8px 0',
                                display: 'inline - block',
                                border: '1px solid transparent',
                                borderRadius: '4px',
                                boxSizing: 'border-box',
                            }} placeholder=' (XXX) XXX-XXXX'
                            ></input>

                            <label for="country">Country *</label>
                            <div style={{ display: 'grid', gridTemplateColumns: '21px 64px 21px 64px', paddingTop: '12px' }}>
                                <input type="radio" id="USA" name="USA" style={{
                                    //width: '100%',
                                    padding: '12px 20px',
                                    paddingLeft: '2px',
                                    margin: '8px 0',
                                    display: 'inline - block',
                                    border: '1px solid transparent',
                                    borderRadius: '4px',
                                    boxSizing: 'border-box',
                                }}
                                ></input>
                                <img src={require('./ic-usa-mobile@2x.jpg')}></img>
                                <input type="radio" id="canada" name="canada" style={{
                                    //width: '100%',
                                    padding: '12px 20px',
                                    paddingLeft: '2px',
                                    margin: '8px 0',
                                    display: 'inline - block',
                                    border: '1px solid transparent',
                                    borderRadius: '4px',
                                    boxSizing: 'border-box',
                                }}
                                ></input>
                                <img src={require('./ic-canada-mobile@2x.jpg')}></img>
                            </div>
                            <label for="confirmPass">Zip/Postal Code *</label>
                            <input type="text" id="zip" name="zipCode" style={{
                                width: '100%',
                                padding: '12px 20px',
                                paddingLeft: '2px',
                                margin: '8px 0',
                                display: 'inline - block',
                                border: '1px solid transparent',
                                borderRadius: '4px',
                                boxSizing: 'border-box',
                            }}
                            ></input>
                        </form>
                    </div>
                    <div className='footerBarDiv'>
                        <div className='footerBarGrid'>
                            <Checkbox style={{ bottom: '10px' }} />
                            <label for="confirmPass" className='checkboxLabels'>Yes, I accept the <u>Terms & Conditions </u>and <u>Privacy Policy.</u></label>
                        </div>
                        <div className='footerBarGrid'>
                            <Checkbox style={{ bottom: '10px' }} />
                            <label for="confirmPass"  className='checkboxLabels'> Yes, I'd like to receive news and special offers</label>
                        </div>
                        <Button onClick={() => this.onSubmit(submitted)} style={{ background: '#1C86EE', color: 'white', margin: 'auto', top: '7px', width: '350px', paddingTop: '13px', paddingBottom: '13px' }}>
                            <label for="confirmPass" style={{
                                color: '#FFFFF',
                                opacity: '100%',
                                fontSize: '14px',
                                fontFamily: 'arial',
                                lineHeight: '16px',
                                letterSpacing: '0.5px'
                            }}>REGISTER</label>
                        </Button>
                    </div>
                </div>
                <div>
                {
                    ((firstNameErrMsg || lastNameErrMsg || emailErrMsg || passwordErrMsg || monthErrMsg || dateErrMsg || yearErrMsg || phoneErrMsg || zipErrMsg) && submitted) ? (
                        <div style={{ color: 'red', textAlign: 'center' }}>
                            The following errors have occured :
                            <div>
                                {
                                    errMsgArray.map((errMsg) => {
                                        if(errMsg){
                                            return(<div>
                                                {errMsg}
                                            </div>)
                                        }
                                    })
                                }
                            </div>
                        </div>
                    )  : null
                }
                </div>
            </div >
        )
    }


}

export default Test1