export const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        message: "User Already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user = { name, email, password: hashPassword };

    const otp = Math.floor(100000 + Math.random() * 900000);

    const activationToken = jwt.sign(
      { user, otp },
      process.env.Activation_Secret,
      { expiresIn: "5m" }
    );

    await sendMail(email, "E-learning OTP", { name, otp });

    res.status(200).json({
      message: "OTP sent to your mail",
      activationToken,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
