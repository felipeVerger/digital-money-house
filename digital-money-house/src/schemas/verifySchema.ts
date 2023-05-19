import * as yup from "yup";
export const verifySchema = yup.object({
    code: yup.string().required('Debes escribir un código válido')
}).required()
