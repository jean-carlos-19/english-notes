import { DebtController } from '@/controllers';
import { CreditModel, DebtModel, SqliteModel } from '@/models';
import {
 queryCreateDebts,
 queryDebt,
 querySearchDebt,
 queryCancalDebt,
 querySearchDebts,
 querySearchAllDebts,
 queryDeleteContentTables,
 querySearchAllCommunitiesDebts,
 queryUpdateDebt,
 queryUpdatCreediteDebt,
} from '@/querys';

class DebtService extends SqliteModel implements DebtController {
 public updateCreditDebt = async (id: number, values: CreditModel) => {
  return await this.db?.execAsync([this.customQuery(queryUpdatCreediteDebt, [values.credit, id])], false);
 };
 public getDebt = async (id: number) => {
  return await this.db?.execAsync([this.customQuery(querySearchDebt, [id])], false);
 };
 public deleteContentTables = async () => {
  queryDeleteContentTables.forEach(async (query: string) => {
   return await this.db?.execAsync([this.customQuery(query, [])], false);
  });
 };
 public updateDebt = async (datas: DebtModel, id: number) => {
  return await this.db?.execAsync(
   [this.customQuery(queryUpdateDebt, [datas.community!, datas.customer!, datas.description!, datas.value!, id])],
   false,
  );
 };

 public createDebts = async (datas: DebtModel) => {
  return await this.db?.execAsync(
   [
    this.customQuery(queryCreateDebts, [
     datas.community!,
     datas.customer!,
     datas.description!,
     new Date().toDateString(),
     datas.value!,
    ]),
   ],
   false,
  );
 };
 public searchDebt = async (id: number) => {
  return await this.db?.execAsync([this.customQuery(queryDebt, [id])], false);
 };

 public cancelDebt = async (id: number) => {
  return await this.db?.execAsync([this.customQuery(queryCancalDebt, [id])], false);
 };

 public searchAllDebts = async () => {
  return await this.db?.execAsync([this.customQuery(querySearchAllDebts, [])], false);
 };

 public searchAllCommunitiesDebts = async () => {
  return await this.db?.execAsync([this.customQuery(querySearchAllCommunitiesDebts, [])], false);
 };

 public searchDebts = async (comunity: string) => {
  return await this.db?.execAsync([this.customQuery(querySearchDebts, [comunity])], false);
 };
 public customQuery = (query: string, params: unknown[]) => {
  return {
   sql: query,
   args: params,
  };
 };
 public static getService = (): DebtService => {
  if (this.service === undefined) this.service = new DebtService();
  return this.service;
 };
 private constructor() {
  super();
 }
 private static service: DebtService;
}
export { DebtService };
