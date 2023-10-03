import { Search } from '@/types';
import * as SQLite from 'expo-sqlite';
import { ModelCategory } from '@/models';

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
 search: (search: Search) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllEnable: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllDisable: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
}
export type { ControllerCategory };
