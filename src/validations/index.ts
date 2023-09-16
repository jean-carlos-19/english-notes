import { ModelCategory } from '@/models';
import { object, string } from 'yup';
import { ServiceCategory } from '@/services';
const serviceCategory = ServiceCategory.getService();

const validationCategory = object<ModelCategory>({
 name: string()
  .required('Ingrese una categoria')
  .test('', '', async (value) => {
   const rs = await serviceCategory.search(value);
   //  console.log(rs);
   return true;
  }),
});
const validationVocabulary = Object({
 category: string().required('Ingrese una categoria '),
 name: string().required('Ingrese un nombre'),
 translation: string().required('Ingrese la traduccion'),
});
export { validationCategory, validationVocabulary };
