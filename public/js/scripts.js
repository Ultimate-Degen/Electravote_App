document.addEventListener('DOMContentLoaded', function() {
    const connectWalletButton = document.getElementById('connectWallet');
    const disconnectWalletButton = document.getElementById('disconnectWallet');
    let provider;

    const dotsCircle = document.getElementById('dotsCircle');

    if (connectWalletButton) {
        connectWalletButton.addEventListener('click', connectWallet);
    }

    if (disconnectWalletButton) {
        disconnectWalletButton.addEventListener('click', disconnectWallet);
    }

    dotsCircle.addEventListener('mousemove', (e) => {
        const rect = dotsCircle.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Apply rotation and scale based on mouse position
        const rotation = ((x - rect.width / 2) / rect.width) * 30; // Smaller rotation for subtle effect
        const scale = 1 + ((y - rect.height / 2) / rect.height) * 0.1; // Slight scale

        dotsCircle.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    });

    dotsCircle.addEventListener('mouseleave', () => {
        dotsCircle.style.transform = 'rotate(0deg) scale(1)';
    });

    async function connectWallet() {
        if (window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            try {
                await provider.send("eth_requestAccounts", []);
                const accounts = await provider.listAccounts();
                const address = accounts[0];
                alert(`Connected: ${address}`);
                
                connectWalletButton.style.display = 'none';
                disconnectWalletButton.style.display = 'inline-block';
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

        connectWalletButton.style.display = 'inline-block';
        disconnectWalletButton.style.display = 'none';
    }
});
