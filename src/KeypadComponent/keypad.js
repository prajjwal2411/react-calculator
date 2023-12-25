import './keypad.css';

const buttonData = [
    {'key': 1, 'label': 1, 'value': 1,},
    {'key': 2, 'label': 2, 'value': 2,},
    {'key': 3, 'label': 3, 'value': 3,},
    {'key': 4, 'label': 4, 'value': 4,},
    {'key': 5, 'label': 5, 'value': 5,},
    {'key': 6, 'label': 6, 'value': 6,},
    {'key': 7, 'label': 7, 'value': 7,},
    {'key': 8, 'label': 8, 'value': 8,},
    {'key': 9, 'label': 9, 'value': 9,},
    {'key': 10, 'label': 0, 'value': 0,},
    {'key': 11, 'label': '=', 'value': '=',},
    {'key': 12, 'label': '+', 'value': '+',},
    {'key': 13, 'label': '-', 'value': '-',},
    {'key': 14, 'label': '*', 'value': '*',},
    {'key': 15, 'label': '/', 'value': '/',},
    {'key': 16, 'label': 'Delete', 'value': 'Delete',},
    {'key': 17, 'label': 'Clear', 'value': 'Clear',},
]


function Keypad({handleClick}){

    const keypadData = buttonData.map(button => 
        <button 
            key={button.key} 
            onClick={event => handleClick(event.target.value)} 
            value={button.value}>
            {button.label}
        </button>
    )
    
    return(<div>{keypadData}</div>)
}

export default Keypad;