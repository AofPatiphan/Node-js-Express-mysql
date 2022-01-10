const pool = require('../db/connect');

exports.createTodo = async (req, res, next) => {
    try {
        const { title, completed, userId } = req.body;

        // validate

        const result = await pool.execute(
            'INSERT INTO todos ( title, completed, user_id ) VALUE (?, ?, ?)',
            [title, completed, userId]
        );
        res.status(201).json({
            todo: { id: result[0].insertId, title, completed, userId },
        });
    } catch (err) {
        next(err);
    }
};
