import { StyledTextArea, Image, UList, G, Center } from "./styled";
import { Markup } from 'interweave';
import arrow from "./Images/arrow.svg";
import flag from "./Images/flag.svg";
import shell from "./Images/shell.svg";
import github from "./Images/github.svg";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

const TextA = "import { createGlobalStyle } from 'styled-components';<br/><br/>background-color: #156B87;<br/>font-family:  monospace;<br/>"

const TextB = "Class Gosia_Magdzik <* Person<br/><br/>  export const initialize<br/>   @user = 'Gosia Magdzik'<br/>   @current_work = 'Writing code'<br/>   @self.position = 'frontend_developer'<br/><br/> mobileApp: {<br/>   native: ['android']<br/>},<br/><br/> def getCity():<br/>    return warsaw_poland()<br/> end<br/><br/><b>def ambitions {<br/>   	Typescript(),<br/>   	Nodle.js()</b> ,<br/>   	...<br/>   }; <br/> Editors: ['Vscode', 'WebStorm'],"
 
const TextC = "That's me and my portfolio page. Thank's for being here. I code this website also for you. With love and pleasure"

function TextArea () {
    return (
        <StyledTextArea>
            <Center><img src="https://c.tenor.com/SOVMSXmWB1kAAAAi/tony-star-jumping.gif" width="70"></img>
            </Center>
            <h1>
                <span style={{ color: '#115F58'}}>
                <Typewriter
                        words={['Witam,', 'Hola!,', 'שלום,', 'Willkommen', 'Привет,', 'Bonjour,', 'Namaste,', ]}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delay={10000}
                    />
                </span>
            </h1>
                    <Typewriter
                        words={[TextC]}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={50}  
                    />
            <hr/>
            <Center>
                <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"></img>
            </Center>
            <ol>
            <li><G>Happy Coding 👨‍💻</G></li>
            <p contenteditable="true">
                <Markup content={TextA} />
            </p>
            <p contenteditable="true">
                <Markup content={TextB} />
            </p>
            <li><G>🚀 about</G></li>
            <Image src={arrow}/>I like to code, bike, read and cook in my free time 🚴‍♀️ <br/>
            ☕️ Coffe lover<br/>
            🚭 Even if I would go to emergency boat I gonna ask for non-smoking place <br/>
            🌸'What makes you vulnerable makes you beautiful'<br/>
            🤔 Carpe Diem <br/><br/>
            
            <li><G>story</G></li>
            
            <p><u>Last years</u> I have worked at charity for homeless, in National Parks, ornithology camps 🦉, dogs shelter and on ecological farms..🐑<br/>
            I have walked thousands kilometers on Santiago de Compostela roads.
            <Image src={flag}/>
            <Image src={shell}/><br/>
            and yes, I also have experience on regular job, studying 📒<br/>
            <u>Last years</u> was a huge growth period for me.<br/>
            At this moment feels important.<br/>
            I am trying to lear from my past experiences to build better things.<br/>
            Thoughtful about life path. <br/>
            <br/>
            <li><G>How does the coding start ?</G></li>
            Autumn 2022. (or maybe even before...)I was on ecological olive farm in Sicily.<br/>
            There I have planned (even it is only a human act to plan...)🤓<br/>
            I gonna be a frontend developer. <br/>
            I will try my best.<br/>
            I sign myself for course and as soon as I come back, I started THIS project<br/>
            </p>
            </ol>
            <p>
            If you're still reading, why not follow me on GitHub ➜  &nbsp;
            <a href="https://github.com/Gosia-Magdzik" target="_blank"><Image src={github}/></a><br/>
            Let's Connect !! <br/><br/>
            <Center>
                <img src="https://cultofthepartyparrot.com/parrots/hd/laptop_parrot.gif" width="30" height="30"/>
                &nbsp;Stay awesome &nbsp;
                <img src="https://cultofthepartyparrot.com/parrots/hd/laptop_parrot.gif" width="30" height="30"/>
            </Center>
            </p>
            
        </StyledTextArea>

        
    );
}

export default TextArea;