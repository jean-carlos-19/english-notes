const queryEnable = Object.freeze({
 Category: `update categories set isActivate = 1 where idCategory = ?;`,
 Vocabulary: `update vocabularies set isActivate = 1 where idVocabulary = ?;`,
});
const queryDisable = Object.freeze({
 Category: `update categories set isActivate = 0 where idCategory = ?;`,
 Vocabulary: `update vocabularies set isActivate = 0 where idVocabulary = ?;`,
});
export { queryEnable, queryDisable };
