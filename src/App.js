import React from 'react';
import './App.css';
import { data } from './data';
import { click } from '@testing-library/user-event/dist/click';


function App() {
  const [clicked, setClicked] = React.useState(null)

  const toggle = (index) => {

    if (clicked === index) {
      return setClicked(null)
    } else {
      setClicked(index)
    }

  }

  return (
    <div className="wrapper">
      <div className='accordion'>
        {
          data.map((item, index) => (
            <div key={index} className='item'>

              <div onClick={() => toggle(index)} className='title'>
                <h2 className='title-text'>{item.question}</h2>
                <span>{clicked === index ? '-' : '+'}</span>
              </div>

              <div className={clicked === index ? 'item-answer show' : 'item-answer'}>{item.answer}</div>
            
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
