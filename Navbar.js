import { connectWallet } from "../lib/connectWallet";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#000", color: "#fff" }}>
      <h2>ASTERO DEX</h2>
      <button onClick={connectWallet}>Connect Wallet</button>
    </nav>
  );
}
