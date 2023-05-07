import { StyledTextArea, Image } from "./styled";
import { Markup } from 'interweave';
import arrow from "./Images/arrow.svg";
import flag from "./Images/flag.svg";
import shell from "./Images/shell.svg";
import coffe from "./Images/coffee.svg"
import cook from "./Images/cook.svg"
import github from "./Images/github.svg"

const TextA = "html {<br/>box-sizing: border-box;<br/>}<br/>*, ::after, ::before {<br/>box-sizing: inherit;<br/>}</p>body<br/>{<br/>overflow-y: scroll;<br/><br/>background-color: #156B87;<br/>font-family: 'IBM Plex Mono', monospace;<br/><br/>padding: 15px;<br/>letter-spacing: 0.03em;<br/>transition: background 0.3s;<br/>};<br/>//then I downloaded some repositories.. npm i ... easy!<br/><br/>"

function TextArea () {
    return (
        <StyledTextArea>
            <h2><b>Hello world! 🙌</b></h2><br/>
            <p>Witam, Herzlich willkommen, Hola!, שלום.<br/>
            That's me and my portfolio page.</p>
            <p>Thank's for being here. I code this website for you.<br/>With love and pleasure <Image src={coffe}/></p>
            <b>1st. The story </b><br/>
            <p>Last years I have worked at charity in foundation for homeless people, on dogs shelter. In National Parks, ornithology camps🦉 on ecological farms..<br/>
            I have walked thousands of kilometers on Santiago de Compostela roads.
            <Image src={arrow}/>
            <Image src={flag}/>
            <Image src={shell}/><br/>
            and yes, I also have experience on regular job, studying 📒<br/>
            Last years was a huge growth period for me.<br/>
            <br/>
            At this moment feels important.<br/>
            Learning from my past experiences to build better things.<br/>
            Thoughtful about life path. <br/>
            <br/>
            <b>2nd. How does the coding start ?</b><br/>
            Autumn 2022. I was a seasonal worker on ecological olive farm in Sicily. Life period when I struggle a lot.<br/>
            From one site: being so happy to have opportunity being in such beautiful place. With great people.<br/>
            From the other: being aware that I am here just a guest. 'Stuck in a moment'<br/>
            <i>How does it work that always someone come and shows direction, give tips, support - I don't know.</i> (So much coincidence has happen🤯)<br/>
            <br/>
            There I have planned (even it is only a human act to plan...)<br/>
            I gonna learn hard and be a frontend developer. <br/>
            I will try my best.<br/>
            I gonna try to reach goals, organize myself.<br/> 
            Making my work as accessible and pleasant as possible.<br/> 
            To don't give up. Try next day. Again and again.<br/>
            To believe in myself.<br/></p>
            <p><b>3rd. My goals 🥎</b><br/>
            <ol>
                <li>To Learn new technologies: typescript, React Context..</li>
                <li>Demanding discipline, organize my time. Don't stress myself.</li>
                <li>To approach step by step, to narrowing the field in a world with endless choice.</li>
            </ol> 
            <b>4rd Facts</b><br/>
            <Image src={arrow}/>Passionate about coding<br/>
            <Image src={arrow}/>Even if I go to emergency boat I gonna ask for non-smoking place 🚭 <br/>
            <Image src={arrow}/>'What makes you vulnerable makes you beautiful'🌸<br/>
            <Image src={arrow}/>I find cooking ability as one of the most important things <Image src={cook}/><br/>
            <Image src={arrow}/>I love biking. Nothing gives You so much freedom as just endless biking. The best way to travel.🚴‍♀️ <br/><br/>
            </p><p>
            <b>...Still here?</b><br/>
            This section was intended to be row HTML code; to present my work from another side<br/><br/>
            Below I leave a short fragment of 'original version' code<br/> 
            (btw. you can edit text displaying below):<br/> 
            </p>
            <p contenteditable="true">
                <Markup content={TextA} />
            </p>
            <p>...you can see all code on my github profile: <a href="https://github.com/Gosia-Magdzik" target="_blank"><Image src={github}/></a><br/>
            download it for Your computer or clone.<br/>
            Fell free to contact me ✒️<br/></p>
        </StyledTextArea>
    );
}

export default TextArea;