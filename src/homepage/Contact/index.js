import { StyledContact, StyledContactItem, ContactCircle } from "./styled";
import { Link } from "./Link";


export const Contact = () => (
    <StyledContact>
        <StyledContactItem>
            <ContactCircle/>
            <Link
                href={"mailto:melassa26@gmail.com"}
                description={"melassa26@gmail.com"}
            />
        </StyledContactItem>
        <StyledContactItem>
            <ContactCircle/>
            <Link
                href={"tel:+48794753888"}
                description={"(+48) 794-753-888"}
            />
        </StyledContactItem>
    </StyledContact>
);
