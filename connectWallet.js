export async function connectWallet() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    alert("Wallet Connected");
  } else {
    alert("Install Phantom");
  }
}
