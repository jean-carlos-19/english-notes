const Category = `
update categories set
name = ?
where idCategory = ?;
`;
const Vocabulary = `
update vocabularies set
name = ?,
translation = ?
where idVocabulary = ?;
`;
const queryEdit = Object.freeze({
 Category,
 Vocabulary,
});
export { queryEdit };
