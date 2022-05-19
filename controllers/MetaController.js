
class MetaController {
    static async getAboutUs(req, res) {
        try {
            res.render('aboutUs');
        } catch (error) {
            console.log(`Nu s-a putut livra pagina 'Despre noi' ${error}`)
        }
    }
    static async getContactUs() {
        try {
            res.render('contactUs');
        } catch (error) {
            console.log(`Nu s-a putut livra pagina 'Despre noi' ${error}`)
        }
    }
}


module.exports = MetaController