const asyncHandler = (fn) => async (req, res, next) => {
  try {
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};


export default asyncHandler;
