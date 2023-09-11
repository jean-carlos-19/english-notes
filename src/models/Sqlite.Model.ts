import { queryTables } from '@/querys';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

abstract class SqliteModel {
 public createDataBase = async () => {
  //   await FileSystem.deleteAsync(FileSystem.documentDirectory + 'SQLite');
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
   await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  this.db = SQLite.openDatabase('natural-client.db');
  await this.createTables();
 };
 private createTables = async () => {
  await this.db?.transactionAsync(async (tx) => {
   queryTables.map(async (query) => {
    await tx.executeSqlAsync(query);
   });
  });
 };
 public constructor() {}
 public db: SQLite.SQLiteDatabase | undefined;
}
export { SqliteModel };
