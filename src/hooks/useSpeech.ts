import * as Speech from 'expo-speech';
import { useState } from 'react';

const useSpeech = () => {
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const handlerSpeak = (text: string) => {
  setIsLoading(true);
  const thingToSay = text;
  Speech.speak(thingToSay, { language: 'en-US', onStart: () => setIsLoading(false) });
 };
 return { isLoading, handlerSpeak };
};
export { useSpeech };
