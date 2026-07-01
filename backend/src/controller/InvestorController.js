const { Loan, Investment } = require('../models');

exports.getAvailableLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({ where: { status: 'APPROVED' } });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.investLoan = async (req, res) => {
  try {
    const { loan_id, amount } = req.body;
    const loan = await Loan.findByPk(loan_id);
    if (!loan || loan.status !== 'APPROVED') return res.status(400).json({ message: 'Pinjaman tidak tersedia untuk didanai.' });

    const investment = await Investment.create({ investor_id: req.user.id, loan_id, amount });
    await loan.update({ status: 'FUNDED' });

    res.json({ message: 'Investasi berhasil!', investment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
