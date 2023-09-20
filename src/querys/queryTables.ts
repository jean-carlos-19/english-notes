const queryTables = [
 `
    create table if not exists categories(
        idCategory integer primary key AUTOINCREMENT,
        category varchar(50) unique not null ,
        isActivate boolean default true
    );
    `,
 `
    create table if not exists vocabularies(
        idVocabulary integer primary key AUTOINCREMENT,
        idCategory integer not null,
        vocabulary text not null,
        translation text not null,
        isActivate boolean default true,
        FOREIGN KEY (idCategory)
        REFERENCES categories (idCategory) 
    );
    `,
];
export { queryTables };
