import React, { useState } from 'react';
import './TipCalculator.css';

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTip = () => {
    const billAmount = parseFloat(bill);
    const tipPercent = parseFloat(tipPercentage);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
      alert('Please enter valid numbers');
      return;
    }

    const tipAmount = billAmount * (tipPercent / 100);
    const totalBill = billAmount + tipAmount;

    setTip(tipAmount.toFixed(2));
    setTotal(totalBill.toFixed(2));
  };

  return (
    <div className="tip-calculator">
      <div className="input-group">
        <label htmlFor="bill">Bill Amount:</label>
        <input
          type="number"
          id="bill"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="Enter bill amount"
        />
      </div>
      <div className="input-group">
        <label htmlFor="tipPercentage">Tip Percentage:</label>
        <input
          type="number"
          id="tipPercentage"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          placeholder="Enter tip percentage"
        />
      </div>
      <button onClick={calculateTip}>Calculate Tip</button>
      {tip > 0 && (
        <div className="results">
          <p>Tip Amount: ${tip}</p>
          <p>Total Bill: ${total}</p>
        </div>
      )}
    </div>
  );
}

export default TipCalculator;