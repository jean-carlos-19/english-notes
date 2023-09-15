import { queryTables, queryViews } from '@/querys';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

abstract class ConfigSqlite {
 public createDataBase = async () => {
  //   await FileSystem.deleteAsync(FileSystem.documentDirectory + 'SQLite');
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
   await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  this.db = SQLite.openDatabase('english-note.db');
  await this.createTables();
  await this.createViews();
 };
 private createTables = async () => {
  await this.db?.transactionAsync(async (tx) => {
   queryTables.map(async (query) => {
    await tx.executeSqlAsync(query);
   });
  });
 };
 private createViews = async () => {
  await this.db?.transactionAsync(async (tx) => {
   queryViews.map(async (query) => {
    await tx.executeSqlAsync(query);
   });
  });
 };
 public customQuery = (query: string, params: unknown[]) => {
  return {
   sql: query,
   args: params,
  };
 };
 public constructor() {}
 public db: SQLite.SQLiteDatabase | undefined;
}
export { ConfigSqlite };
