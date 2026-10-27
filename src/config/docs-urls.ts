/**
 * Centralized Documentation URL Constants
 *
 * All documentation paths are relative and will be resolved with useBaseUrl.
 * When built with baseUrl: '/suggested-site/', these become '/suggested-site/docs/...'
 * When built with baseUrl: '/', these become '/docs/...'
 *
 * Apache Ignite 2 is the default version on the website: DOCS_QUICK_START and DOCS_INDEX
 * lead to it. The IGNITE3_* constants are for the pages that describe Ignite 3 specifically.
 *
 * When a new Ignite 2 version is released, also update the version in the
 * docs/ignite2/latest and releases/latest rules of .htaccess and in the "latest"
 * pointer file at the repository root (generate-sitemap.sh and the docs-publishing
 * workflow in apache/ignite read it).
 */

/**
 * Apache Ignite 2
 */
export const IGNITE2_VERSION = '2.18.0';

// "latest" is resolved to IGNITE2_VERSION by .htaccess.
export const IGNITE2_DOCS_BASE_PATH = '/docs/ignite2/latest';
export const IGNITE2_RELEASES_BASE_PATH = `/releases/ignite2/${IGNITE2_VERSION}`;

export const IGNITE2_DOCS_PATHS = {
  index: `${IGNITE2_DOCS_BASE_PATH}/`,
  quickStart: `${IGNITE2_DOCS_BASE_PATH}/quick-start/java`,
  installation: `${IGNITE2_DOCS_BASE_PATH}/installation/installing-using-zip`,
  clustering: `${IGNITE2_DOCS_BASE_PATH}/clustering/clustering`,
  dataModeling: `${IGNITE2_DOCS_BASE_PATH}/data-modeling/data-modeling`,
  keyValueApi: `${IGNITE2_DOCS_BASE_PATH}/key-value-api/basic-cache-operations`,
  persistence: `${IGNITE2_DOCS_BASE_PATH}/persistence/native-persistence`,
  monitoring: `${IGNITE2_DOCS_BASE_PATH}/monitoring-metrics/intro`,
  sql: `${IGNITE2_DOCS_BASE_PATH}/SQL/sql-introduction`,
  thinClients: `${IGNITE2_DOCS_BASE_PATH}/thin-clients/getting-started-with-thin-clients`,
  javadoc: `${IGNITE2_RELEASES_BASE_PATH}/javadoc/`,
  dotnetdoc: `${IGNITE2_RELEASES_BASE_PATH}/dotnetdoc/api/`,
} as const;

/**
 * Apache Ignite 3
 */
export const IGNITE3_VERSION = '3.1.0';
export const IGNITE3_DOCS_BASE_PATH = `/docs/ignite3/${IGNITE3_VERSION}`;

export const IGNITE3_DOCS_PATHS = {
  // Root
  index: IGNITE3_DOCS_BASE_PATH,

  // Getting Started
  gettingStarted: {
    quickStart: `${IGNITE3_DOCS_BASE_PATH}/getting-started/quick-start`,
    startCluster: `${IGNITE3_DOCS_BASE_PATH}/getting-started/start-cluster`,
    workWithSql: `${IGNITE3_DOCS_BASE_PATH}/getting-started/work-with-sql`,
    keyValueApi: `${IGNITE3_DOCS_BASE_PATH}/getting-started/key-value-api`,
  },

  // Develop
  develop: {
    igniteClients: `${IGNITE3_DOCS_BASE_PATH}/develop/ignite-clients`,
    transactions: `${IGNITE3_DOCS_BASE_PATH}/develop/work-with-data/transactions`,
    tableApi: `${IGNITE3_DOCS_BASE_PATH}/develop/work-with-data/table-api`,
    compute: `${IGNITE3_DOCS_BASE_PATH}/develop/work-with-data/compute`,
    streaming: `${IGNITE3_DOCS_BASE_PATH}/develop/work-with-data/streaming`,
  },

  // Configure and Operate
  configureAndOperate: {
    installation: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/installation`,
    installZip: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/installation/install-zip`,
    installDocker: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/installation/install-docker`,
    installKubernetes: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/installation/install-kubernetes`,
    storageOverview: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/configuration/config-storage-overview`,
    storagePersistent: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/configuration/config-storage-persistent`,
    clusterAndNodes: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/configuration/config-cluster-and-nodes`,
    colocation: `${IGNITE3_DOCS_BASE_PATH}/configure-and-operate/operations/colocation`,
  },

  // SQL
  sql: {
    index: `${IGNITE3_DOCS_BASE_PATH}/sql`,
    ddl: `${IGNITE3_DOCS_BASE_PATH}/sql/reference/language-definition/ddl`,
    distributionZones: `${IGNITE3_DOCS_BASE_PATH}/sql/reference/language-definition/distribution-zones`,
    systemViews: `${IGNITE3_DOCS_BASE_PATH}/sql/working-with-sql/system-views`,
  },

  // API Reference
  apiReference: {
    javaClient: `${IGNITE3_DOCS_BASE_PATH}/api-reference/native-clients/java`,
    jdbc: `${IGNITE3_DOCS_BASE_PATH}/api-reference/sql-only-apis/jdbc`,
  },
} as const;

/**
 * Default documentation entry points (Apache Ignite 2)
 */
export const DOCS_QUICK_START = IGNITE2_DOCS_PATHS.quickStart;
// Landing page uses /docs/ to let the docs site handle version routing
export const DOCS_INDEX = '/docs/';
