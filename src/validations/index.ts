import { ModelCategory } from '@/models';
import { object, string } from 'yup';

const validationCategory = object<ModelCategory>({
 name: string().required('Ingrese una categoria'),
});
const validationVocabulary = Object({
 category: string().required('Ingrese una categoria '),
 name: string().required('Ingrese un nombre'),
 translation: string().required('Ingrese la traduccion'),
});
export { validationCategory, validationVocabulary };
