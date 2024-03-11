import pg from 'pg';

const Pool = pg.Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: '3005project',
    password: 'student',
    port: 5433
});

export default pool;