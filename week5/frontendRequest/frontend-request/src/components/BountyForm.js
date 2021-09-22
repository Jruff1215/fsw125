import { useState } from "react";

function BountyForm({ submit, btnText, firstName, lastName, living, bounty, type, _id }) {
    const initialInputs = { firstName: firstName || "", lastName: lastName || "", living: living || "", bounty: bounty || "", type: type || ""}
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }
    
    return (
        <form id="bountyform" onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder= "First Name" />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder= "Last Name" />
            <input
                type="text"
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder= "Living" />
            <input
                type="text"
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                placeholder= "Bounty" />
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder= "Type" />
            <button>{btnText}</button>
        </form>
    )
}

export default BountyForm;