import uniqid from "uniqid"

function Education({ educationValues, setEducationValues, index, isActive}){

    const handleChange = (e) => {
        setEducationValues(
          educationValues.map(item => 
              item.id === index 
              ? {...item, [e.target.name]: e.target.value}
              : item 
      ))
      }
        
       const addEducation = (e) => {
          const newEducation = {id: uniqid(),
              degree: '',
              organization: '',
              date: '',
              notes: '',
              isActive: true
           }
          e.preventDefault()
          console.log(educationValues)
          educationValues = educationValues.map(education => ({
              ...education,
              isActive: false
            }));
          setEducationValues([...educationValues, newEducation])
       }

    if(isActive){
    return(
        <div className = "infoDiv"><h2>Education</h2>
            <form>
            <label>Degree</label>
            <input type = "text" onChange = {handleChange} name = "degree" placeholder = "Bachelor's Degree in Software Engineering"></input>
            <label>Organization</label>
            <input type = "text" onChange = {handleChange} name = "organization" placeholder = "University of North Carolina"></input>
            <label>Finished on</label>
            <input type = "month" onChange = {handleChange} name = "date"></input>
            <label>Notes</label>
            <textarea type = "text" onChange = {handleChange} name = "notes" placeholder = "Finished the degree with a 3.9 GPA."></textarea>
            <button type = "button" onClick={addEducation}>Save</button>
        </form>
        </div>
        
    )}
}

export default Education