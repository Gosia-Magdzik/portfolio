import { StyledContact, StyledContactItem } from "./styled";
import { Link } from "./Link";


export const Contact = () => (
    <StyledContact>
        <StyledContactItem>
            <Link
                href={"mailto:melassa26@gmail.com"}
                description={"📧 melassa26@gmail.com"}
            />
        </StyledContactItem>
        <StyledContactItem>
            <Link
                href={"tel:+48794753888"}
                description={"📞 (+48) 794-753-888"}
            />
        </StyledContactItem>
    </StyledContact>
);
