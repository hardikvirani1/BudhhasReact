
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
    //English lang...
    "en-US":{
        in:"in the",
        buddha:"Buddha's",
        footsteps:"footsteps",
        register: 'Register',
        signin: 'Sign In',
        email: 'Email',
        password: 'Password',
        confirmpassword: 'Confirm Password',
        couponcode: 'Coupon Code',
    },
    // Spanish lang...
    en:{
        in:"en el",
        buddha:"Buda",
        footsteps:"Pasos",
        register: 'Registro',
        signin: 'Registrarse',
        email: 'Email',
        password: 'Contraseña',
        confirmpassword: 'Confirmar contraseña',
        couponcode: 'Código promocional',
    },
    // French lang....
    it: {
        in:"dans le",
        buddha:"Bouddha",
        footsteps:"trace de pas",
        register: 'Registre',
        signin: 'Se connecter',
        email: 'Email',
        password: 'Mot de passe',
        confirmpassword: 'Confirmez le mot de passe',
        couponcode: 'Code de coupon',
    }
});

module.exports = strings;
