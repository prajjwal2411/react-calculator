import './display.css';

function Display({expression}){
    return(
        <>
        <input type="text" readOnly value={expression}/>
        </>
    )
}

export default Display;