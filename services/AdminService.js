const createHash = require('crypto').createHash;

const Admin = require('../models/Admin');

class AdminService {
    static async getAdminByCredentials({ username, password }) {
        try { 
            let hashObject = createHash('sha256');
            const hashedPassword = hashObject.update(password).digest('hex');
            const adminResponse = await Admin.findOne({
                username: username, password: hashedPassword
            }).exec();
            return adminResponse;
        } catch (error) {
            console.log(`Nu s-a putut cauta administrator dupa credentiale ${error}`);
        }
    }
    static async createAdmin({ username, password }) {
        try {
            let hashObject = createHash('sha256');
            const hashedPassword = hashObject.update(password).digest('hex');
            const admin = new Admin({
                username: username,
                password: hashedPassword
            })
            await admin.save();
            return admin
        } catch(error) {
            console.log(`Nu s-a putut inregistra un administrator ${error}`);
        }
    }
}

module.exports = AdminService;