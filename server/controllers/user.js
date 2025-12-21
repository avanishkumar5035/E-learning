export const register = async (req, res) => {
  try {
    console.log("REGISTER API HIT"); // 🔥 debug

    return res.status(200).json({
      success: true,
      message: "Register API working 🚀",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
