
class RootViewController {
    constructor() {
        this.popularUniversitiesList = [];
        this.updatePopularUniversitiesList();
        setInterval(this.updatePopularUniversitiesList,  (10*60*1000));
    }
    static async updatePopularUniversitiesList() {
        return;
    }
    static async getLandingPage(req, res, next) {
        res.render('index');
    }
}

module.exports = RootViewController;