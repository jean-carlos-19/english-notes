const queryViews = [
 `
    create view if not exists showAllEnableCategories as
    select 
      idCategory, lower(category) as category
    from categories 
    where isActivate = 1
    order by category;
    `,
 `
    create view if not exists showAllEnableVocabularies as
    select 
        idVocabulary,
        vocabularies.idCategory as idCategory,
        lower(categories.category) as category, 
        lower(vocabularies.vocabulary) as vocabulary, 
        lower(translation) as translation 
    from vocabularies 
    inner join categories on categories.idCategory = vocabularies.idCategory
    where vocabularies.isActivate = 1
    order by vocabularies.vocabulary; 
    `,
 `
    create view if not exists showAllDisableCategories as
    select 
        idCategory, 
    lower(category) as category
    from categories 
    where  isActivate = 0
    order by category; 
    `,
 `
    create view if not exists showAllDisableVocabularies as
    select 
        idVocabulary,
        vocabularies.idCategory as idCategory,
        lower(categories.category) as category, 
        lower(vocabularies.vocabulary) as vocabulary, 
        lower(translation) as translation
    from vocabularies 
    inner join categories on categories.idCategory = vocabularies.idCategory
    where  vocabularies.isActivate = 0 
    order by vocabularies.vocabulary; 
    `,
];
export { queryViews };
