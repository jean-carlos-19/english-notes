import { ConfigSqlite } from '@/configs';
import { ControllerVocabulary } from '@/controllers';
import { ModelCategory } from '@/models';
import { ResultSetError, ResultSet } from 'expo-sqlite';
import {
 queryCreate,
 queryEdit,
 queryDisable,
 queryEnable,
 querySearch,
 queryShow,
} from '@/querys';

class ServiceVocabulary extends ConfigSqlite implements ControllerVocabulary {
 public create = async (
  vocabulary: ModelCategory,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryCreate.Vocabulary, [])], false);
 };
 public enable = async (
  vocabulary: ModelCategory,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryEnable.Vocabulary, [])], false);
 };
 public disable = async (
  vocabulary: ModelCategory,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryDisable.Vocabulary, [])], false);
 };
 public edit = async (
  vocabulary: ModelCategory,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryEdit.Vocabulary, [])], false);
 };
 public search = async (name: string): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery('', [])], false);
 };
 public showAllEnable = async (): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery('', [])], false);
 };
 public showAllDisable = async (): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery('', [])], false);
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
