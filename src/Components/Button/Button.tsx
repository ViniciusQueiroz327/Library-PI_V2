import { useNavigate } from "react-router-dom"
import { ButtonContainer } from "./style"
import { UIButton } from './types'

const Button: React.FC<UIButton> = ({ title, path, onClick }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if(onClick) {
            onClick();
        }
        if(path) {
            navigate(path);
        } 
    }

    return (
        <ButtonContainer onClick={handleClick} title={title}>{title}</ButtonContainer>
    )
}

export { Button }
