import express from 'express';
const router = express.Router();
import pool from '../pool.js';

router.post('/login', (req, res) => {
    const body = req.body;
    let exists = false;
    let table;

    if (body.account_type === 'member') {
        table = 'Members';
    } else if (body.account_type === 'trainer') {
        table = 'Trainers';
    } else {
        table = 'Admin';
    }
    
    pool.query(`SELECT * From ${table} WHERE username = $1`, [body.username.toLowerCase()], (error, results) => {
        if (error) throw error;
        if (results.rowCount > 0) exists = true;

        if (body.isLogin) {
            if (exists) {
                if (results.rows[0].passwrd === body.password) {
                    res.status(200).send();
                } else {
                    res.status(400).send("Wrong password")
                }
            } else {
                res.status(404).send("Account does not exist");
            }
        } else {
            if (exists) {
                res.status(409).send("Account already exists");
            } else {
                pool.query(`INSERT INTO ${table} VALUES ($1, $2)`, [body.username.toLowerCase(), body.password], (error, results) => {
                    if (error) throw error;
                    res.status(200).send();
                });
            }
        }
    });
});

router.post('/trainer', (req, res) => {
    const {username, start, end, method} = req.body;

    if (method === 'add') {
        pool.query('SELECT * From TrainerTimes WHERE username = $1 AND start_time < $2 AND end_time > $3', [username, end, start], (error, results) => {
            if (error) throw error;
            if (results.rowCount > 0) {
                res.status(409).send();
            } else {
                pool.query('INSERT INTO TrainerTimes VALUES ($1, $2, $3)', [username, start, end], (error, results) => {
                    if (error) throw error;
                    res.status(200).send();
                });
            }
        });
    } else {
        pool.query('DELETE From TrainerTimes WHERE username = $1 AND start_time = $2 AND end_time = $3', [username, start, end], (error, results) => {
            if (error) throw error;
            res.status(200).send();
        });
    }
});

export default router;