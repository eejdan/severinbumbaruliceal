
class RootViewController {
    constructor() {
        this.popularUniversitiesList = [];
        updatePopularUniversitiesList();
        setInterval(updatePopularUniversitiesList,  (10*60*1000));
    }
    static async updatePopularUniversitiesList() {
        
    }
    static async getLandingPage(req, res, next) {
        res.render('index');
    }
}

module.exports = RootViewController