import { useState } from 'react';
import BountyForm from "./BountyForm";

function Bounties({ deleteBook, editBounty, firstName, lastName, living, bounty, type, _id }) {
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bountyInf">
            { !editToggle ?
                <>
                    <h3>First Name: {firstName} </h3>
                    <h3> Last Name: {lastName}</h3>
                    <p> Living: {living}</p>
                    <p>Bounty: {bounty}</p>
                    <p>Type: {type}</p>
                    <button 
                        onClick={() => deleteBook(_id)} 
                        className="btnDelete">
                        Delete</button>
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        className="btnEdit">
                        Edit
                        </button>
                </>
            :
            
            <>
                <BountyForm
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        bounty={bounty}
                        type={type}
                        _id={_id}
                        btnText='Edit'
                        submit={editBounty} />
                        <button
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Close
                        </button>
            </>
            }
        </div>
    );
}

export default Bounties;