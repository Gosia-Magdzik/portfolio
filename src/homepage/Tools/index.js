import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
} from "react-icons/io";

import { 
    FaReact, 
    FaBootstrap
} from "react-icons/fa";

import { 
    SiReactrouter,
    SiRedux,
    SiReduxsaga,
    SiStyledcomponents,
    SiGit,
    SiFramer,
    SiWordpress
} from "react-icons/si";

import { Tool, StyledTooltip } from "./styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { nanoid } from "nanoid";

export const Tools = () => {
    return ([  
        {            
            logo: <IoLogoHtml5 />,
            title: "HTML"
        },
        {            
            logo: <IoLogoCss3 />,
            title: "CSS"
        },
        {            
            logo: <IoLogoJavascript />,
            title: "Java Script"
        },
        {            
            logo: <SiRedux />,
            title: "Redux"
        }, 
        {            
            logo: <FaReact />,
            title: "React"
        },   
        {            
            logo: <FaBootstrap />,
            title: "Bootstrap"
        },
        {            
            logo: <SiReactrouter />,
            title: "React Router"
        },
        {            
            logo: <SiRedux />,
            title: "Redux"
        },
        {            
            logo: <SiReduxsaga />,
            title: "Redux saga"
        },  
        {            
            logo: <SiStyledcomponents />,
            title: "Styled Components"
        },   
        {            
            logo: <SiGit />,
            title: "Git"
        },
        {            
            logo: <SiFramer />,
            title: "Framer"
        },
        {            
            logo: <SiWordpress />,
            title: "Wordpress"
        },                    
        ].map(({ logo, title }) => (
            <OverlayTrigger
                key = { nanoid() }
                overlay = {
                    <StyledTooltip>
                        {title}
                    </StyledTooltip>
                    }  
            >
                <Tool>
                    {logo}
                </Tool>
            </OverlayTrigger>
        ))  
    );
};

