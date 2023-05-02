import { StyledTextArea, Green } from "./styled";
import { Markup } from 'interweave';


const TextA = "<h1><b>Hello world🙌</h1><b><h2><b>Welcome on my portfolio page 🎈</b><h2>//This is my first portfolio site so please by indulgence (I am trying my best😉)<br/>//btw. You can edit text displaying below:"

const TextB = "//first I downloaded react libary.. (I learned it on my programming course)</p>//then I did the 'Globalstyles' these are easy:"

const TextC = "<p>html {<br/>box-sizing: border-box;<br/>}<br/>*, ::after, ::before {<br/>box-sizing: inherit;<br/>}</p>body<br/>{<br/>overflow-y: scroll;<br/><br/>background-color: #156B87;<br/>font-family: 'IBM Plex Mono', monospace;<br/>//(I choose monospase! I like it so much)<br/>padding: 15px;<br/>letter-spacing: 0.03em;<br/>transition: background 0.3s;<br/>};<br/>//then I downloaded some repositories.. npm i ... easy!<br/>Then I did index.js:import { GlobalStyle } from./GlobalStyle;<br/>import { Normalize fromstyled-normalize;<br/>const root = ReactDOM.createRoot(document.getElementById('root'));<br/>root.render//Uff.. It works<br/>//The index.html - in public folder<br/>//App.js<br/>//I desided to use bootstrap libary, It is usefull and easy to learn<br/>//I planned it long time ago<br/>//code cafel is static<br/>//I simply put<br/>position: fixed;<br/>//to my TextArea Styled<br/>//Hej There do You want to see all my code? You can visit my github profile- https://github.com/Gosia-Magdzik. Download it for Your computer or clone.<br/>Fell free to contact me❤️ I have so much to share//Of course my repositories are going to grow yet.. I have so many plans🤗<br/>"


function TextArea () {
    return (
        <>
        <StyledTextArea>
            <Green>
                <Markup content={TextA}/>
            </Green>
            <Green> 
                <p contenteditable="true">
                <Markup content={TextB} />
                </p>
            </Green>
            <Markup content={TextC} />
        </StyledTextArea>
        </>
    );
}

export default TextArea;