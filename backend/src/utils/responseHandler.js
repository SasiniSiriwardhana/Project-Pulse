export const sendSuccess = (res, data = null, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    statusCode
  })
}

export const sendError = (res, error = 'An error occurred', statusCode = 400) => {
  return res.status(statusCode).json({
    success: false,
    error,
    statusCode
  })
}
