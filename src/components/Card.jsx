import React from 'react';
import { CardContainer, CardTitle, CardContent, CardImage, CardTextarea } from '../styles/CardStyles';
import { PrimaryButton } from '../styles/ButtonStyles';

function Card({ title, content, imageUrl, showTextarea, placeholder, onButtonClick, buttonText, sup }) {
      return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt="Card Image" />}
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{content}{sup && <sup>{sup}</sup>}</CardContent>
      {showTextarea && <CardTextarea placeholder={placeholder || "Enter your text"} />}
      {onButtonClick && buttonText && (
        <PrimaryButton onClick={onButtonClick}>
          {buttonText}
        </PrimaryButton>
      )}
    </CardContainer>
  );
}

export default Card;
