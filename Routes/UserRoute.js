const UserController = require('../Controller/userController');

const userRoutes = [
    {
        method: 'POST',
        path: '/api/user',
        handler: UserController.createUser,
    },
    {
        method: 'PUT',
        path: '/api/user/{id}',
        handler: UserController.updateUserById,
    },
    {
        method: 'GET',
        path: '/api/user/{id}',
        handler: UserController.getUserById,
    },
    {
        method: 'DELETE',
        path: '/api/user/{id}',
        handler: UserController.deleteUserById,
    },
];

module.exports = userRoutes;
