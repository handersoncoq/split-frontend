import React from "react";
import { CardContainer, CardTitle, CardContent, CardImage, CardTextarea,} from "../styles/CardStyles";
import { PrimaryButton } from "../styles/ButtonStyles";
import ProgressBar from "./ProgressBar";

function Card({
  title,
  content,
  imageUrl,
  showTextarea,
  placeholder,
  onButtonClick,
  buttonText,
  sup,
  url,
  setUrl,
  progress,
}) {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt="Card Image" />}
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>
        {content}
        {sup && <sup>{sup}</sup>}
      </CardContent>
      {showTextarea && (
        <CardTextarea
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={placeholder || "Enter your text"}
        />
      )}
      {progress > 0 && <ProgressBar progress={progress} />}
      {onButtonClick && buttonText && (
        <PrimaryButton onClick={onButtonClick}>{buttonText}</PrimaryButton>
      )}
    </CardContainer>
  );
}

export default Card;
