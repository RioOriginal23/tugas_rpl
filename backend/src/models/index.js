const sequelize = require('../config/database');
const User = require('./User');
const Loan = require('./Loan');
const Investment = require('./Investment');

// Relasi Tabel
User.hasMany(Loan, { foreignKey: 'user_id' });
Loan.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Investment, { foreignKey: 'investor_id' });
Investment.belongsTo(User, { foreignKey: 'investor_id' });

Loan.hasMany(Investment, { foreignKey: 'loan_id' });
Investment.belongsTo(Loan, { foreignKey: 'loan_id' });

module.exports = { sequelize, User, Loan, Investment };
