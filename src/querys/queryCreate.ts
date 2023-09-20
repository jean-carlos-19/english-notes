const Category = `insert into categories(category) values(?); `;
const Vocabulary = ` insert into vocabularies(idCategory,vocabulary,translation) values(?,?,?);`;
const queryCreate = Object.freeze({
 Category,
 Vocabulary,
});
export { queryCreate };
