const db = require('../../Modal')
const user_db = db.user_db
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class AuthController {
    async Login(req, res) {
        console.log(req.body)   
        try {
            console.log(req.body)
            const { Email, Password } = req.body;
            
    
            const findData = await user_db.findOne({ Email: Email });
            if (!findData) {
                return res.send({
                    status: false,
                    message: "User Not Found",
                    data: []
                });
            }
    
            const isMatch = await bcrypt.compare(Password, findData.Password);
            if (!isMatch) {
                return res.send({
                    status: false,
                    message: "Incorrect Password",
                    data: []
                });
            }
    
            const token = jwt.sign(
                {
                    Email: findData.Email,
                    id: findData._id
                },
                process.env.SECRET_KEY,
                { expiresIn: '1h' }
            );
    
            return res.send({
                status: true,
                message: "Login Success",
                data: findData,
                token: token
            });
    
        } catch (error) {
            console.error("Error in login:", error);
            return res.send({
                status: false,
                message: "Internal Server Error",
                data: []
            });
        }
    }
    async SignUp(req, res) {
        console.log(req.body)
        try {
            
            const { Phone, Password, FullName, Email , Role , userName } = req.body;
         
 
            const searchQuery = {
                $or: [
                    { Phone: Phone },
                    { Email: Email }
                ]
            }
            const findData = await user_db.findOne(searchQuery)

            if (findData) {
                let error = []
                if (findData.Phone == Phone) {
                    error.push("Phone Number Already Exist")
                }
                if (findData.Email == Email) {
                    error.push("Email Already Exist")
                }
                return res.send({
                    status: false,
                    message: error,
                    data: []
                })
            }
            bcrypt.hash(Password, 10, async (err, hash) => {

                if (err) {
                    return res.send({
                        status: false,
                        message: "Internal Server Error",
                        data: []
                    })
                }
                // Store hash in your password DB.
                const newUser = new user_db({
                    Phone: Phone,
                    Password: hash,
                    FullName: FullName,
                    Email: Email,
                    Role :Role
                })
                await newUser.save()

                return res.send({
                    status: true,
                    message: "User Created Successfully",
                    data: []
                })

            })

        }
        catch {
            console.log("Error in SignIn")
            return res.send({
                status: false,
                message: "Internal server Error",
                data: []
            })
        }
    }

}

module.exports = new AuthController();