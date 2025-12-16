/**
 * Centralized Documentation URL Constants
 *
 * All documentation paths are relative and will be resolved with useBaseUrl.
 * When built with baseUrl: '/suggested-site/', these become '/suggested-site/docs/...'
 * When built with baseUrl: '/', these become '/docs/...'
 */

export const DOCS_VERSION = '3.1.0';
export const DOCS_BASE_PATH = `/docs/${DOCS_VERSION}`;

/**
 * Documentation paths organized by section
 */
export const DOCS_PATHS = {
  // Root
  index: DOCS_BASE_PATH,

  // Getting Started
  gettingStarted: {
    quickStart: `${DOCS_BASE_PATH}/getting-started/quick-start`,
    startCluster: `${DOCS_BASE_PATH}/getting-started/start-cluster`,
    workWithSql: `${DOCS_BASE_PATH}/getting-started/work-with-sql`,
    keyValueApi: `${DOCS_BASE_PATH}/getting-started/key-value-api`,
  },

  // Develop
  develop: {
    igniteClients: `${DOCS_BASE_PATH}/develop/ignite-clients`,
    transactions: `${DOCS_BASE_PATH}/develop/work-with-data/transactions`,
    tableApi: `${DOCS_BASE_PATH}/develop/work-with-data/table-api`,
    compute: `${DOCS_BASE_PATH}/develop/work-with-data/compute`,
    streaming: `${DOCS_BASE_PATH}/develop/work-with-data/streaming`,
  },

  // Configure and Operate
  configureAndOperate: {
    storageOverview: `${DOCS_BASE_PATH}/configure-and-operate/configuration/config-storage-overview`,
    storagePersistent: `${DOCS_BASE_PATH}/configure-and-operate/configuration/config-storage-persistent`,
    clusterAndNodes: `${DOCS_BASE_PATH}/configure-and-operate/configuration/config-cluster-and-nodes`,
    colocation: `${DOCS_BASE_PATH}/configure-and-operate/operations/colocation`,
  },

  // SQL
  sql: {
    index: `${DOCS_BASE_PATH}/sql`,
    ddl: `${DOCS_BASE_PATH}/sql/reference/language-definition/ddl`,
    distributionZones: `${DOCS_BASE_PATH}/sql/reference/language-definition/distribution-zones`,
    systemViews: `${DOCS_BASE_PATH}/sql/working-with-sql/system-views`,
  },

  // API Reference
  apiReference: {
    jdbc: `${DOCS_BASE_PATH}/api-reference/sql-only-apis/jdbc`,
  },
} as const;

/**
 * Flat exports for common paths (convenience)
 */
export const DOCS_QUICK_START = DOCS_PATHS.gettingStarted.quickStart;
export const DOCS_INDEX = DOCS_PATHS.index;
