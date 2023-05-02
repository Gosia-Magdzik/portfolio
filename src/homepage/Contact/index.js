import { StyledContact, StyledContactItem, Image } from "./styled";
import { Link } from "./Link";
import Email from "./email.svg"
import WhatsApp from "./whatsapp.svg"


export const Contact = () => (
    <StyledContact>
        <StyledContactItem>
            <Image src={Email} />
            &nbsp;&nbsp;
            <Link
                href={"mailto:melassa26@gmail.com"}
                description={"melassa26@gmail.com"}
            />
        </StyledContactItem>
        <StyledContactItem>
            <Image src={WhatsApp} />
            &nbsp;&nbsp;
            <Link
                href={"tel:+48794753888"}
                description={"(+48) 794-753-888"}
            />
        </StyledContactItem>
    </StyledContact>
);
