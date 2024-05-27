import React, { useState } from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import Card from './components/Card';
import Disclaimer from './components/Disclaimer';
import AppBar from './components/AppBar';
import { processYoutubeUrl } from './services/ProcessService';

function App() {
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const handleProgress = (progressValue) => {
    setProgress(progressValue);
  };

  const processUrl = () => {
    setProgress(0);
    processYoutubeUrl(url, handleProgress);
    setUrl('')
  };

  return (
    <>
      <GlobalStyle />
      <div className='app-wrapper'>
        <AppBar />
        <div className='front-page-header'>
          <h1 className='front-page-title'>Split/</h1>
          <h4 className='front-page-subtitle'>Free & Simple. Always!</h4>
        </div>
        <Card 
          content="Paste your YouTube url here"
          sup="1"
          url={url}
          setUrl={setUrl}
          showTextarea = {true}
          placeholder = "https://www.youtube.com/watch?v=example"
          onButtonClick={processUrl}
          buttonText="Split"
          progress={progress}
        />
        <Disclaimer
          text={`This application is provided "as is" without any guarantees or warranty. In association with the product, Split makes no warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, of title, or of non-infringement of third-party rights. Use of the product by a user is at the user's risk.`}
          sup="1"
        />
      </div>
    </>
  );
}

export default App;
