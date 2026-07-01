const { Loan, User } = require('../models');

exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll({ include: [{ model: User, attributes: ['fullname', 'email'] }] });
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.approveLoan = async (req, res) => {
    try {
        await Loan.update({ status: 'APPROVED' }, { where: { id: req.params.id } });
        res.json({ message: 'Pinjaman disetujui!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.rejectLoan = async (req, res) => {
    try {
        await Loan.update({ status: 'REJECTED' }, { where: { id: req.params.id } });
        res.json({ message: 'Pinjaman ditolak!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
