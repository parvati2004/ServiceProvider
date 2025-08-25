// this middleware checks if req.body matches the schema
const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const status=422;
    const message="Fill the input properly";
    // For Zod, errors are inside err.issues
    const extraDetails= err.issues && err.issues.length > 0 ? err.issues[0].message : "Invalid input";
 

    const error={
       
        status,
        message,
         extraDetails
    }
       console.log("Validation error:", error);

    //res.status(400).json({ msg: message });
    next(error);
  }
};

module.exports = validate;
