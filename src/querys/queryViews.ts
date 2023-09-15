const queryViews = [
 `
    create view if not exists showAllEnableCategories as
    select idCategory, lower(name) as name
    from categories 
    where isActivate = 1
    order by name;
    `,
 `
    create view if not exists showAllEnableVerbs as
    select 
        idVerb, 
        lower(simplePresent) as simplePresent, 
        lower(simplePast) as simplePast,  
        lower(presentTranslation) as presentTranslation, 
        lower(pastTranslation) as pastTranslation, 
        lower(examples) as examples
    from verbs 
    where isActivate = 1
    order by simplePresent; 
    `,
 `
    create view if not exists showAllEnableVocabularies as
    select 
        idVocabulary,
        lower(category) as category, 
        lower(name) as name, 
        lower(translation) as translation 
    from vocabularies 
    where isActivate = 1
    order by name; 
    `,
 `
    create view if not exists showAllDisableCategories as
    select 
        idCategory, 
    lower(name) as name
    from categories 
    where  isActivate = 0
    order by name; 
    `,
 `
    create view if not exists showAllDisableVocabularies as
    select 
        idVocabulary,
        lower(category) as category, 
        lower(name) as name, 
        lower(translation) as translation 
    from vocabularies 
    where  isActivate = 0
    order by name; 
    `,
 `
    create view if not exists showAllDisableVerbs as
    select 
        idVerb, 
        lower(simplePresent) as simplePresent, 
        lower(simplePast) as simplePast,  
        lower(presentTranslation) as presentTranslation, 
        lower(pastTranslation) as pastTranslation, 
        lower(examples) as examples
    from verbs 
    where  isActivate = 0
    order by  simplePresent; 
   `,
];
export { queryViews };
