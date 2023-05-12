import { FC } from 'react'
import { InputS, Label } from '../RegisterStyle'
import { useFormContext } from 'react-hook-form';

interface InputProps {
  type: string;
  name: string;
  placeholder: string
  id: string
}

const Input: FC<InputProps> = ({ type, name, id, placeholder }) => {
    const { register } = useFormContext();

  return (
    <Label>
        <InputS 
            {...register(name)}
            type={type} 
            id={id} 
            placeholder={placeholder} 
        />
    </Label>
  )
}

export default Input