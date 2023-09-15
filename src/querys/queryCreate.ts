const Category = `insert into categories(name) values(?); `;
const Vocabulary = ` insert into vocabularies(category,name,translation) values(?,?,?);`;
const queryCreate = Object.freeze({
 Category,
 Vocabulary,
});
export { queryCreate };
