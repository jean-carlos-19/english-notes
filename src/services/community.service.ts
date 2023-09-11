import { CommunityController } from '@/controllers';
import { SqliteModel } from '@/models';
import {
 queryCreateCommunity,
 queryDeleteCommunity,
 queryDeleteContentTables,
 querySearchAllCommunity,
 queryEnableCommunity,
 querySearchCommunity,
 querySearchAllDisabledCommunity,
 querySearchAllCommunitiesDebts,
 queryValueDebt,
} from '@/querys';

class CommunityService extends SqliteModel implements CommunityController {
 public searchValueCredit = async (id: number) => {
  return await this.db?.execAsync([this.customQuery(queryValueDebt, [id])], false);
 };
 public deleteContentTables = async () => {
  queryDeleteContentTables.forEach(async (query: string) => {
   await this.db?.execAsync([this.customQuery(query, [])], false);
  });
 };

 public deleteCommunity = async (id: number) => {
  return await this.db?.execAsync([this.customQuery(queryDeleteCommunity, [id])], false);
 };

 public createCommunity = async (name: string) => {
  return await this.db?.execAsync([this.customQuery(queryCreateCommunity, [name])], false);
 };

 public searchAllCommunity = async () => {
  return await this.db?.execAsync([this.customQuery(querySearchAllCommunity, [])], false);
 };

 public searchAllCommunitiesDebts = async () => {
  return await this.db?.execAsync([this.customQuery(querySearchAllCommunitiesDebts, [])], false);
 };

 public searchAllDisabledCommunity = async () => {
  return await this.db?.execAsync([this.customQuery(querySearchAllDisabledCommunity, [])], false);
 };

 public searchCommunity = async (community: string) => {
  return await this.db?.execAsync([this.customQuery(querySearchCommunity, [community])], false);
 };

 public enableCommunity = async (id: number) => {
  return await this.db?.execAsync([this.customQuery(queryEnableCommunity, [id])], false);
 };

 public customQuery = (query: string, params: unknown[]) => {
  return {
   sql: query,
   args: params,
  };
 };

 public static getService = (): CommunityService => {
  if (this.service === undefined) this.service = new CommunityService();
  return this.service;
 };

 private constructor() {
  super();
 }

 private static service: CommunityService;
}
export { CommunityService };
