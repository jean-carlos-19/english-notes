const Category = `
update categories set
category = ?
where idCategory = ?;
`;
const Vocabulary = `
update vocabularies set
vocabulary = ?,
translation = ?
where idVocabulary = ?;
`;
const queryEdit = Object.freeze({
 Category,
 Vocabulary,
});
export { queryEdit };
