const UniversityService = require('../services/UniversityService');

class RootViewController {
    constructor() {
        this.updatePopularUniversitiesList();
        setInterval(this.updatePopularUniversitiesList,  (10*60*1000));
    }
    static async updatePopularUniversitiesList() {
        return;
    }

    static async getLandingPage(req, res, next) {
        if(!this.popularUniversitiesList) {
            setInterval(() => {
                this.popularUniversitiesPromise = UniversityService.getPopularUniversities();
            },  (10*60*1000));

        }
        res.render('index');
    }
}

module.exports = RootViewController;