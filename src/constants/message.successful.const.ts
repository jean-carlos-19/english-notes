/*  */
const messageCategoryDialog = Object.freeze({
 create: '',
 edit: '¿Are you sure update the category?',
 disable: '¿are you sure eliminate the category?',
 enable: '¿are you sure enable the category ? ',
});
const messageVocabularyDialog = Object.freeze({
 create: '',
 edit: '¿Are you sure update the vocabulary?',
 disable: '¿are you sure eliminate the vocabulary?',
 enable: '¿are you sure enable the vocabulary ? ',
});

const messageSuccessCategory = Object.freeze({
 create: {
  title: 'Success Message',
  text: 'new category created: ',
 },
 edit: {
  title: 'Editing Message',
  text: 'It was modified category: ',
 },
 disable: {
  title: 'Eliminating Message',
  text: 'It was eliminated category: ',
 },
 enable: {
  title: 'Enabling Message',
  text: 'It was enabled category: ',
 },
});
const messageSuccessVocabulary = Object.freeze({
 create: {
  title: 'Success Message',
  text: 'new vocabulary created: ',
 },
 edit: {
  title: 'Editing Message',
  text: 'It was modified vocabulary: ',
 },
 disable: {
  title: 'Eliminating Message',
  text: 'It was eliminated vocabulary: ',
 },
 enable: {
  title: 'Enabling Message',
  text: 'It was enabled vocabulary: ',
 },
});
export {
 messageSuccessCategory,
 messageCategoryDialog,
 messageVocabularyDialog,
 messageSuccessVocabulary,
};
