import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import "./text.css"

const TextField = () => {
    const [content, setContent] = useState("");
    var i = 0;
    var txt = 'Lorem ipsum!';
    var speed = 400; 

    function typeWriter() {
        if (i < txt.length) {
            let newContent = content;
            setContent(newContent += txt.charAt(i));
            i+=1;
        }
    }
    
    setTimeout(typeWriter, speed);
    return <Paper className="paperText">{content}</Paper>
}

export default TextField;