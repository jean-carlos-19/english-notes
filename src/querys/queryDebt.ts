/* search the debts */
const queryCancalDebt = `
update debts set isCancel = 1 WHERE id = ? AND isActivate = 1;
`;
/* search the debts */
const queryUpdateDebt = `
update debts set community = (?),customer = (?),description = (?),value = (?) WHERE id = (?) AND isActivate = 1;
`;
/* search the debts */
const queryUpdatCreediteDebt = `
update debts set credit = (?) WHERE id = (?) AND isActivate = 1;
`;
/* search allt the debts */
const querySearchAllDebts = `
SELECT * FROM debts WHERE isActivate = 1;
`;
/* search the debts for community */
const querySearchDebts = `
SELECT id, customer  FROM debts WHERE community = (?) AND isActivate = 1 and isCancel = 0 ORDER BY customer;
`;
const querySearchAllCommunitiesDebts = `
SELECT id, community as name FROM debts WHERE isActivate = 1 and isCancel = 0 GROUP BY name ORDER BY name;
`;
/* search the debts for community and person */
const querySearchDebtsPerson = `
SELECT id, customer, description, fecha, (value - credit) as value  FROM debts WHERE community = (?) AND isActivate = 1 AND isCancel = 0 ORDER BY customer;
`;
/* search the debts */
const queryDebt = `
SELECT community, customer, description,fecha, (value - credit) as value FROM debts WHERE id = ? AND isActivate = 1 AND isCancel = 0 ORDER BY customer;
`;
/* search the debts */
const queryValueDebt = `
SELECT value FROM debts WHERE id = ? AND isActivate = 1 AND isCancel = 0;
`;
/* create new debts */
const queryCreateDebts = `
INSERT INTO debts (community,customer,description,fecha,value) VALUES (?,?,?,?,?)
`;
/* create new debts */
const querySearchDebt = `
SELECT community, customer, description, (value - credit) as value FROM debts WHERE id = (?) AND isActivate = 1 AND isCancel = 0;
`;
export {
 queryDebt,
 queryCancalDebt,
 querySearchDebt,
 queryUpdateDebt,
 queryCreateDebts,
 querySearchDebts,
 querySearchAllDebts,
 querySearchDebtsPerson,
 queryUpdatCreediteDebt,
 queryValueDebt,
 querySearchAllCommunitiesDebts,
};
