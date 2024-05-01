import axios from 'axios';

export const processYoutubeUrl = async (youtubeUrl) => {
    const baseUrl = 'http://localhost:4000';
    try {
        const response = await axios({
            method: 'GET',
            url: `${baseUrl}/process?url=${encodeURIComponent(youtubeUrl)}`,
            responseType: 'blob',
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'download.mp3');
        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log('File downloaded:', response.data);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
};
