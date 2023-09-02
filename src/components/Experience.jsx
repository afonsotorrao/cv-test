import uniqid from "uniqid"

const Experience = ({ experienceValues, setExperienceValues, index, isActive}) => {
      
    const handleChange = (e) => {
      setExperienceValues(
        experienceValues.map(item => 
            item.id === index 
            ? {...item, [e.target.name]: e.target.value}
            : item 
    ))
    }
      
     const addExperience = (e) => {
        const newExperience = {id: uniqid(),
            job: '',
            company: '',
            startingDate: '',
            finishingDate: '',
            description: '',
            isActive: true
         }
        e.preventDefault()
        console.log(experienceValues)
        experienceValues = experienceValues.map(experience => ({
            ...experience,
            isActive: false
          }));
        setExperienceValues([...experienceValues, newExperience])
     }
    

    if(isActive){
    return(
       <div className="infoDiv"><h2>Experience</h2>
            <form>
                <label>Job Title</label>
                <input
                    type="text"
                    name="job"
                    placeholder="Software Developer"
                    maxLength="25"
                    onChange={handleChange}
                >
                </input>
                <label>Company Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="company"
                    placeholder="Google"
                    maxLength="20"
                >
                </input>
                <label>Started on:</label>
                <input
                    type="month"
                    onChange={handleChange}
                    name="startingDate"
                >
                </input>
                <label>Finished on:</label>
                <input
                    type="month"
                    onChange={handleChange}
                    name="finishingDate"
                >
                </input>
                <label>Job Description</label>
                <textarea
                    type="text"
                    onChange={handleChange}
                    name="description"
                    placeholder="Describe your responsibilities at the job"
                >
                </textarea>
                <button type="button" onClick={addExperience}>Save</button>
            </form>
        </div>
    )
}
}





export default Experience