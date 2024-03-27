import express from 'express';
import pool from '../pool.js';
const router = express.Router();

router.get('/trainer', (req, res) => {
    const { username } = req.query;
    pool.query('SELECT * FROM TrainerTimes WHERE username = $1', [username], (error, results) => {
        try {
            if (error) throw error;
            res.status(200).json(results.rows);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send('Internal error');
        }
    })
});

export default router;