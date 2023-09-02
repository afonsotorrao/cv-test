import PersonalInfo from "./components/PersonalInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"

import Page from "./components/Page"

import { useState } from "react"
import uniqid from "uniqid"


const App = () => {

    const [infoValues, setInfoValues] = useState({
        name: '',
        phone: '',
        email: '',
        linkedin: '',
        location: ''
     });

     const [experienceValues, setExperienceValues] = useState([
        {id: uniqid(),
        job: '',
        company: '',
        startingDate: '',
        finishingDate: '',
        description: '',
        isActive: true
     }
        ]);

      const [educationValues, setEducationValues] = useState([
        {id: uniqid(),
        degree: '',
        organization: '',
        date: '',
        notes: '',
        isActive: true
       }]);

       const [skillValues, setSkillValues] = useState([
        {id: uniqid(),
        skill: '',
        isActive: true
       }
        ]);
  

          
    
     return(
        <><div className="detailsPage">
            <PersonalInfo infoValues = {infoValues} setInfoValues = {setInfoValues}/>
            { experienceValues.map(item => {
            return (
              <Experience key={item.id} index = {item.id} isActive = {item.isActive} experienceValues = {experienceValues} setExperienceValues = {setExperienceValues} />
            );
          })
        }
        { educationValues.map(item => {
            return (
              <Education key={item.id} index = {item.id} isActive = {item.isActive} educationValues = {educationValues} setEducationValues = {setEducationValues} />
            );
          })
        }
        { skillValues.map(item => {
            return (
              <Skills key={item.id} index = {item.id} isActive = {item.isActive} skillValues = {skillValues} setSkillValues = {setSkillValues} />
            );
          })
        }
        </div>
        <div className="cvPage">
            <Page infoValues = {infoValues} experienceValues = {experienceValues} educationValues = {educationValues} skillValues = {skillValues}/>
        </div></>
        )
    }
            
export default App