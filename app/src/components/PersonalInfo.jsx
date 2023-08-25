import { Component } from "react";

class PersonalInfo extends Component {

    constructor(props){
        super(props)
        this.handleName = this.handleName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleLinkedin = this.handleLinkedin.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
    }

    handleName(e){
        this.props.handleName(e.target.value);
    }

    handlePhone(e){
        this.props.handlePhone(e.target.value);
    }

    handleEmail(e){
        this.props.handleEmail(e.target.value);
    }

    handleLinkedin(e){
        this.props.handleLinkedin(e.target.value);
    }

    handleLocation(e){
        this.props.handleLocation(e.target.value);
    }

    render(){
        return(
            <div className = "infoDiv"><h3>Personal Info</h3>
                <form>
                <label>Name</label>
                <input 
                    type = "text"
                    placeholder = "John Doe"
                    value = {this.props.name}
                    onChange = {this.handleName}>
                    </input>
                <label>Email</label>
                <input 
                    type = "email"
                    placeholder = "john_doe@longmail.com"
                    value = {this.props.email}
                    onChange = {this.handleEmail}>
                </input>
                <label>Phone Number</label>
                <input
                    type = "tel"
                    placeholder = "230888444"
                    value = {this.props.phone}
                    onChange = {this.handlePhone}>
                </input>
                <label>LinkedIn</label>
                <input
                    type = "text"
                    placeholder = "linkedin.com/in/john"
                    value = {this.props.linkedin}
                    onChange = {this.handleLinkedin}>
                    </input>
                <label>Location</label>
                <input 
                    type = "text"
                    placeholder = "Utrecht, Netherlands"
                    value = {this.props.location}
                    onChange = {this.handleLocation}>    
                </input>
            </form>
            </div>   
        )
    }
    
}

export default PersonalInfo