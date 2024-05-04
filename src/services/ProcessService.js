import axios from 'axios';

export const processYoutubeUrl = async (youtubeUrl, onProgress) => {
    const baseUrl = 'http://localhost:4000';
    if(!youtubeUrl){
        window.alert('Please paste a url');
        return;
    }

    // Initialize progress at 0%
    onProgress(0);
    let progress = 0;
    const incrementProgress = () => {
        if (progress < 95) { // Only increment to 95% to ensure it doesn't reach 100% prematurely
            progress += 5;
            onProgress(progress);
        }
    };

    // Set up a timer to increment progress every second
    const timer = setInterval(incrementProgress, 1000);

    try {
        const response = await axios({
            method: 'GET',
            url: `${baseUrl}/process?url=${encodeURIComponent(youtubeUrl)}`,
            responseType: 'blob'
        });

        clearInterval(timer); // Stop the progress timer as the download is complete
        onProgress(100); // Set progress to 100% on successful completion

        const mimeType = response.headers['content-type'] || 'audio/webm';
        const contentDisposition = response.headers['content-disposition'];
        let filename = 'download';
        if (contentDisposition) {
            const matches = /filename="?([^"]+)"?/.exec(contentDisposition);
            if (matches && matches[1]) {
                filename = matches[1];
            }
        }

        const blob = new Blob([response.data], { type: mimeType });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        clearInterval(timer); // Ensure to clear the timer in case of an error
        console.error('Error processing url:', error);
        window.alert('Error processing url. Please try again');
        onProgress(0); // Reset progress on error
    }
};