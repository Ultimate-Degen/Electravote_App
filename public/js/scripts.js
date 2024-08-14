document.addEventListener('DOMContentLoaded', function() {
    const connectWalletButton = document.getElementById('connectWallet');
    const disconnectWalletButton = document.getElementById('disconnectWallet');
    let provider;

    const dotsCircle = document.getElementById('dotsCircle');

    dotsCircle.addEventListener('mousemove', (e) => {
        const rect = dotsCircle.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        // Apply a rotation based on the mouse position
        dotsCircle.style.transform = `translate(-50%, -50%) rotate(${(x + y) / 10}deg)`;
    });

    dotsCircle.addEventListener('mouseleave', () => {
        // Reset the rotation when the mouse leaves the element
        dotsCircle.style.transform = 'translate(-50%, -50%)';
    });

    async function connectWallet() {
        if (window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            try {
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                alert(`Connected: ${address}`);
                // Optionally update the UI with the connected wallet address
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    }

    function disconnectWallet() {
        provider = null;
        alert('Wallet disconnected');
        // Optionally update the UI to reflect the disconnection
    }

    connectWalletButton.addEventListener('click', connectWallet);
    disconnectWalletButton.addEventListener('click', disconnectWallet);
});
