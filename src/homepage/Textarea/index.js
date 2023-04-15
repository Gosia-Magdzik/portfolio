import { StyledTextArea } from "./styled";
import { Markup } from 'interweave';

const animatedText = "<StyledTextArea><h1 style={{ color: 'red' }}>Hello world</h1><p><b>Hi there🙌 Please, come with me</b> <h1 style={{ color: 'red' }}>aGuidehub</h1> </p><p>I gonna code, well ....<br/>//I am trying my best<br/><br/> <>Blanditiis enim cum <br/> <span style={{color: 'yellow'}}>colorful</span> tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas .</p><p>html {<br/>box-sizing: border-box;<br/>}<br/>*, ::after, ::before {<br/>box-sizing: inherit;<br/>}</p>"

function TextArea () {
    return (
        <>
        <StyledTextArea>
                <Markup content={animatedText} />
        </ StyledTextArea>
        </>
    );
}

export default TextArea;