import Joi from "joi";

export const validateIncrement = (req, res, next) => {
  const schema = Joi.object({
    value: Joi.number().integer().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
