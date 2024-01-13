// contacts app using react 

// 1>we can save contact--phone name age email address of a person 
// 2>we can delete contact 
// 3>we can edit contact
// 4>we can serach contact by alphabates
//5----assignment---create group and show groups functionality
//6-----add contact to specific group
//7--make any contact fav

import { useState } from "react"
function ContactList() {
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" })
    const [isEdit,setIsEdit] = useState(false)
    const [selectedPhone,setSelectedPhone] = useState(null)
    const onFiledChange = (e, field) => {
        setContact({ ...contact, [field]: e.target.value })
    }

    const createContact = () => {
        setContacts([...contacts, contact])
        setContact({ ...contact, name: "", email: "", phone: "", address: "" })
    }
    const deleteContact = (phone)=>{
        const updatedContacts = [...contacts];
        const index = updatedContacts.findIndex((item)=>{
            return item.phone===phone
        })
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
    }
    const editContact = (phone)=>{
        setIsEdit(true)
        const updatedContacts = [...contacts];
        const index = updatedContacts.findIndex((item)=>{
            return item.phone===phone
        })
        setContact({...contact,...updatedContacts[index]})
        setSelectedPhone(phone)
    }

    const updateContact = ()=>{
        const updatedContacts = [...contacts];
        const index = updatedContacts.findIndex((item)=>{
            return item.phone===selectedPhone
        })
        updatedContacts[index].name=contact.name
        updatedContacts[index].phone=contact.phone
        updatedContacts[index].address=contact.address
        updatedContacts[index].email=contact.email
         setContacts(updatedContacts)
        setContact({ ...contact, name: "", email: "", phone: "", address: "" })
        setIsEdit(false)
    }
    return (
        <div className="container">

            <h1>Contacts App in progress</h1>
            <div className="row">
                <div className="form-group">
                    <label class="form-label">Name</label>
                    <input class="form-control" type="text" value={contact.name} placeholder="enter name" onChange={(e) => onFiledChange(e, "name")} />
                </div>
                <div className="form-group">
                    <label class="form-label">Phone</label>
                    <input class="form-control" type="text" value={contact.phone} placeholder="enter phone" onChange={(e) => onFiledChange(e, "phone")} />
                </div>
                <div className="form-group">
                    <label class="form-label">Email</label>
                    <input class="form-control" type="text" value={contact.email} placeholder="enter email" onChange={(e) => onFiledChange(e, "email")} />
                </div>
                <div className="form-group">
                    <label class="form-label">Address</label>
                    <input class="form-control" type="text" value={contact.address} placeholder="enter address" onChange={(e) => onFiledChange(e, "address")} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3">
                    {!isEdit &&<button className="btn btn-primary" onClick={() => createContact()}>Create Contact</button>}
                    {isEdit && <button className="btn btn-primary" onClick={() => updateContact()}>Upxdate Contact</button>}
                </div>
            </div>
            <div className="row mt-4">
                <div class="list-group">
                    {contacts.map((item) => {
                        return (
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Name: {item.name}</h5>
                                    <small>email: {item.email}</small>
                                </div>
                                <p class="mb-1">phone: {item.phone}</p>
                                <small>Address:{item.address}</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <button className="btn btn-info" onClick={()=>editContact(item.phone)}>edit</button>
                                    <button className="btn btn-danger" onClick={()=>deleteContact(item.phone)}>delete</button>
                                </div>
                            </a>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default ContactList

