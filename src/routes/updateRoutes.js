import express from 'express';
const router = express.Router();
import pool from '../pool.js';

router.post('/login', (req, res) => {
    const body = req.body;
    let exists = false;
    
    pool.query('SELECT * From Users WHERE username = $1 AND account_type = $2', [body.username.toLowerCase(), body.account_type], (error, results) => {
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
                pool.query('INSERT INTO Users VALUES ($1, $2, $3)', [body.username.toLowerCase(), body.password, body.account_type], (error, results) => {
                    if (error) throw error;
                });
                res.status(200).send();
            }
        }
    });
});

export default router;