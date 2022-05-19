const AdminSerivce = require('../services/AdminService');

class AdminController {
    static async getAdminPage(req, res) {
        try {
            if(!req.session.adminSession || req.session.adminSession != true) {
                return res.redirect('/admin/login');
            }
            return res.render('admin');
        } catch (error) {
            console.log(`S-a intampinat o eroare in livrarea pagini de administrare ${error}`)
        }
    } 
    static async getAdminLoginPage(req, res) {
        try {
            if(req.session.adminSession == true) { return res.redirect('/admin')}
            return res.render('adminLogin')
        } catch (error) {
            console.log(`S-a intampinat o eroare in livrarea pagini de logare in contul de administrare ${error}`)
        }
    }
    static async postAdminLogin(req, res) {
        try {
            var admin = await AdminSerivce.getAdminByCredentials({
                username: req.body.username, password: req.body.password
            })
            if(!admin) {
                return res.sendStatus(401);
            } else {
                req.session.adminSession = true;
            }
            return res.redirect('/admin/');
        } catch (error) {
            console.log(`S-a intampinat o eroare in verificare credentialelor de administrator! ${error}`);
        }
    }
    static async postAdminLogout(req, res) {
        try {
            req.session.adminSession = false;
            res.redirect('/admin/login');
        } catch (error) {
            console.log(`S-a intampinat o eroare in deautentificare de administrator${error}`);
        }
    }
}

module.exports = AdminController;