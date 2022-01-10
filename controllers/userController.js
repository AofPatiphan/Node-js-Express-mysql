const pool = require('../db/connect');

exports.createUser = async (req, res, next) => {
    try {
        const { username } = req.body;
        // const result = await pool.query(
        //     `INSERT INTO users (username) VALUE ("${username}")` //
        // );

        const result = await pool.execute(
            `INSERT INTO users (username) VALUE (?)`,
            [username]
        );

        res.status(201).json({
            message: 'Created User',
            user: { id: result[0].insertId, username },
        });
    } catch (err) {
        next(err);
    }
};

exports.getAllUser = async (req, res, next) => {
    try {
        // SELECT * FROM users
        const result = await pool.execute('SELECT * FROM users');
        res.json({ users: result[0] });
    } catch (err) {
        next(err);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        // SELECT * FROM users
        const { id } = req.params;
        const users = await pool.execute(`SELECT * FROM users WHERE id = ?`, [
            id,
        ]);
        res.json({ user: users[0].length > 0 ? users[0] : null });
    } catch (err) {
        next(err);
    }
};
