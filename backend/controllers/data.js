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




export const getCriminalsByFilters = async (req, res, next) => {
    const filters = req.body;
    const conditions = [];
    const values = [];
  
    if (filters.crimeType) {
      conditions.push('Crimes.crime_name = ?');
      values.push(filters.crimeType);
    }
    if (filters.age) {
      conditions.push('Prison.prison_name= ?');
      values.push(filters.prison);
    }
    if (filters.name) {
      conditions.push('Criminals.first_name = ?');
      values.push(filters.name);
    }
    if (filters.location) {
      conditions.push('Cases.location = ?');
      values.push(filters.location);
    }
    if (filters.sentenceStatus) {
      conditions.push('Cases.status = ?');
      values.push(filters.sentenceStatus);
    }
    var sql = `SELECT Criminals.first_name, Criminals.last_name,Criminals.gender,Criminals.address,Prison.prison_name,Cases.case_description,Cases.status, Crimes.crime_name FROM Criminals JOIN Crimes ON Criminals.crime_id = Crimes.crime_id JOIN Cases ON Cases.case_id = Criminals.case_id JOIN Prison ON Prison.prison_id = Criminals.prison_id  `;
  
    if (conditions.length > 0) {
      sql += ` WHERE ${conditions.join(' AND ')}`;
    }
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'An error occurred' });
      }
      res.json(data);
    });
  };
  