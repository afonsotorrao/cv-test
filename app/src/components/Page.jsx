import { Component } from "react"

class Page extends Component {
    render(){
    return(
        <div className = 'A4-div'>
            <div className = 'page'>
                <div className="cv-name">
                    <h2>{this.props.name}</h2> 
                </div>
                <div className="header-division"></div>
                <div className="cv-header">      
                    <h4>{this.props.email}</h4>
                    <h4>{this.props.phone}</h4>
                    <h4>{this.props.linkedin}</h4>
                    <h4>{this.props.location}</h4>             
                </div>
                <div className="header-division"></div>
                <p>{this.props.job}, {this.props.company}</p>
                <p>{this.props.startingDate} - {this.props.finishingDate}</p>
                <p>{this.props.description}</p>
            </div>
        </div>
    )}
}

export default Page