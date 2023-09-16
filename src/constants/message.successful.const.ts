/*  */
const messageCategoryDialog = Object.freeze({
 create: '',
 edit: '¿Are you sure update the category?',
 disable: '¿are you sure eliminate the category?',
 enable: '¿are you sure enable the category ? ',
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
export { messageSuccessCategory, messageCategoryDialog };
