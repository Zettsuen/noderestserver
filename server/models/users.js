const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ["ADMIN_ROLE", "USER_ROLE"],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: { //No es obligatoria
        type: String,
        required: false
    },
    role: { //Default: user_role
        type: String,
        required: true,
        default: "USER_ROLE",
        enum: rolesValidos
    },
    estado: { //Boolean
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: true
    } //Boolean

});
usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password; //No muestro la Password
    delete userObject._id; //No muestro el ID

    return userObject;

};
usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} debe ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);