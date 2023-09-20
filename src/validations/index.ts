import * as SQLite from 'expo-sqlite';
import { ModelCategory, ModelVocabulary } from '@/models';
import { object, string } from 'yup';
import { ServiceCategory } from '@/services';
const serviceCategory = ServiceCategory.getService();

const validationCategory = object<ModelCategory>({
 category: string()
  .required('Enter a category')
  .test('', 'Category exist', async (value) => {
   const rs = await serviceCategory.search(value);
   return !((rs as SQLite.ResultSet[])[0].rows.length > 0);
  }),
});
const validationVocabulary = object<ModelVocabulary>({
 vocabulary: string().required('Enter a vocabulary'),
 translation: string().required('Enter ypur translation'),
});
export { validationCategory, validationVocabulary };
