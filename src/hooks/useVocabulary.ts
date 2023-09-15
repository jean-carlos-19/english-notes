import { ModelVocabulary } from '@/models';
import { useState } from 'react';

const useVocabulary = () => {
 const [vocabulary, setVocabulary] = useState<ModelVocabulary>({
  category: '',
  name: '',
  translation: '',
 });
 const handlerSaveVocabulary = (values: ModelVocabulary) => {
  console.log(handlerSaveVocabulary);
 };
 return { vocabulary, handlerSaveVocabulary };
};
export { useVocabulary };
