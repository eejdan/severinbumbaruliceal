
const University = require('../models/University');

class UniversityService {
    static async getAllUniversities() {
        try {
            const allUniversities = await University.find().exec();
            return allUniversities;
        } catch (error) {
            console.log(`Nu s-a putut livra lista universitatilor ${error}`);
        }
    }
    static async getAllActiveUniversities() {
        try {
            const allActiveUniversities = await University.find({
                active: true
            }).exec();
            return allActiveUniversities;
        } catch (error) {
            console.log(`Nu s-a putut livra lista universitatilor active ${error}`);
        }
    }
    static async getPopularUniversities() {
        try { 
            const popularUniversities = await University.find()
            .sort({ hits: -1 }).limit(3).exec();
            return popularUniversities;
        } catch (error) {
            console.log(`Nu s-a putut livra lista universitatilor populare pe site ${error}`)
        }
    }
    static async getUniversityById(universityId) {
        try {
            const universityResponse = await University.findById(universityId)
            return universityResponse;
        } catch (error) {
            console.log(`Nu s-a putut livra universitatea in urma cautarii dupa id${error}`);
        }
    }
    static async getUniversityByDisplayName(universityName) {
        try {
            const universityResponse = await University.find({
                displayName: universityName
            }).exec();
            return universityResponse;
        } catch (error) {
            console.log(`Nu s-a putut livra universitatea in urma cautarii dupa nume ${error}`)
        }
    }
    static async getUniversityByPartialName(universityPartialName) {
        try {
            const universityResponse = await University.find({
                $text: { $search: universityPartialName }
            }).exec();
            return universityResponse
        } catch (error) {
            console.log(`Nu s-a putut livra universitatea in urma cautarii dupa nume partial ${error}`)
        }
    }
}