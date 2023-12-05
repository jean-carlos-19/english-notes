import { object, string } from 'yup';
import { ModelCategory, ModelVocabulary } from '@/models';

const validationCategory = object<ModelCategory>({
 category: string().required('Enter a category'),
});
const validationVocabulary = object<ModelVocabulary>({
 vocabulary: string().required('Enter a vocabulary'),
 translation: string().required('Enter ypur translation'),
});
const validationSearch = object<ModelVocabulary>({
 search: string().required('Enter a search'),
});
export { validationCategory, validationVocabulary, validationSearch };