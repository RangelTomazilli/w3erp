import LogoComplete from "../../../assets/logo/logoW3.svg"
import { StyledDivLogo } from "./Logo.Style"

export const LogoW3ERP = () => {
    return(
        <StyledDivLogo>
            <img 
            src={LogoComplete}
            alt="Logo W3ERP completa"
            width={"150px"}
            />
        </StyledDivLogo>
    )
}