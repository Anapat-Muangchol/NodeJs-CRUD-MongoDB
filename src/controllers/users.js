const userModel = require('../models/Users/Users')

const getUsers = async (req, res) => {
    const users = await userModel.getUsers()
    res.send(users)
}

const getUserById = async (req, res) => {
    const {userId} = req.params
    const user = await userModel.getUserById(userId)
    res.send(user)
}

const postUser = async (req, res) => {
    const {body} = req
    const user = await userModel.createNewUser(body)
    res.send(user)
}

const patchUser = async (req, res) => {
    const {userId, firstname, lastname} = req.body
    const statusUpdatedUser = await userModel.updateUserById(userId, {
        firstname,
        lastname
    })
    res.send(statusUpdatedUser)
}

const deleteUser = async (req, res) => {
    const {userId} = req.body
    const statusDeletedUser = await userModel.deleteUserById(userId)
    res.send(statusDeletedUser)
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}