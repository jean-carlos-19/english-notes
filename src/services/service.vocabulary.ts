import { ConfigSqlite } from '@/configs';
import { ControllerVocabulary } from '@/controllers';
import { ModelVocabulary } from '@/models';
import { ResultSetError, ResultSet } from 'expo-sqlite';
import {
 queryEdit,
 queryCreate,
 queryEnable,
 querySearch,
 queryDisable,
 queryShowAllDisable,
 queryShowAllEnable,
 queryVerify,
} from '@/querys';

class ServiceVocabulary extends ConfigSqlite implements ControllerVocabulary {
 public create = async (
  vocabulary: ModelVocabulary,
  idCategory: number,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
    console.log("query - ",vocabulary,idCategory)
  return await this.db?.execAsync(
   [
    this.customQuery(queryCreate.Vocabulary, [
     idCategory,
     vocabulary.vocabulary,
     vocabulary.translation,
    ]),
   ],
   false,
  );
 };
 public enable = async (
  idVocabulary: number,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync(
   [this.customQuery(queryEnable.Vocabulary, [idVocabulary])],
   false,
  );
 };
 public disable = async (
  idVocabulary: number,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync(
   [this.customQuery(queryDisable.Vocabulary, [idVocabulary])],
   false,
  );
 };
 public edit = async (
  vocabulary: ModelVocabulary,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync(
   [
    this.customQuery(queryEdit.Vocabulary, [
     vocabulary.vocabulary,
     vocabulary.translation,
     vocabulary.idVocabulary,
    ]),
   ],
   false,
  );
 };
 public verify = async (id: number): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryVerify.Vocabularies, [id])], false);
 };
 public search = async (name: string): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(querySearch.Vocabularies, [name])], false);
 };
 public showAllEnable = async (
  idCategory: number,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync(
   [this.customQuery(queryShowAllEnable.Vocabularies, [idCategory])],
   false,
  );
 };
 public showAllDisable = async (
  idCategory: number,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync(
   [this.customQuery(queryShowAllDisable.Vocabularies, [idCategory])],
   false,
  );
 };

 public static getService = (): ServiceVocabulary => {
  if (this.service === undefined) this.service = new ServiceVocabulary();
  return this.service;
 };
 private constructor() {
  super();
 }

 private static service: ServiceVocabulary;
}
export { ServiceVocabulary };
