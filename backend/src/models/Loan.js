const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Loan = sequelize.define('Loan', {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
    purpose: { type: DataTypes.TEXT, allowNull: false },
    status: { type: DataTypes.ENUM('PENDING', 'APPROVED', 'REJECTED', 'FUNDED'), defaultValue: 'PENDING' }
}, { tableName: 'loans' });

module.exports = Loan;
