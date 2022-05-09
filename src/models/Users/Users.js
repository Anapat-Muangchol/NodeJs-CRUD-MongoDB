const bcrypt = require('bcrypt')
const Users = require('./schema')

const generatePassword = async (password) => {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const passwordHashed = await bcrypt.hash(password, salt)
    return passwordHashed
}

const createNewUser = async (doc = {}) => {
    const insertDoc = {...doc}
    insertDoc.password = await generatePassword(doc.password)

    const newUser = new Users(insertDoc)
    return await newUser.save()
}

const getUsers = async () => {
    const users = await Users.find().lean()
    return users
}

const getUserById = async (userId) => {
    const user = await Users.findById(userId)
    return user
}

const updateUserById = async (userId, doc) => {
    const statusUpdatedUser = await Users.updateOne({
        _id: userId
    }, doc, {
        returnOriginal: false
    })
    return statusUpdatedUser
}

const deleteUserById = async (userId) => {
    const statusDeletedUser = await Users.remove({
        _id: userId
    })
    return statusDeletedUser
}

module.exports = {
    createNewUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}