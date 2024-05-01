import React, { useState } from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import Card from './components/Card';
import Disclaimer from './components/Disclaimer';
import AppBar from './components/AppBar';
import { processYoutubeUrl } from './services/ProcessService';

function App() {

  const [url, setUrl] = useState('');

  function processUrl() {
    processYoutubeUrl(url);
  }
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
        />
        <Disclaimer
          text = {`Disclaimer: This application is provided "as is" without any guarantees or warranty. Users are solely responsible for the legality of their actions when using this app. This app is not affiliated with YouTube, and users must ensure they have the necessary rights to download and modify content from YouTube. Use at your own risk.`}
          sup="1"
        />
      </div>
    </>
  );
}

export default App;
