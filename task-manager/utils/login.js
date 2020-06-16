const bcrypt = require("bcryptjs");

const verifyPassword = async(password) => {
    const hashedPassword = await bcrypt.hash(password,13)

}