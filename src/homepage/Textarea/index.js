import { StyledTextArea, Image, UList, G } from "./styled";
import { Markup } from 'interweave';
import arrow from "./Images/arrow.svg";
import flag from "./Images/flag.svg";
import shell from "./Images/shell.svg";
import coffe from "./Images/coffee.svg";
import github from "./Images/github.svg";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

const TextA = "import { createGlobalStyle } from 'styled-components';<br/><br/>export const GlobalStyle = createGlobalStyle`<br/>   html {<br/>box-sizing: border-box;<br/>}<br/>*, ::after, ::before {<br/>box-sizing: inherit;}</p>body<br/>{<br/>overflow-y: scroll;<br/><br/>background-color: #156B87;<br/>font-family: 'IBM Plex Mono', monospace;<br/>padding: 15px;<br/>letter-spacing: 0.03em;<br/>transition: background 0.3s;<br/>};"

 
const TextB = "That's me and my portfolio page. Thank's for being here. I code this website also for you. With love and pleasure"

function TextArea () {
    return (
        <StyledTextArea>
            <h1>
                <span style={{ color: '#115F58'}}>
                <Typewriter
                        words={['Hello World!  👏']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={300}
                    />
                </span>
            </h1><br/>
            <span>
                <Typewriter
                        words={['Witam,', 'Hola!,', 'שלום,', 'Willkommen,']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delay={10000}
                    />
            </span><br/><br/>
                <span>   
                    <Typewriter
                        words={[TextB]}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={50}  
                    />
                </span>
            <Image src={coffe}/>
            <br/><hr/>
            <ol>
            <li><G>// story</G></li>
            <p><u>Last years</u> I have worked at charity for homeless, in National Parks, ornithology camps 🦉, dogs shelter and on ecological farms..🐑<br/>
            I have walked thousands of kilometers on Santiago de Compostela roads.
            <Image src={arrow}/>
            <Image src={flag}/>
            <Image src={shell}/><br/>
            and yes, I also have experience on regular job, studying 📒<br/>
            <u>Last years</u> was a huge growth period for me.<br/>
            <br/>
            At this moment feels important.<br/>
            I am trying to lear from my past experiences to build better things.<br/>
            Thoughtful about life path. <br/>
            <br/>
            <li><G>// How does the coding start ?</G></li>
            Autumn 2022. (or maybe even before...)I was on ecological olive farm in Sicily.<br/>
            From one site: being so happy to have opportunity being in such beautiful place. With great people.<br/>
            From the other: being aware that I am was there for a while'.<br/>
            There I have planned (even it is only a human act to plan...)<br/>
            I gonna be a frontend developer. <br/>
            I will try my best.<br/>
            I sign myself for course and as soon as I come back, I started this project<br/>
            </p>
            <p><li><G>// future 🥎</G></li>
            <UList>
             <li>Learn new technologies: typescript, Nodle.js</li>
             <li>Organize my time.</li>
             <li>Try to make my work as accessible and pleasant as possible.</li>
            </UList> <br/>
            <li><G>// Facts</G></li>
            <Image src={arrow}/>Passionate about coding<br/>
            <Image src={arrow}/>Even if I would go to emergency boat I gonna ask for non-smoking place 🚭 <br/>
            <Image src={arrow}/>'What makes you vulnerable makes you beautiful'🌸<br/>
            <Image src={arrow}/>I love biking. Nothing gives You so much freedom as just endless biking. The best way to travel.🚴‍♀️ <br/>
            </p>
            </ol>
            <p>
            <G>// ...Still here?</G>
            This section was intended to be row HTML code; to present my work from another side<br/>
            Below I leave a short fragment of 'original version' code<br/> 
            (btw. you can edit text displaying below):<br/> 
            </p>
            <p contenteditable="true">
                <Markup content={TextA} />
            </p>
            <p>I downloaded some repositories.. npm i ... easy!<br/>visit my github profile: <a href="https://github.com/Gosia-Magdzik" target="_blank"><Image src={github}/></a><br/>
            download code for Your computer or clone.<br/>
            Fell free to contact me ✉️📬<br/></p>
        </StyledTextArea>
    );
}

export default TextArea;