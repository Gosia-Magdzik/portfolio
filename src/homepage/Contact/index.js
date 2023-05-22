import { StyledContact, StyledContactItem, Image } from "./styled";
import { Link } from "./Link";
import Email from "./email.svg"
import WhatsApp from "./whatsapp.svg"
import { Motion } from "../Header/Motion"


export const Contact = () => (
    <StyledContact>
        <StyledContactItem>
            <Image src={Email} />
            &nbsp;&nbsp;
            <Motion
                y={-500}
                type={"spring"}
                mass={5}
                animatedElement={ 
            <Link
                href={"mailto:magdzik.frontend@gmail.com"}
                description={"magdzik.frontend@gmail.com"}
            />
        }/>
        </StyledContactItem>
        <StyledContactItem>
            <Image src={WhatsApp} />
            &nbsp;&nbsp;
            <Motion
                y={-500}
                type={"spring"}
                mass={5}
                animatedElement={ 
                    <Link
                        href={"tel:+48794753888"}
                        description={"(+48) 794-753-888"}
                    />
            }/>
        </StyledContactItem>
    </StyledContact>
);
