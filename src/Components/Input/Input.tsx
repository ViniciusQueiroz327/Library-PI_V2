import { InputContainer } from "./style"
import { UIInput } from './types'

const Input: React.FC<UIInput> = ({ placeholder, type }) => <InputContainer placeholder={placeholder} type={type} />

export { Input }
