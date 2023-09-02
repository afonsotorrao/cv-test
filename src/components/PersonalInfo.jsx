const PersonalInfo = ({ infoValues, setInfoValues }) => {
    const changeInfo = (e) => {
        setInfoValues({...infoValues,[e.target.name]: e.target.value})
     }

        return(
            <><div className="header">
                <h2>CV Generator</h2>
            </div>
            <div className="infoDiv"><h2>Personal Info</h2>
                    <form>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            onChange={changeInfo}
                            name="name"
                            maxLength="25"
                        >
                        </input>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="john_doe@mail.com"
                            onChange={changeInfo}
                            name="email"
                            maxLength="30"
                        >
                        </input>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            placeholder="230888444"
                            onChange={changeInfo}
                            name="phone"
                            maxLength="18"
                        >
                        </input>
                        <label>LinkedIn</label>
                        <input
                            type="text"
                            placeholder="john_dev"
                            onChange={changeInfo}
                            name="linkedin"
                            maxLength="20"
                        >
                        </input>
                        <label>Location</label>
                        <input
                            type="text"
                            placeholder="Netherlands"
                            onChange={changeInfo}
                            name="location"
                            maxLength="25"
                        >
                        </input>
                    </form>
                </div></>   
        )
    }

export default PersonalInfo