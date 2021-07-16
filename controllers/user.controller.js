const User = require('../models/user.model')



module.exports = class UserController {

    // POST ==> CREATE
    static async addUser(data) {
    const user = new User({...data})
    const output  =  await user.save()
    return output  ? {success :true} : {success:false} 
    }
    // GET ==> READ

    static async findUser(){
        const users = await User.find()
        return users
    }

    static async findUserById(id){
        const user = await User.findOne({_id:id})
        return user
    }

    //DELETE DELETE

    static async deleteUser(id){
        const userD = await User.deleteOne({_id:id})
        return userD 
    }

    // PUT UPDATE
     static async updateUser(data){
        const userU = await User.updateOne({_id:data?.id} ,{age:data?.age})
        return userU
    }
}