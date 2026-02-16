import { useState } from "react";

export default function SwapBox() {
  const [amount, setAmount] = useState("");

  const handleSwap = () => {
    alert("Swap executed (simulation)");
  };

  return (
    <div style={{ padding: 40 }}>
      <h3>Swap</h3>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}
