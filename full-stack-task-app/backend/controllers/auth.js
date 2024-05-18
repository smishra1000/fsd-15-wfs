async function login (req, res) {
    // first check user exist or not
    // if user present with given email
    // check entred password is equal to stored password 
    //otherwise send error message that password is wrong
    // if user is not present then send error user not exist  
    const { fullName, email, password, rePassword } = req.body
    let isUserExist = await AuthModel.findOne({ email: email })
    if (isUserExist) {
        if (password === isUserExist.password) {
            // token generation line and pass to client
            if (isUserExist.active === false) {
                return res.send({ message: "Your account has been Deactivated", success: false })
            } else {
                let token = jwt.sign({ email: isUserExist.email, _id: isUserExist._id }, "testkey")
                return res.send({ message: "User Logged in Successfully", success: true, token: token, email: isUserExist.email, userId: isUserExist._id, role: isUserExist.role })
            }

        } else {
            return res.send({ message: "Invalid credentials", success: false })
        }

    } else {
        return res.send({ message: "User Not Exist", success: false })
    }
}

module.exports={
    login
}