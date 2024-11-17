import { BannerContainer } from "./style"
import { UIBanner } from "./types"


const Banner: React.FC<UIBanner> = ({ text, logo }) => {
    return (
        <BannerContainer>
            <img src={logo} alt="" />
            {text && <h1>{text}</h1>}
        </BannerContainer>
    )
}

export { Banner }