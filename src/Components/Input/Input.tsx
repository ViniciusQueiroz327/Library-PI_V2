import { InputContainer } from "./style"
import { UIInput } from './types'

const Input: React.FC<UIInput> = ({ placeholder, type, name }) => <InputContainer placeholder={placeholder} type={type} name={name}/>

export { Input }
