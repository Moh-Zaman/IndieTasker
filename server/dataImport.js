import sqlite3 from "sqlite3";
import faker from "faker";

// Function to generate random latitude and longitude
const generateRandomLocation = () => ({
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
});

// Function to generate random project details
const generateRandomProjects = () => ({
    project1: faker.lorem.sentences(3),
    project2: faker.lorem.sentences(3),
});

// Function to generate random user data
const generateRandomUser = (id) => {
    const accountType = faker.random.arrayElement(['freelancer', 'client']);
    const jobTitles = ['AI Artists', 'Logo Design', 'WordPress', 'Developers', 'Project Management', '3D Modelling'];

    return {
        Id: id,
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        name: faker.name.findName(),
        accountType: accountType,
        ...generateRandomLocation(),
        country: faker.address.country(),
        jobTitle: faker.random.arrayElement(jobTitles),
        description: faker.lorem.sentences(3),
        website: faker.internet.url(),
        github: faker.internet.userName(),
        twitter: `@${faker.internet.userName()}`,
        instagram: `@${faker.internet.userName()}`,
        ...generateRandomProjects(),
    };
};

// Function to initialize the database
const initDatabase = () => {
    const db = new sqlite3.Database('users.db');

    // Create the users table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            Id INTEGER PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT,
            email TEXT,
            name TEXT,
            accountType TEXT,
            latitude REAL,
            longitude REAL,
            country TEXT,
            jobTitle TEXT,
            description TEXT,
            website TEXT,
            github TEXT,
            twitter TEXT,
            instagram TEXT,
            project1 TEXT,
            project2 TEXT
        )
    `);

    return db;
};

// Function to insert users into the database
const insertUsers = (db, users) => {
    const insertStatement = db.prepare(`
        INSERT INTO users (
            Id, username, password, email, name, accountType, latitude, longitude, country,
            jobTitle, description, website, github, twitter, instagram, project1, project2
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    users.forEach(user => {
        insertStatement.run(
            user.Id, user.username, user.password, user.email, user.name, user.accountType,
            user.latitude, user.longitude, user.country, user.jobTitle, user.description,
            user.website, user.github, user.twitter, user.instagram, user.project1, user.project2
        );
    });

    insertStatement.finalize();
};

// Main function to generate users and insert them into the database
const generateAndInsertUsers = (numUsers) => {
    const db = initDatabase();

    const users = Array.from({ length: numUsers }, (_, index) => generateRandomUser(index + 1));
    
    insertUsers(db, users);

    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Database connection closed.');
    });
};

// Generate and insert 100 fake users into the database
generateAndInsertUsers(100);
