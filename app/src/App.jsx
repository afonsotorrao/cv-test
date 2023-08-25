import Header from "./components/Header"
import PersonalInfo from "./components/PersonalInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Picker from "./components/Picker"
import Page from "./components/Page"

import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleJob = this.handleJob.bind(this);
        this.handleCompany = this.handleCompany.bind(this);
        this.handleStartingDate = this.handleStartingDate.bind(this);
        this.handleFinishingDate = this.handleFinishingDate.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.state = {
            personalInfo: {name: '', phone: '', email: '' , linkedin: '', location: ''},
            experience: {job: '', company: '', startingDate: '', finishingDate: '', description: ''} };
      }

    handleName(newName) {
        this.setState({name: newName})
        console.log(newName)
    }

    handlePhone(newPhone) {
        this.setState({phone: newPhone})
        console.log(newPhone)
    }

    handleEmail(newEmail) {
        this.setState({email: newEmail})
        console.log(newEmail)
    }

    handleLinkedin(newLinkedin) {
        this.setState({linkedin: newLinkedin})
        console.log(newLinkedin)
    }

    handleLocation(newLocation) {
        this.setState({location: newLocation})
        console.log(newLocation)
    }

    handleJob(newJob) {
        this.setState({job: newJob})
        console.log(newJob)
    }

    handleCompany(newCompany) {
        this.setState({company: newCompany})
        console.log(newCompany)
    }

    handleStartingDate(newStartingDate) {
        this.setState({startingDate: newStartingDate})
        console.log(newStartingDate)
    }

    handleFinishingDate(newFinishingDate) {
        this.setState({finishingDate: newFinishingDate})
        console.log(newFinishingDate)
    }

    handleDescription(newDescription) {
        this.setState({description: newDescription})
        console.log(newDescription)
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
            <><div className="detailsPage">
                <Header/>
                <PersonalInfo name={this.state.name} 
                              handleName={this.handleName}
                              phone={this.state.phone} 
                              handlePhone={this.handlePhone}
                              email={this.state.email} 
                              handleEmail={this.handleEmail}
                              linkedin={this.state.linkedin} 
                              handleLinkedin={this.handleLinkedin}
                              location={this.state.location} 
                              handleLocation={this.handleLocation}/>
                <Experience   job={this.state.job} 
                              handleJob={this.handleJob}
                              company={this.state.company} 
                              handleCompany={this.handleCompany}
                              startingDate={this.state.startingDate} 
                              handleStartingDate={this.handleStartingDate}
                              finishingDate={this.state.finishingDate} 
                              handleFinishingDate={this.handleFinishingDate}
                              description={this.state.description} 
                              handleDescription={this.handleDescription}
                              addExperience={this.addExperience}/>
                <Education/>
            </div>
            <div className="cvPage">
                <Picker/>
                <Page
                              name={this.state.name}
                              phone={this.state.phone}
                              email={this.state.email}
                              linkedin={this.state.linkedin}
                              location={this.state.location}
                              job={this.state.job}
                              company={this.state.company}
                              startingDate={this.state.startingDate}
                              finishingDate={this.state.finishingDate}
                              description={this.state.description}/>
            </div></>
        )
    }
}

export default App