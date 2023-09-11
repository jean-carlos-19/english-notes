/* search all the Community */
const querySearchAllCommunity = `
SELECT id, name FROM comunities WHERE isActivate = 1 ORDER BY name;
`;

const querySearchAllDisabledCommunity = `
SELECT id, name FROM comunities WHERE isActivate = 0 ORDER BY name;
`;
/* search one Community */
const querySearchCommunity = `
SELECT * FROM comunities WHERE name = ? AND isActivate = 1 ORDER BY name;
`;

/* create news Community */
const queryCreateCommunity = `
INSERT INTO comunities (name) VALUES (?);
`;
/* delete community */
const queryDeleteCommunity = `
    UPDATE comunities SET isActivate = 0 WHERE id = (?);
`;
/* delete community */
const queryEnableCommunity = `
    UPDATE comunities SET isActivate = 1 WHERE id = (?);
`;
export {
 queryCreateCommunity,
 queryDeleteCommunity,
 querySearchCommunity,
 queryEnableCommunity,
 querySearchAllCommunity,
 querySearchAllDisabledCommunity,
};
