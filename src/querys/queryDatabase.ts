/* tables of the database */
const queryTables = [
 `
   CREATE TABLE IF NOT EXISTS debts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       community TEXT NOT NULL,
       customer TEXT  NOT NULL,
       description TEXT NOT NULL,
       fecha date NOT NULL,
       value REAL NOT NULL,
       credit REAL default 0,
       isCancel boolean DEFAULT FALSE,
       isActivate boolean DEFAULT TRUE
   );
   `,
 `
   CREATE TABLE IF NOT EXISTS comunities (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL UNIQUE,
       isActivate boolean DEFAULT TRUE
   );
   `,
];

/* show all tables */
const queryShowAlltables = `
  SELECT * FROM sqlite_master WHERE type = "table";
`;
/* show all tables */
const queryDeleteContentTables = [`delete from comunities;`, `delete from debts;`];
export { queryDeleteContentTables, queryTables, queryShowAlltables };
