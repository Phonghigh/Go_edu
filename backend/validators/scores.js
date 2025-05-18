import Joi from "joi";

export const lookuschema = Joi.object({
    sbd: Joi.string().pattern(/^\d{8,9}$/).required().messages({
        'string.empty': "SBD không được để trống",
        "string.pattern.base": 'SBD chỉ được chưa các chữ số',
    }),
})