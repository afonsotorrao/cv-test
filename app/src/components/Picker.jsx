function Picker () {
    return(
        <div className = "picker">
            <label>Main Color</label>
            <label>Font</label>
            <label>Font Color</label>
            <input type = "color"></input>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <input type = "color"></input>
        </div>
    )
}

export default Picker