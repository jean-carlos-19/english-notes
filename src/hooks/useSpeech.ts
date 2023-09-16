import * as Speech from 'expo-speech';

const useSpeech = () => {
 const handlerSpeak = (text: string) => {
  const thingToSay = text;
  Speech.speak(thingToSay, { language: 'en-US' });
 };
 return { handlerSpeak };
};
export { useSpeech };
