import { FC } from 'react'
import { ErrorMessage, InputS, Label } from '../RegisterStyle'
import { useFormContext } from 'react-hook-form';

interface InputProps {
  type: string;
  name: string;
  placeholder: string
  id: string
  errorText?: string 
}

const Input: FC<InputProps> = ({ type, name, id, placeholder, errorText }) => {
    const { register } = useFormContext();

  return (
    <Label>
        <InputS 
            {...register(name)}
            type={type} 
            id={id} 
            placeholder={placeholder} 
        />
        <ErrorMessage>{errorText}</ErrorMessage>
    </Label>
  )
}

export default Input