const queryVerify = Object.freeze({
 Categories: `select idCategory, name from showAllEnableCategories where idCategory = ?;`,
 Vocabularies: `select * from showAllEnableVocabularies where idVocabulary = ?;`,
});

const queryShowAllEnable = Object.freeze({
 Categories: `select idCategory, name from showAllEnableCategories;`,
 Vocabularies: `select idVocabulary, name from showAllEnableVocabularies;`,
});
const queryShowAllDisable = Object.freeze({
 Categories: `select idCategory, name from showAllDisableCategories;`,
 Vocabularies: `select idVocabulary, name from showAllDisableVocabularies;`,
});
const querySearch = Object.freeze({
 Categories: `select idCategory, name from showAllEnableCategories where name like ?||'%';`,
 Vocabularies: `select idVocabulary, name from showAllEnableVocabularies where name like ?||'%';`,
});

export { querySearch, queryShowAllEnable, queryShowAllDisable, queryVerify };
