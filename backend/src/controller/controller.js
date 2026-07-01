exports.login = async (req, res) => {
    try {
        console.log('BODY:', req.body);

        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        });

        console.log('USER:', user);

        if (!user) {
            return res.status(400).json({
                message: 'User tidak ditemukan'
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: 'Password salah'
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET
        );

        return res.json({
            token,
            user: {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.log('LOGIN ERROR:', error);

        return res.status(500).json({
            message: error.message
        });
    }
};
exports.register = async (req, res) => {
    res.json({
        message: 'Register endpoint aktif'
    });
};
