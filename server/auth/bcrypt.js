const bcrypt = require('bcrypt')

export const encryptPassword = async(plainPassword) => {
        const saltRounds = 10; // the cost factor for hashing
        const encryptedPassword = await bcrypt.hash(plainPassword, saltRounds)
        return encryptedPassword
}

export const verifyPassword = async(plainPassword, hashedPassword)=>{
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
}
