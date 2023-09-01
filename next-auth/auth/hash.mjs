import bcrypt from "bcryptjs";

const pw = '123456'

const salt = bcrypt.genSaltSync()

console.log(salt)

const hash = bcrypt.hashSync(pw, salt)

console.log(hash)

