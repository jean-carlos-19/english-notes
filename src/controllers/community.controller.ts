import * as SQLite from 'expo-sqlite';

interface CommunityController {
 createCommunity: (name: string) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchAllCommunity: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchAllCommunitiesDebts: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchAllDisabledCommunity: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchCommunity: (community: string) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 searchValueCredit: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 deleteCommunity: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 customQuery: (query: string, params: unknown[]) => SQLite.Query;
 deleteContentTables: () => void;
 enableCommunity: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
}
export type { CommunityController };
