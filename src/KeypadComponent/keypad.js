import './keypad.css';

// Try to to do it with few HTML Elements
// const buttonData = [
//     {'key': 1, 'label': 1, 'value': 1,},
//     {'key': 2, 'label': 2, 'value': 2,},
//     {'key': 3, 'label': 3, 'value': 3,},
//     {'key': 4, 'label': 4, 'value': 4,},
//     {'key': 5, 'label': 5, 'value': 5,},
//     {'key': 6, 'label': 6, 'value': 6,},
//     {'key': 7, 'label': 7, 'value': 7,},
//     {'key': 8, 'label': 8, 'value': 8,},
//     {'key': 9, 'label': 9, 'value': 9,},
//     {'key': 10, 'label': 0, 'value': 0,},
//     {'key': 11, 'label': '=', 'value': '=',},
//     {'key': 12, 'label': '+', 'value': '+',},
//     {'key': 13, 'label': '-', 'value': '-',},
//     {'key': 14, 'label': '*', 'value': '*',},
//     {'key': 15, 'label': '/', 'value': '/',},
//     {'key': 16, 'label': 'Delete', 'value': 'Delete',},
//     {'key': 17, 'label': 'Clear', 'value': 'Clear',},
// ]


function Keypad({handleClick}){
    
    return(
        <>
        <div className='d-flex'>
            <div className='dark-background'>
                <div>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={9}>9</button>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={8}>8</button>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={7}>7</button>
                </div>
                <div>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={6}>6</button>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={5}>5</button>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={4}>4</button>
                </div>
                <div>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={3}>3</button>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={2}>2</button>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={1}>1</button>
                </div>
                <div>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={'.'}>.</button>
                    <button className='button numbers dark-background' type='button' onClick={event => handleClick(event.target.value)} value={0}>0</button>
                </div>
            </div>
            <div className='d-flex flex-column'>
                <button className='button operators grey-background' type='button' onClick={event => handleClick(event.target.value)} value={'/'}>÷</button>
                <button className='button operators grey-background' type='button' onClick={event => handleClick(event.target.value)} value={'x'}>x</button>
                <button className='button operators grey-background' type='button' onClick={event => handleClick(event.target.value)} value={'-'}>-</button>
                <button className='button operators grey-background' type='button' onClick={event => handleClick(event.target.value)} value={'+'}>+</button>
            </div>
            <div  className='d-flex flex-column'>
                <button className='button grey-background delete-clear' type='button' onClick={event => handleClick(event.target.value)} value={'Delete'}>DEL</button>
                <button className='button grey-background delete-clear' type='button' onClick={event => handleClick(event.target.value)} value={'Clear'}>CLR</button>
                <button className='button result delete-clear' type='button' onClick={event => handleClick(event.target.value)} value={'='}>=</button>
            </div>
        </div>
        </>
    )
}

export default Keypad;