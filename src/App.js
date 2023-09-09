import './App.css';
import { useState } from 'react';

function App() {

  const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  const [weight, setweight] = useState('')
  const [gender, setgender] = useState('female')
  const [bottles, setBottle] = useState(1);
  const [time, setTime] = useState(1); 
  const [results, setResults] = useState(0); 


  const calculate = () => {
    let results = 0

    let litres = parseInt(bottles) * 0.33
    let grams = litres * 8 * 4.5
    let burning = parseInt(weight) / 10
    let gramsLeft = grams - (burning * parseInt(time))

    if (gender === 'female') {
      results = gramsLeft / (weight * 0.6)
    }

    else {
      results = gramsLeft / (weight * 0.7)
    }
    setResults(Math.max(0, results));
    
  }



  return (
    <div>
      <div>
        <label>Weight in kilograms:  </label>
        <input type='number' value={weight} onChange={e => setweight(e.target.value)}/>
      </div>
      <div>
      <label>Bottle: </label>
      <select value={bottles} onChange={e => setBottle(e.target.value)}>
        {
          num.map(bottle => (
            <option value={bottle}> {bottle} bottles</option>
          ))
        }
      </select>
      </div>
      <div>
      <label>Time since started drinking: </label>
      <select value={time} onChange={e => setTime(e.target.value)}>
      {
          num.map(hour => (
            <option  value={hour}> {hour}  hours</option>
          ))
        }
      </select>
      </div>
      <div>
      <label>Gender  </label>
      <input type="radio" name="gender" value="female" defaultChecked onChange={e => setgender(e.target.value)}/><label>Female</label>
        <input type="radio" name="gender" value="male" onChange={e => setgender(e.target.value)}/><label>Male</label>
      </div>
      <div>
        <label>Results: </label>
      <output>{results.toFixed(2)} </output>
      </div>
      <div>
        <button type='button' onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
