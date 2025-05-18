import Joi from 'joi';

export const querySchema = Joi.object({
    group: Joi.string().valid('A').required()
});
