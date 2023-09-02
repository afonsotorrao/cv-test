import emailImg from "../assets/email.svg"
import phoneImg from "../assets/phone.svg"
import linkedinImg from "../assets/linkedin.svg"
import locationImg from "../assets/location.svg"

import jsPDF from 'jspdf';
import { useRef } from "react";

const Page = ({infoValues, experienceValues, educationValues, skillValues}) => {
    let {name, email, phone, linkedin, location} = infoValues
    let [{job, company, startingDate, finishingDate, description}] = experienceValues
    let [{degree, organization, date, notes}] = educationValues
    let [{skill}] = skillValues

    
    const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
        alert("Formatting not working properly at the moment.")
	};

    return(
        <div className = 'A4-div'>
            <div className="download">
                <button onClick = {handleGeneratePdf}><b>Download CV</b></button>
            </div>
            <div ref = {reportTemplateRef} className = 'page'>
                <div className="cv-name">
                    <h2>{name}</h2>
                </div>
                {(email.length>0 || phone.length > 0 || linkedin.length > 0 || location.length > 0) && <div className="header-division"></div>}
                <div className="cv-header">
                    {email.length > 0 && <div className = "headerDiv"> <img className = "headerImg" src={emailImg}/> {email}</div>}
                    {phone.length > 0 && <div className = "headerDiv"> <img className = "headerImg" src={phoneImg}/> {phone}</div>}
                    {linkedin.length > 0 && <div className = "headerDiv"> <img className = "headerImg" src={linkedinImg}/> {linkedin}</div>}
                    {location.length > 0 && <div className = "headerDiv"> <img className = "headerImg" src={locationImg}/> {location}</div>}  
                </div>
                {(email.length>0 || phone.length > 0 || linkedin.length > 0 || location.length > 0) && <div className="header-division"></div>}
                {(job.length > 0 || company.length > 0 || startingDate.length > 0 || finishingDate.length > 0 || description.length > 0) && <h3 className="title">Experience</h3>}
                {experienceValues.map((item) => (
                    <div key={item.id} className="experienceDiv">
                        <div className="title-preview">
                            <span className = "company"><b>{item.job}</b>{(item.job.length > 0 && item.company.length > 0) && <span>,</span>} {item.company}</span>
                            <span>{item.startingDate} {(item.startingDate.length > 0 && item.finishingDate.length > 0) && <span>to</span>} {item.finishingDate}</span></div>
                        <div className="description-preview">{item.description}</div>
          </div>
        ))}
            {(degree.length > 0 || organization.length > 0 || date.length > 0 || notes.length > 0) && <h3 className="title">Education</h3>}
            {educationValues.map((item) => (
                    <div key={item.id} className="educationDiv">
                        <div className="education-preview">
                            <span className = "title-preview">
                                <b>{item.degree}</b>
                                <span>{item.organization}{(item.organization.length > 0 && item.date.length > 0) && <span>,</span>} {item.date}</span></span>
                        </div>
                        <div className="description-preview">{item.notes}</div>
          </div>
        ))}
        {(skill.length > 0) && <h3 className="title">Skills</h3>}
        <div className="skillDiv">
        {skillValues.map((item) => (
                        <p key={item.id}>{item.skill}</p>
        ))}
        </div>
            </div>
        </div>
    )}
    
export default Page