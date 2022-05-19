const User = require('../models/User')

class UserService {
    static async getUserByEmail(email) {
        try {
            const userResponse = await User.findOne({
                email: email
            }).exec();
            return userResponse;
        } catch (error) {
            console.log(`S-a intampinat o eroare in cautarea unui user dupa email ${error}`)
        }
    }
    static async createUser({ email, displayName, password, title, role }) {
        try {
            var user = new User({
                email: email,
                displayName: displayName,
                password: password,
                title: title
            });
            await user.save();
            return user;
        } catch (error) {
            console.log(`S-a intampinat o eroare in creare unui user ${error}`);
        }
    }
    static async appendRoleToUser({ id, role }) {
        try {
            var user
        } catch (error) {
            console.log(`S-a intampinat o eroare la adaugarea unui rol la un user ${error}`);
        }
    }
}

module.exports = UserService;