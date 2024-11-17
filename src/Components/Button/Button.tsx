import { ButtonContainer } from "./style"
import { UIButton } from './types'

const Button: React.FC<UIButton> = ({ title }) => {
    return (
        <ButtonContainer title={title}>{title}</ButtonContainer>
    )
}

export { Button }
