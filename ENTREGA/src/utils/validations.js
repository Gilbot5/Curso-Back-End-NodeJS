import Joi from 'joi';

export const validarUser = async (user) => {

    const schema = Joi.object({
        id: Joi.number().integer().min(1).required().messages({
            'number.base': 'El ID debe ser un número entero.',
            'any.required': 'El ID del usuario es obligatorio.'
        }),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required().messages({
                'string.email': 'El email debe ser válido y contener un dominio .com',
                'any.required': 'El email del usuario es obligatorio.'
        }),
        password: Joi.string()
            .min(6).max(6).required()
            .messages({
                'string.empty': 'El pasword no puede estar vacío.',
                'string.min': 'El pasword debe tener 6 caracteres.',
                'string.max': 'El pasword no puede exceder los 6 caracteres.',
                'any.required': 'El password del usuario es obligatorio.'
        }),
    });
    return schema.validate(user);
};

export const validarProduct = async (prod) => {

    const schema = Joi.object({
        nombre: Joi.string().min(3).max(20).pattern(/^[a-zA-Z]+$/).required().messages({
            'string.empty': 'El nombre no puede estar vacío.',
            'string.min': 'El nombre debe tener al menos 3 caracteres.',
            'string.max': 'El nombre no puede exceder los 20 caracteres.',
            'string.pattern.base': 'El nombre solo puede contener letras (sin números, ni caracteres especiales).',
            'any.required': 'El nombre es obligatorio.'
        }),
        categoria: Joi.string().min(3).max(20).required()
            .messages({
                'string.empty': 'La categoria no puede estar vacía.',
                'string.min': 'La categoria debe tener al menos 3 caracteres.',
                'string.max': 'La categoria no puede exceder los 20 caracteres.',
                'any.required': 'La categoria es obligatoria.'
            }),
        precio: Joi.number().precision(2).required()
            .messages({
                'number.base': 'El precio debe ser un número.',
                'number.precision': 'El precio debe tener máximo 2 decimales.',
                'any.required': 'El precio es obligatorio.'
            })
    });
    return schema.validate(prod);
};

export const validarId = async (id) => {
    const schema = Joi.object({
        id: Joi.string().min(1).required()
    });
    return schema.validate(id);
};