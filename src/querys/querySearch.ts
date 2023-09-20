const queryVerify = Object.freeze({
 Categories: `select idCategory, category from showAllEnableCategories where idCategory = ?;`,
 Vocabularies: `select * from showAllEnableVocabularies where idVocabulary = ?;`,
});

const queryShowAllEnable = Object.freeze({
 Categories: `select idCategory, category from showAllEnableCategories;`,
 Vocabularies: `select idVocabulary, vocabulary from showAllEnableVocabularies where idCategory = ?;`,
});
const queryShowAllDisable = Object.freeze({
 Categories: `select idCategory, category from showAllDisableCategories;`,
 Vocabularies: `select idVocabulary, vocabulary from showAllDisableVocabularies where idCategory = ?;`,
});
const querySearch = Object.freeze({
 Categories: `select idCategory, category from showAllEnableCategories where category = ?;`,
 Vocabularies: `select idVocabulary, vocabulary from showAllEnableVocabularies where vocabulary = ?;`,
});

export { querySearch, queryShowAllEnable, queryShowAllDisable, queryVerify };
