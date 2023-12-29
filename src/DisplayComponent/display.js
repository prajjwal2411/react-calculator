import './display.css';

function Display({expression}){
    return(
        <>
        <input className='input-design' type="text" readOnly value={expression}/>
        </>
    )
}

export default Display;