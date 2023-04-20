import { StyledTextArea } from "./styled";
import { Markup } from 'interweave';

const animatedText = "<h1>Hello world🙌</h1><p><b>Please, go with me... </b><p>//I gonna code, well ....<br/>//I am trying my best😉<br/>//This is my first portfolio site.<br/>//Of course my repositories are going to grow yet.. I have so many plans🤗<br/>//first I downloaded react libary.. I learned it on my programming course</p><br/>//then I did the 'Globalstyles' these are so easy - almost everywhere you put the same<p>html {<br/>box-sizing: border-box;<br/>}<br/>*, ::after, ::before {<br/>box-sizing: inherit;<br/>}</p>body<br/>{<br/>overflow-y: scroll;<br/>well... super cursor is a plan for the future it doesn't work😒//cursor: url(cursor.png) 4 12, default;<br/>background-color: #156B87;<br/>font-family: 'IBM Plex Mono', monospace;<br/>//(I choose monospase! I like it so much)<br/>padding: 15px;<br/>letter-spacing: 0.03em;<br/>transition: background 0.3s;<br/>};<br/>//then I downloaded some repositories.. npm i ... easy!<br/>Then I did index.js:import { GlobalStyle } from./GlobalStyle;<br/>import { Normalize fromstyled-normalize;<br/>const root = ReactDOM.createRoot(document.getElementById('root'));<br/>root.render//Uff.. It works<br/>//The index.html - in public folder<br/>//App.js<br/>//I desided to use bootstrap libary, It is usefull and easy to learn<br/>//I planned it long time ago<br/>//code cafel is static<br/>//I simply put<br/>position: fixed;<br/>//to my TextArea Styled<br/>//Hej There do You want to see all my code? You can visit my github profile- https://github.com/Gosia-Magdzik. Download it for Your computer or clone.<br/>Fell free to contact me❤️ I have so much to share"

function TextArea () {
    return (
        
        <StyledTextArea>
                <Markup content={animatedText} />
        </StyledTextArea>
        
    );
}

export default TextArea;