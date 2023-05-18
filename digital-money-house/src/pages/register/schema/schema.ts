import * as yup from "yup";
export const schema = yup.object().shape({
  firstname: yup.string().required("El nombre es requerido"),
  lastname: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .email("El email es inválido")
    .required("El email es requerido"),
  dni: yup
    .string()
    .required("El DNI es requerido")
    .min(8, "El Documento de identidad unica debe tener al menos 8 caracters"),
  password: yup
    .string()
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .max(20, "La contraseña no debe contener mas de 20 caracteres")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número"
    )
    .required("La contraseña es requerida"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas deben coincidir"),
  phone: yup.string().required("El telefono es requerido"),
});
