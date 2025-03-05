const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.drop()
    })

    beforeEach(async () => {
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const name = "test"
        const genre = "rnb"
        const band = await Band.create({name: name, genre: genre})
        expect(band.name).toBe(name);
        expect(band.genre).toBe(genre);
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Band', async () => {
        const name = "test"
        const genre = "rnb"
        const band = await Band.create({name: name, genre: genre})
        expect(band.genre).toBe("rnb");
        band.update({genre: "rock"})
        expect(band.genre).toBe("rock");
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        const name = "test"
        const genre = "rnb"
        const band = await Band.create({name: name, genre: genre})
        const firstFind = await Band.findOne({name: name, genre: genre})
        expect(firstFind.name).toBe(name);

        await Band.destroy({where: {name: name, genre: genre}})
        const secondFind = await Band.findOne({name: name, genre: genre})
        expect(secondFind).toBe(null);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})