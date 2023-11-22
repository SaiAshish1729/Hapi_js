const createConnection = require('../DB/Connection');
const userSchema = require('../Model/UserSchema');

const createUser = async (request, h) => {
    try {
        const { name, email } = request.payload;

        // Validate payload using userSchema
        await userSchema.validateAsync({ name, email });

        const db = createConnection();

        const result = await db.query('INSERT INTO employee_db.user (name, email) VALUES (?, ?)', [name, email]);

        return { message: 'User created successfully', data: result };
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

const updateUserById = async (request, h) => {
    try {
        const { id } = request.params;
        const { name, email } = request.payload;

        // Validate payload using userSchema
        await userSchema.validateAsync({ name, email });

        const db = createConnection();

        const result = await db.query('UPDATE employee_db.user SET name=?, email=? WHERE id=?', [name, email, id]);

        return { message: 'User updated successfully', data: result };
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

const getUserById = async (request, h) => {
    try {
        const { id } = request.params;

        const db = createConnection();

        const [result] = await db.query('SELECT * FROM employee_db.user WHERE id=?', [id]);

        if (result.length === 0) {
            return h.response({ error: 'User not found' }).code(404);
        }

        return { message: 'User retrieved successfully', data: result[0] };
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

const deleteUserById = async (request, h) => {
    try {
        const { id } = request.params;

        const db = createConnection();

        const result = await db.query('DELETE FROM employee_db.user WHERE id=?', [id]);

        return { message: 'User deleted successfully', data: result };
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

module.exports = {
    createUser,
    updateUserById,
    getUserById,
    deleteUserById,
};
