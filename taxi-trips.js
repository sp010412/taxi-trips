module.exports = function TaxiTrips(stored) {

    var pool = stored;

    async function totalTripCount() {
        const results = await pool.query('select COUNT(*) FROM Trips');
        return results.rows[0].count
    }
    async function findAllRegions() {
        const results = await pool.query('select region_name FROM Region');
        return results.rows
    }
    async function findTaxisForRegion(region) {

        if(region === 'Cape Town') {
            const taxiFromCapeTown = await pool.query('select registration FROM taxis where region_id = $1', [2]);
            return taxiFromCapeTown.rows;
        }
        if(region === 'Durban') {
            const taxiFromDurban = await pool.query('select registration FROM taxis where region_id = $1', [1]);
            return taxiFromDurban.rows;
        }
        if(region === 'Gauteng') {
            const taxiFromGauteng = await pool.query('select registration FROM taxis where region_id = $1', [3]);
        return taxiFromGauteng.rows;
        }
    }
    async function findTripsByRegNumber(reg) {

        const reg_number = await pool.query('select id from Taxis where registration = $1', [reg]);
        const results = await pool.query('select * FROM Trips WHERE taxi_id = $1', [reg_number.rows[0].id]);
        return results.rows;
    }
    async function findTripsByRegion(region) {
        const reg_number = await pool.query('select id from Taxis where registration = $1', [reg]);
        const results = await pool.query('select * FROM Trips WHERE taxi_id = $1', [reg_number.rows[0].id]);
        return results.rows;

    }
    async function findIncomeByRegNumber() {

    }
    async function findTotalIncomePerTaxi() {

    }
    async function findTotalIncome() {

    }
    async function findTotalIncomeByRegion() {

    }





    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    }

}