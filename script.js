// Animate progress bar on load
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        // Small delay for visual effect
        setTimeout(() => {
            progressBar.style.width = '0.192%'; // $48 / $25,000
        }, 100);
    }

    // Donate button click handler (just shows an alert since no backend)
    const donateBtn = document.querySelector('.donate-btn');
    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            alert('Whatever you are thinking of donating, it is not enough.');
        });
    }

    // Share button click handler
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Help Brian Find Better Friends in His Final Quarter',
                    text: 'Check out this hilarious GoFundMe campaign!',
                    url: window.location.href
                }).catch(err => {
                    console.log('Error sharing:', err);
                    copyToClipboard();
                });
            } else {
                copyToClipboard();
            }
        });
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            const originalText = shareBtn.textContent;
            shareBtn.textContent = 'Copied!';
            setTimeout(() => {
                shareBtn.textContent = originalText;
            }, 2000);
        });
    }
});




