let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/taxi_trips';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {

    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(27, await taxiTrips.totalTripCount());


    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([{
            "region_name": "Durban"
        }, {
            "region_name": "Cape Town"
        }, {
            "region_name": "Gauteng"
        }], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([{
                "registration": "ZN 777 666"
            },
            {
                "registration": "ZN 444 332"
            },
            {
                "registration": "ZN 707 123"
            }
        ], await taxiTrips.findTaxisForRegion('Durban'));

        assert.deepEqual([{
                "registration": "CA 858-899"
            },
            {
                "registration": "CA 858-111"
            },
            {
                "registration": "CA 877-885"
            }
        ], await taxiTrips.findTaxisForRegion('Cape Town'));

        assert.deepEqual([{
                "registration": "GP 2234"
            },
            {
                "registration": "GP 1079"
            },
            {
                "registration": "GP 6666"
            }
        ], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([{
                "id": 10,
                "route_id": 5,
                "taxi_id": 4
            },
            {
                "id": 11,
                "route_id": 6,
                "taxi_id": 4
            },
            {
                "id": 12,
                "route_id": 4,
                "taxi_id": 4
            }
        ], await taxiTrips.findTripsByRegNumber('GP 2234'));

        assert.deepEqual([{
                "id": 25,
                "route_id": 9,
                "taxi_id": 9
            },
            {
                "id": 26,
                "route_id": 7,
                "taxi_id": 9
            },
            {
                "id": 27,
                "route_id": 8,
                "taxi_id": 9
            }
        ], await taxiTrips.findTripsByRegNumber('ZN 707 123'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    });

    // it('find the total income for a given reg number', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    // });

    // it('find the total income for each taxi', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    // });

    // it('find the total income for all the taxis', async function () {
    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    // });


    after(function () {
        pool.end();
    });

});