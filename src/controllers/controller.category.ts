import { ModelCategory } from '@/models';
import * as SQLite from 'expo-sqlite';

interface ControllerCategory {
 create: (
  category: ModelCategory,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 enable: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 disable: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 edit: (
  category: ModelCategory,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 verify: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 search: (category: string) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllEnable: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllDisable: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
}
export type { ControllerCategory };
