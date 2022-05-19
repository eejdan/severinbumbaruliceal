
const UniversityService = require('../services/UniversityService');

class UniversityAdminController {
    
    static async getLoginPage(req, res) {
        try {
            res.render('universityAdminLogin')
        } catch (error) {
            console.log('Nu s-a putut livra pagina de Logare Admin Universitar')
        }
    }
    static async getMyUniversityPage(req, res) {
        try {
            //tbd TODO fill faculties fill specials by user session
            //tbd TODO redirect choose role on session
            //tbd TODO redirect if not logged in
            res.render('universityAdmin')
        } catch (error) {
            console.log('Nu s-a putut livra pagina de Admin Universitar')
        }
    }
/*     static async getMySpecifiedUniversityPage(req, res) { //has req.params.university
        try {
            //tbd TODO fill faculties fill specials by user session
            //tbd TODO redirect if not logged in
            res.render('universityAdmin')
        } catch (error) {
            console.log('Nu s-a putut livra pagina de Admin Universitar')
        }
    } */
    static async postLogin(req, res) {
        try {
            
        } catch (error) {
            console.log(`S-a intampinat o eroare in timpul autentificari unui admin universitar ${error}`);
            if(!res.headersSent) {
                res.sendStatus(500);
            }
        }
    }

}

module.exports = UniversityAdminController