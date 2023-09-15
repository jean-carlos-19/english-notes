import { ModelCategory } from '@/models';
import * as SQLite from 'expo-sqlite';

interface ControllerVocabulary {
 create: (
  vocabulary: ModelCategory,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 enable: (
  vocabulary: ModelCategory,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 disable: (
  vocabulary: ModelCategory,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 edit: (
  vocabulary: ModelCategory,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 search: (name: string) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllEnable: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllDisable: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
}
export type { ControllerVocabulary };
