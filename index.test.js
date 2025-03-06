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
        // create the band and expect it's properties
        const name = "test"
        const genre = "rnb"
        const band = await Band.create({name: name, genre: genre})

        expect(band.name).toBe(name);
        expect(band.genre).toBe(genre);
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const name = "test"
        const instrument = "guitar"
        const musician = await Musician.create({name: name, instrument: instrument})
        expect(musician.name).toBe('test');
        expect(musician.instrument).toBe('guitar');
    })

    test('can create a Song', async () => {
        const song = await Song.create({
            title: 'song name',
            year: 2025,
            length: 15,
        })
        expect(song.title).toBe('song name');
        expect(song.year).toBe(2025);
        expect(song.length).toBe(15);
    })

    test('can update a Band', async () => {
        // create the band
        const name = "test"
        const genre = "rnb"
        const band = await Band.create({name: name, genre: genre})
        expect(band.genre).toBe("rnb");

        // update it and expect to see it updated
        band.update({genre: "rock"})
        expect(band.genre).toBe("rock");
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const name = "test"
        const instrument = "guitar"
        const musician = await Musician.create({name: name, instrument: instrument})
        expect(musician.name).toBe('test');
        musician.update({name: "bob"})
        expect(musician.name).toBe('bob')
    })

    test('can update a Song', async () => {
        const song = await Song.create({
            title: 'song name',
            year: 2025,
            length: 15,
        })
        expect(song.title).toBe('song name');
        expect(song.year).toBe(2025);
        expect(song.length).toBe(15);

        await song.update({length: 20000})

        expect(song.length).toBe(20000);

    })

    test('can delete a Band', async () => {
        // create the band
        const name = "test"
        const genre = "rnb"
        const band = await Band.create({name: name, genre: genre})
        const firstFind = await Band.findOne({name: name, genre: genre})
        expect(firstFind.name).toBe(name);

        // delete the band
        await Band.destroy({where: {name: name, genre: genre}})

        // check to see if the band was deleted
        const secondFind = await Band.findOne({name: name, genre: genre})
        expect(secondFind).toBe(null);
    })

    test('can delete a Musician', async () => {
        const name = "test"
        const instrument = "guitar"
        const musician = await Musician.create({name: name, instrument: instrument})
        const firstFind = await Musician.findOne({name: name, instrument: instrument})
        expect(firstFind.name).toBe(name);
        await musician.destroy({where: {name: name, instrument: instrument}})
        const secondFind = await Musician.findOne({name: name, instrument: instrument})
        expect(secondFind).toBe(null);
    })

    test('can destroy a Song', async () => {
        const song = await Song.create({
            title: 'song name2',
            year: 2025,
            length: 15,
        })
        expect(song.title).toBe('song name2');

        const firstFind = await Song.findOne({name: 'song name2', year: 2025})
        expect(firstFind.title).toBe('song name2');
        await song.destroy();

        const secondFind = await Song.findOne({name: 'song name2', year: 2025})
        expect(secondFind).toBe(null);
    })

    test('can associate a Band with a Musician', async () => {
        const name = "test"
        const genre = "rnb"
        const band = await Band.create({name: name, genre: genre})
        const musician = await Musician.create({name: "bob", instrument: "guitar"})
        await band.addMusician(musician)
        const musicians = await band.getMusicians()
        expect(musicians[0].name).toBe("bob")
    })
})