const pool = require('../db/connect');

exports.createUser = async (req, res, next) => {
    try {
        const { username } = req.body;
        // const result = await pool.query(
        //     `INSERT INTO users (username) VALUE ("${username}")` //
        // );

        const result = await pool.execute(
            `INSERT INTO users (username) VALUE (?, ?)`,
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
