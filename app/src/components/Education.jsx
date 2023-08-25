function Education(){
    return(
        <div className = "infoDiv"><h3>Education</h3>
            <form>
            <label>Degree</label>
            <input type = "text"></input>
            <label>Level</label>
            <input type = "text"></input>
            <label>Organization</label>
            <input type = "text"></input>
            <label>Finished on</label>
            <input type = "date"></input>
            <button type = "button">Save</button>
        </form>
        </div>
        
    )
}

export default Education