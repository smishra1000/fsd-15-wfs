import { useSelector, useDispatch } from "react-redux"
function ContactsUsingRedux() {
    const contactsState = useSelector((state) => state.contacts)
    const dispatch = useDispatch();

    const addContacts = ()=>{
         dispatch({type:"ADD_CONTACTS",payload:{id:2,name:"test2",phone:5555,email:"test2@gmail.com"}})
    }
    return (
        <div className="container">
            <h1>My Contacts</h1>
            <div className="row">
                {contactsState.contacts.map((item) => {
                    return (
                        <div className="col-md-3" key={item.id}>
                            <div className="card" style={{ "width": "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.email}</h6>
                                    <p className="card-text">{item.phone}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>addContacts()}>addContacts</button>
        </div>
    )
}

export default ContactsUsingRedux