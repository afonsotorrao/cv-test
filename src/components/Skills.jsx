import uniqid from "uniqid"

function Skills({ skillValues, setSkillValues, index, isActive}){

    const handleChange = (e) => {
        setSkillValues(
          skillValues.map(item => 
              item.id === index 
              ? {...item, [e.target.name]: e.target.value}
              : item 
      ))
      }
        
       const addSkill = (e) => {
          const newSkill = {id: uniqid(),
              skill: '',
              isActive: true
           }
          e.preventDefault()
          console.log(skillValues)
          skillValues = skillValues.map(skill => ({
              ...skill,
              isActive: false
            }));
          setSkillValues([...skillValues, newSkill])
       }

    if(isActive){
    return(
        <div className = "infoDiv"><h2>Skills</h2>
            <form>
            <label>Skill</label>
            <input type = "text" onChange = {handleChange} name = "skill" placeholder = "Microsoft Excel"></input>
            <button type = "button" onClick={addSkill}>Save</button>
        </form>
        </div>
        
    )}
}

export default Skills