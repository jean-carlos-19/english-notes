import { ResultSetError, ResultSet } from 'expo-sqlite';
import {
 queryCreate,
 queryDisable,
 queryEdit,
 queryEnable,
 querySearch,
 queryVerify,
 queryShowAllEnable,
 queryShowAllDisable,
} from '@/querys';
import { ConfigSqlite } from '@/configs';
import { ControllerCategory } from '@/controllers';
import { ModelCategory } from '@/models';

class ServiceCategory extends ConfigSqlite implements ControllerCategory {
 public create = async (
  category: ModelCategory,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync(
   [this.customQuery(queryCreate.Category, [category.category])],
   false,
  );
 };
 public enable = async (id: number): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryEnable.Category, [id])], false);
 };
 public disable = async (id: number): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryDisable.Category, [id])], false);
 };
 public edit = async (
  category: ModelCategory,
 ): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync(
   [this.customQuery(queryEdit.Category, [category.category, category.idCategory])],
   false,
  );
 };
 public verify = async (id: number): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryVerify.Categories, [id])], false);
 };
 public search = async (category: string): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(querySearch.Categories, [category])], false);
 };
 public showAllEnable = async (): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryShowAllEnable.Categories, [])], false);
 };
 public showAllDisable = async (): Promise<(ResultSetError | ResultSet)[] | undefined> => {
  return await this.db?.execAsync([this.customQuery(queryShowAllDisable.Categories, [])], false);
 };

 public static getService = (): ServiceCategory => {
  if (this.service === undefined) this.service = new ServiceCategory();
  return this.service;
 };
 private constructor() {
  super();
 }
 private static service: ServiceCategory;
}
export { ServiceCategory };
