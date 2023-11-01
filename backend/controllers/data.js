import { db } from "../db.js";

export const getAllCriminals = async (req, res, next) => {

    const qry = "SELECT first_name, last_name, address,gender FROM Criminals";
    db.query(qry, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);

    })
};
export const getCriminalsByCrime = async (req, res, next) => {

    const qry = "SELECT Criminals.first_name, Criminals.last_name,Crimes.crime_name FROM Criminals JOIN Crimes ON Criminals.crime_id=Crimes.crime_id WHERE Crimes.crime_name='Robbery' ";
    db.query(qry, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);

    })
};
export const getCriminalsByPrison = async (req, res, next) => {

    const qry = "SELECT Criminals.first_name, Criminals.last_name,Crimes.crime_name, Prison.prison_name FROM Criminals JOIN Prison ON Criminals.prison_id=Prison.prison_id JOIN Crimes ON Criminals.crime_id=Crimes.crime_id WHERE Prison.prison_name='Tihar Jail' ";
    db.query(qry, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);

    })
};

export const getCriminalsByGender = async (req, res, next) => {

    const qry = "SELECT first_name, last_name, address,gender FROM Criminals WHERE gender='Male'";
    db.query(qry, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);

    })
};
export const getCriminalsByLocation = async (req, res, next) => {

    const qry = "SELECT Criminals.first_name, Criminals.last_name,Cases.case_description FROM Criminals JOIN Cases ON Criminals.case_id=Cases.case_id WHERE Cases.location='Mumbai' ";
    db.query(qry, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);

    })
};
export const getCriminalsByYear = async (req, res, next) => {

    const qry = "SELECT Criminals.first_name, Criminals.last_name,Cases.case_description FROM Criminals JOIN Cases ON Criminals.case_id=Cases.case_id WHERE Cases.date_committed='2023-01-15'";
    db.query(qry, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);

    })
};
export const getCriminalsByStatus = async (req, res, next) => {

    const qry = "SELECT Criminals.first_name, Criminals.last_name,Cases.case_description FROM Criminals JOIN Cases ON Criminals.case_id=Cases.case_id WHERE Cases.status='Open'";
    db.query(qry, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);

    })
};




