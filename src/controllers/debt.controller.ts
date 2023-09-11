import { CreditModel, DebtModel } from '@/models';
import * as SQLite from 'expo-sqlite';

interface DebtController {
 createDebts: (datas: DebtModel) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchAllDebts: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchAllCommunitiesDebts: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchDebts: (comunity: string) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchDebt: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 deleteContentTables: () => void;
 customQuery: (query: string, params: unknown[]) => SQLite.Query;
 cancelDebt: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 getDebt: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 updateDebt: (datas: DebtModel, id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 updateCreditDebt: (
  id: number,
  values: CreditModel,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
}
export type { DebtController };
