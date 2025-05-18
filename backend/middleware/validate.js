export const validateParams = (schema, source='params') => (req,res,next) =>{
    const {error, value} = schema.validate(req[source], {aborEarly: false});
    if (error) {
        return res.status(400).json({ error: error.details.map(d => d.message).join(', ') });
    }
    req[source] = value;
    next();
    }

