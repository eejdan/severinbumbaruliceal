const City = require('../models/City');

class CityService {
    static async getAllCities() {
        try {
            const allCities = await City.find().exec();
            return allCities;
        } catch (error) {
            console.log(`Nu s-a putut vectorul de orase ${error}`);
        }
    }
    static async getCityById(cityId) {
        try {
            const singleCityResponse = await City.findById();
            return singleCityResponse;
        } catch (error) {
            console.log(`Nu s-a putut livra orasul ${error}`);
        }
    }
    static async updateCityRouteHits(newHits) {
        try {
            const updateResponse = await City.updateOne();
            return updateResponse;
        } catch (error) {
            console.log(`Nu s-a putut actualiza numarul de accesari al orasului `);
        }
    }
    static async getPopularCities() { // o sa returneze 3 cele mai populare orase
        try {
            const popularCities = await City.find()
            .sort({ hits: -1 }).limit(3).exec();
            return popularCities;
        } catch (error) {
            console.log(`Nu s-a putut livra lista celor mai accesate orase ${error}`);
        }
    }
}

module.export = CityService