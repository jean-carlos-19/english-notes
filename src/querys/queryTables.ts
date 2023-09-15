const queryTables = [
 `
    create table if not exists categories(
        idCategory integer primary key AUTOINCREMENT,
        name varchar(50) not null,
        isActivate boolean default true
    );
    `,
 `
    create table if not exists  verbs (
        idVerb integer primary key AUTOINCREMENT,
        simplePresent varchar(50) not null,
        simplePast varchar(50) not null,
        presentTranslation text not null,
        pastTranslation text not null,
        examples text not null,
        isActivate boolean default true
    );
    `,
 `
    create table if not exists vocabularies(
        idVocabulary integer primary key AUTOINCREMENT,
        category varchar(50) not null,
        name text not null,
        translation text not null,
        isActivate boolean default true
    );
    `,
 `
    create table if not exists phrasalVerbs (
        idPhrasalVerb integer primary key autoincrement,
        name varchar(50) not null unique,
        translation varchar(50) not null,
        examples text not null,
        isActivate boolean default true
    );
    `,
 `
    create table if not exists idioms(
        idIdioms integer primary key autoincrement,
        name varchar(50) not null,
        tranlation varchar(50) not null,
        exmaples text not null,
        isActivate boolean default true
    );
    `,
 `
    create table if not exists histories(
        idHistory integer not null,
        title varchar(50) not null,
        content text not null,
        translation text not null,
        isActivate boolean default true
    );
    `,
];
export { queryTables };
