/* eslint-disable react/prop-types */
import { Component } from "react"

class Experience extends Component{
    constructor(props){
        super(props);
        this.handleJob = this.handleJob.bind(this)
        this.handleCompany = this.handleCompany.bind(this)
        this.handleStartingDate = this.handleStartingDate.bind(this)
        this.handleFinishingDate = this.handleFinishingDate.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
    }

    handleJob(e){
        this.props.handleJob(e.target.value);
    }

    handleCompany(e){
        this.props.handleCompany(e.target.value);
    }

    handleStartingDate(e){
        this.props.handleStartingDate(e.target.value);
    }

    handleFinishingDate(e){
        this.props.handleFinishingDate(e.target.value);
    }

    handleDescription(e){
        this.props.handleDescription(e.target.value);
    }

    addExperience = (e) => {
        e.preventDefault();
        const { experience } = this.state;
        const newExperience = {
          job: "",
          company: "",
          startingDate: "",
          finishingDate: "",
          description: "",
        };
        this.setState({
          experience: [...experience, newExperience],
        });
      };

    render(){
    return(
        <div className = "infoDiv"><h3>Experience</h3>
            <form>
            <label>Job Title</label>
            <input 
                type = "text"
                value = {this.props.job}
                onChange = {this.handleJob}>      
            </input>
            <label>Company Name</label>
            <input 
                type = "text"
                value = {this.props.company}
                onChange = {this.handleCompany}>
            </input>
            <label>Started on:</label>
            <input 
                type = "date"
                value = {this.props.startingDate}
                onChange = {this.handleStartingDate}>
            </input>
            <label>Finished on:</label>
            <input
                type = "date"
                value = {this.props.finishingDate}
                onChange = {this.handleFinishingDate}>
            </input>
            <label>Job Description</label>
            <input
                type = "text"
                value = {this.props.description}
                onChange = {this.handleDescription}>
            </input>
            <button type = "button" onClick = {this.addExperience} >Save</button>
        </form>
        </div>   
    )
}}

export default Experience