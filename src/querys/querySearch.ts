const queryVerify = Object.freeze({
 Categories: `select idCategory, category from showAllEnableCategories where idCategory = ?;`,
 Vocabularies: `select idVocabulary, vocabulary, translation from showAllEnableVocabularies where idVocabulary = ?;`,
});

const queryShowAllEnable = Object.freeze({
 Categories: `select idCategory, category from showAllEnableCategories;`,
 Vocabularies: `select idVocabulary, vocabulary, translation from showAllEnableVocabularies where idCategory = ?;`,
});
const queryShowAllDisable = Object.freeze({
 Categories: `select idCategory, category from showAllDisableCategories;`,
 Vocabularies: `select idVocabulary, vocabulary, translation from showAllDisableVocabularies where idCategory = ?;`,
});
const querySearch = Object.freeze({
 Categories: `select idCategory, category from showAllEnableCategories where category like '%'||?||'%';`,
 Vocabularies: `select idVocabulary, vocabulary, translation from showAllEnableVocabularies where category = ?  and ( vocabulary like '%'||?||'%' or translation like '%'||?||'%' );`,
});

export { querySearch, queryShowAllEnable, queryShowAllDisable, queryVerify };
