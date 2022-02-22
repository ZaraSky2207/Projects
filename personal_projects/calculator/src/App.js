import { useState } from "react";

function App() {

	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	//setting what our operators are equal to
	const ops = ['/', '*', '+', '-', '.'];


	const updateCalc = value => {
		// if the last value is an operator & the calc has nothing or the value is an operator  
		if (
			ops.includes(value) && calc === '' ||
			ops.includes(value) && ops.includes(calc.slice(-1)
			)
		) {
			return;
		}
// not able to add double operators without a digit 

		setCalc(calc + value);
		//if last item is not a operator set result to evaluation
		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}

	//creating a function for the digits in the calculator 
	const createDigits= () => {
		const digits = [];
		
	// numbers 1to 9 finish before 10
		for (let i = 1; i < 10; i++) {
			digits.push(
				<button 
				onClick={() => updateCalc(i.toString())} 
					key={i}>
						{i}
				</button>
			)
		}
		return digits;
	}

	const calculate = () => {
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
		if (calc === '') {
			return;
		}
		const value = calc.slice(0, -1);
		setCalc(value);
	}


	// line 33 if there is a value we will show it if not it will display 0
	return (
		<div className="App">
			<div className="calculator">
			<div className="display">
				{result ? <span>({result})</span> : '' } { calc || "0"}&nbsp;  
			</div>
			<div className="operators">
				<button onClick={() => updateCalc('/')}>/</button>
				<button onClick={() => updateCalc('*')}>*</button>
				<button onClick={() => updateCalc('+')}>+</button>
				<button onClick={() => updateCalc('-')}>-</button>

				<button onClick={deleteLast}>DEL</button>
				</div>

			<div className="digits">
			{ createDigits() } 
			<button onClick={() => updateCalc('0')}>0</button> 
			<button onClick={() => updateCalc('.')}>.</button>

			<button onClick={calculate}>=</button>
			</div>
			</div>
		</div>
	);
}

export default App;
