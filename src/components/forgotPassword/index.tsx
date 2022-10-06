import { ForgotPassword } from "./ForgotPassword.Style"

type Props = {
    text: string
}
export const ForgotPasswordLink = ({text}: Props) => {
    return(
        <div>
            <ForgotPassword>{text}</ForgotPassword>
        </div>
    )
}