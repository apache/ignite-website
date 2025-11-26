import React, {useState, useMemo} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  DownloadRelease,
  DockerImage,
  ignite3SourceReleases,
  ignite3BinaryReleases,
  ignite2SourceReleases,
  ignite2BinaryReleases,
  dockerImages,
} from '@site/src/data/downloads';
import {
  resolveMirrorUrl,
  getFileName,
  trackDownload,
} from '@site/src/components/Download/downloadUtils';
import styles from './styles.module.css';

type InstallMethod = 'binary' | 'source' | 'docker' | 'maven';

interface DownloadSelectorProps {
  variant: 'ignite3' | 'ignite2';
  preferredMirror?: string;
}

const codeStyle = {
  margin: 0,
  background: '#1e1e1e',
  padding: '16px 20px',
  borderRadius: '8px',
  fontSize: '14px',
};

function getReleases(variant: 'ignite3' | 'ignite2', method: InstallMethod): DownloadRelease[] {
  if (variant === 'ignite3') {
    return method === 'source' ? ignite3SourceReleases : ignite3BinaryReleases;
  }
  return method === 'source' ? ignite2SourceReleases : ignite2BinaryReleases;
}

function getDownloadUrl(release: DownloadRelease, method: InstallMethod): string | undefined {
  return method === 'source' ? release.sourceUrl : release.binaryUrl;
}

function getDockerImage(variant: 'ignite3' | 'ignite2'): DockerImage | undefined {
  return dockerImages.find((img) =>
    variant === 'ignite3' ? img.name.includes('Ignite 3') : img.name.includes('Ignite 2')
  );
}

export default function DownloadSelector({
  variant,
  preferredMirror,
}: DownloadSelectorProps): JSX.Element {
  const [activeMethod, setActiveMethod] = useState<InstallMethod>('binary');
  const [selectedVersion, setSelectedVersion] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [mavenTool, setMavenTool] = useState<'maven' | 'gradle'>('maven');

  const availableMethods: {id: InstallMethod; label: string; icon: string}[] = [
    {id: 'binary', label: 'Binary', icon: '📦'},
    {id: 'source', label: 'Source', icon: '📄'},
    {id: 'docker', label: 'Docker', icon: '🐳'},
    {id: 'maven', label: 'Maven/Gradle', icon: '🔧'},
  ];

  const releases = useMemo(
    () => getReleases(variant, activeMethod),
    [variant, activeMethod]
  );

  React.useEffect(() => {
    if (releases.length > 0 && (activeMethod === 'source' || activeMethod === 'binary')) {
      const latestRelease = releases.find((r) => r.latest) || releases[0];
      setSelectedVersion(latestRelease.version);
    } else if (activeMethod === 'maven' || activeMethod === 'docker') {
      const binaryReleases = getReleases(variant, 'binary');
      const latestRelease = binaryReleases.find((r) => r.latest) || binaryReleases[0];
      if (latestRelease) {
        setSelectedVersion(latestRelease.version);
      }
    }
  }, [releases, variant, activeMethod]);

  const currentRelease = useMemo(() => {
    if (activeMethod === 'maven' || activeMethod === 'docker') {
      const binaryReleases = getReleases(variant, 'binary');
      return binaryReleases.find((r) => r.version === selectedVersion);
    }
    return releases.find((r) => r.version === selectedVersion);
  }, [releases, selectedVersion, variant, activeMethod]);

  const dockerImage = useMemo(() => getDockerImage(variant), [variant]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadClick = (url: string) => {
    const fileName = getFileName(url);
    trackDownload(`${activeMethod}_download`, fileName);
  };

  // Documentation URLs for Ignite 3
  const IGNITE3_DOCS_BASE = 'https://ignite.apache.org/docs/ignite3/3.1.0';
  const IGNITE3_INSTALL_ZIP = `${IGNITE3_DOCS_BASE}/installation/installing-using-zip`;
  const IGNITE3_INSTALL_DOCKER = `${IGNITE3_DOCS_BASE}/installation/installing-using-docker`;

  // Docker content
  const renderDockerContent = () => {
    const dockerTag = variant === 'ignite3' ? selectedVersion : selectedVersion;
    const pullCommand = `docker pull apacheignite/ignite:${dockerTag}`;
    const runCommand =
      variant === 'ignite3'
        ? `# Start a single-node cluster
docker run -d --name ignite-node \\
  -p 10300:10300 \\
  -p 10800:10800 \\
  -p 3344:3344 \\
  apacheignite/ignite:${dockerTag}

# Initialize the cluster (first time only)
docker exec -it ignite-node /opt/ignite/bin/ignite3 cluster init --name=myCluster

# Connect using CLI
docker exec -it ignite-node /opt/ignite/bin/ignite3`
        : `# Start a single-node cluster
docker run -d --name ignite-node \\
  -p 10800:10800 -p 47100:47100 -p 47500:47500 \\
  -e "CONFIG_URI=/opt/ignite/config/default-config.xml" \\
  apacheignite/ignite:${dockerTag}`;

    const composeExample =
      variant === 'ignite3'
        ? `version: '3.8'
services:
  ignite-node-1:
    image: apacheignite/ignite:${dockerTag}
    container_name: ignite-node-1
    ports:
      - "10300:10300"
      - "10800:10800"
      - "3344:3344"
    volumes:
      - ignite-work-1:/opt/ignite/work
    networks:
      - ignite-net

  ignite-node-2:
    image: apacheignite/ignite:${dockerTag}
    container_name: ignite-node-2
    volumes:
      - ignite-work-2:/opt/ignite/work
    networks:
      - ignite-net

networks:
  ignite-net:
    driver: bridge

volumes:
  ignite-work-1:
  ignite-work-2:`
        : `version: '3.8'
services:
  ignite-node-1:
    image: apacheignite/ignite:${dockerTag}
    container_name: ignite-node-1
    ports:
      - "10800:10800"
      - "47100:47100"
      - "47500:47500"
    networks:
      - ignite-net

  ignite-node-2:
    image: apacheignite/ignite:${dockerTag}
    container_name: ignite-node-2
    networks:
      - ignite-net

networks:
  ignite-net:
    driver: bridge`;

    const versions = getReleases(variant, 'binary').map((r) => r.version);

    return (
      <div className={styles.downloadContent}>
        <div className={styles.methodDescription}>
          <p>
            Run Apache Ignite {variant === 'ignite3' ? '3' : '2'} in containers for development,
            testing, or production deployments. Official images are available on Docker Hub.
          </p>
          {variant === 'ignite3' && (
            <p className={styles.portsDescription}>
              <strong>Ports:</strong> 10300 (node communication), 10800 (SQL/client connections), 3344 (REST API)
            </p>
          )}
        </div>

        <div className={styles.versionSelector}>
          <label htmlFor={`docker-version-${variant}`}>Version</label>
          <select
            id={`docker-version-${variant}`}
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}>
            {versions.map((v) => (
              <option key={v} value={v}>
                {v}
                {getReleases(variant, 'binary').find((r) => r.version === v)?.latest
                  ? ' (latest)'
                  : ''}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.codeSection}>
          <div className={styles.codeSectionHeader}>
            <h4>Pull Image</h4>
            <button
              type="button"
              className={styles.copyButton}
              onClick={() => handleCopy(pullCommand)}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <SyntaxHighlighter language="bash" style={tomorrow} customStyle={codeStyle}>
            {pullCommand}
          </SyntaxHighlighter>
        </div>

        <div className={styles.codeSection}>
          <div className={styles.codeSectionHeader}>
            <h4>Quick Start</h4>
            <button
              type="button"
              className={styles.copyButton}
              onClick={() => handleCopy(runCommand)}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <SyntaxHighlighter language="bash" style={tomorrow} customStyle={codeStyle}>
            {runCommand}
          </SyntaxHighlighter>
        </div>

        <div className={styles.codeSection}>
          <div className={styles.codeSectionHeader}>
            <h4>Docker Compose (Multi-Node Cluster)</h4>
            <button
              type="button"
              className={styles.copyButton}
              onClick={() => handleCopy(composeExample)}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <SyntaxHighlighter language="yaml" style={tomorrow} customStyle={codeStyle}>
            {composeExample}
          </SyntaxHighlighter>
          {variant === 'ignite3' && (
            <p className={styles.codeNote}>
              Docker Compose version 2.23.1 or later is required. Mount /opt/ignite/work to persist data.
            </p>
          )}
        </div>

        <div className={styles.resourceLinks}>
          <a
            href={`https://hub.docker.com/r/apacheignite/ignite/tags?name=${variant === 'ignite3' ? '3.' : '2.'}`}
            target="_blank"
            rel="noopener noreferrer">
            View All Tags on Docker Hub
          </a>
          {variant === 'ignite3' && (
            <a href={IGNITE3_INSTALL_DOCKER} target="_blank" rel="noopener noreferrer">
              Docker Installation Guide
            </a>
          )}
          {variant === 'ignite2' && dockerImage?.guide && (
            <a href={dockerImage.guide} target="_blank" rel="noopener noreferrer">
              Docker Installation Guide
            </a>
          )}
        </div>
      </div>
    );
  };

  // Maven/Gradle content
  const renderMavenContent = () => {
    const versions = getReleases(variant, 'binary').map((r) => r.version);

    const mavenDeps =
      variant === 'ignite3'
        ? `<!-- Apache Ignite 3 Client -->
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-client</artifactId>
    <version>${selectedVersion}</version>
</dependency>

<!-- Optional: JDBC Driver -->
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-jdbc</artifactId>
    <version>${selectedVersion}</version>
</dependency>`
        : `<!-- Apache Ignite 2 Core -->
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-core</artifactId>
    <version>${selectedVersion}</version>
</dependency>

<!-- Optional: Spring Integration -->
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-spring</artifactId>
    <version>${selectedVersion}</version>
</dependency>

<!-- Optional: Indexing (SQL queries) -->
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-indexing</artifactId>
    <version>${selectedVersion}</version>
</dependency>`;

    const gradleDeps =
      variant === 'ignite3'
        ? `// Apache Ignite 3 Client
implementation 'org.apache.ignite:ignite-client:${selectedVersion}'

// Optional: JDBC Driver
implementation 'org.apache.ignite:ignite-jdbc:${selectedVersion}'`
        : `// Apache Ignite 2 Core
implementation 'org.apache.ignite:ignite-core:${selectedVersion}'

// Optional: Spring Integration
implementation 'org.apache.ignite:ignite-spring:${selectedVersion}'

// Optional: Indexing (SQL queries)
implementation 'org.apache.ignite:ignite-indexing:${selectedVersion}'`;

    const repositoryMaven = `<repositories>
    <repository>
        <id>apache-releases</id>
        <url>https://repository.apache.org/content/repositories/releases/</url>
    </repository>
</repositories>`;

    const repositoryGradle = `repositories {
    mavenCentral()
    maven { url 'https://repository.apache.org/content/repositories/releases/' }
}`;

    return (
      <div className={styles.downloadContent}>
        <div className={styles.methodDescription}>
          <p>
            Add Apache Ignite {variant === 'ignite3' ? '3' : '2'} to your project using Maven or
            Gradle. All artifacts are available on Maven Central.
          </p>
        </div>

        <div className={styles.versionSelector}>
          <label htmlFor={`maven-version-${variant}`}>Version</label>
          <select
            id={`maven-version-${variant}`}
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}>
            {versions.map((v) => (
              <option key={v} value={v}>
                {v}
                {getReleases(variant, 'binary').find((r) => r.version === v)?.latest
                  ? ' (latest)'
                  : ''}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.buildToolTabs}>
          <button
            type="button"
            className={`${styles.buildToolTab} ${mavenTool === 'maven' ? styles.buildToolTabActive : ''}`}
            onClick={() => setMavenTool('maven')}>
            Maven
          </button>
          <button
            type="button"
            className={`${styles.buildToolTab} ${mavenTool === 'gradle' ? styles.buildToolTabActive : ''}`}
            onClick={() => setMavenTool('gradle')}>
            Gradle
          </button>
        </div>

        <div className={styles.codeSection}>
          <div className={styles.codeSectionHeader}>
            <h4>Dependencies</h4>
            <button
              type="button"
              className={styles.copyButton}
              onClick={() => handleCopy(mavenTool === 'maven' ? mavenDeps : gradleDeps)}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <SyntaxHighlighter
            language={mavenTool === 'maven' ? 'xml' : 'groovy'}
            style={tomorrow}
            customStyle={codeStyle}>
            {mavenTool === 'maven' ? mavenDeps : gradleDeps}
          </SyntaxHighlighter>
        </div>

        <div className={styles.codeSection}>
          <div className={styles.codeSectionHeader}>
            <h4>Repository Configuration (Optional)</h4>
            <button
              type="button"
              className={styles.copyButton}
              onClick={() =>
                handleCopy(mavenTool === 'maven' ? repositoryMaven : repositoryGradle)
              }>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <SyntaxHighlighter
            language={mavenTool === 'maven' ? 'xml' : 'groovy'}
            style={tomorrow}
            customStyle={codeStyle}>
            {mavenTool === 'maven' ? repositoryMaven : repositoryGradle}
          </SyntaxHighlighter>
          <p className={styles.codeNote}>
            Most artifacts are on Maven Central. Use the Apache repository for early releases.
          </p>
        </div>

        <div className={styles.resourceLinks}>
          <a
            href={`https://search.maven.org/search?q=g:org.apache.ignite`}
            target="_blank"
            rel="noopener noreferrer">
            Browse All Artifacts on Maven Central
          </a>
          {currentRelease?.javadoc && (
            <a href={currentRelease.javadoc} target="_blank" rel="noopener noreferrer">
              Javadoc
            </a>
          )}
          {currentRelease?.guide && (
            <a href={currentRelease.guide} target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          )}
        </div>
      </div>
    );
  };

  // Binary/Source content
  const renderDownloadContent = () => {
    if (!currentRelease) return <p>Select a version to download.</p>;

    const downloadUrl = getDownloadUrl(currentRelease, activeMethod);
    if (!downloadUrl) return <p>No download available for this version.</p>;

    const resolvedUrl = resolveMirrorUrl(downloadUrl, preferredMirror);
    const fileName = getFileName(resolvedUrl);

    const extractCommand =
      variant === 'ignite3'
        ? `# Extract the archive
unzip ${fileName}
cd ${fileName.replace('.zip', '')}

# Start the database node
./bin/ignite3db

# In a new terminal, initialize the cluster (first time only)
./bin/ignite3 cluster init --name=myCluster

# Connect to the cluster via CLI
./bin/ignite3`
        : `# Extract the archive
unzip ${fileName}
cd ${fileName.replace('-bin.zip', '').replace('-src.zip', '')}

# Start a node
./bin/ignite.sh`;

    return (
      <div className={styles.downloadContent}>
        <div className={styles.methodDescription}>
          <p>
            {activeMethod === 'binary'
              ? `Pre-built binary distribution ready to run. Recommended for most users.`
              : `Source code for building from source. Requires JDK and build tools.`}
          </p>
        </div>

        <div className={styles.versionSelector}>
          <label htmlFor={`version-${variant}-${activeMethod}`}>Version</label>
          <select
            id={`version-${variant}-${activeMethod}`}
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}>
            {releases.map((r) => (
              <option key={r.version} value={r.version}>
                {r.version}
                {r.latest ? ' (latest)' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.downloadCard}>
          <div className={styles.downloadCardInfo}>
            <div className={styles.downloadFileName}>{fileName}</div>
            <div className={styles.downloadMeta}>Released {currentRelease.date}</div>
          </div>
          <a
            href={resolvedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
            onClick={() => handleDownloadClick(resolvedUrl)}>
            Download
          </a>
        </div>

        <div className={styles.verifyRow}>
          <span>Verify download:</span>
          <a href={`${resolvedUrl}.asc`} target="_blank" rel="noopener noreferrer">
            PGP Signature
          </a>
          <a href={`${resolvedUrl}.sha512`} target="_blank" rel="noopener noreferrer">
            SHA512 Checksum
          </a>
        </div>

        {activeMethod === 'binary' && (
          <div className={styles.codeSection}>
            <div className={styles.codeSectionHeader}>
              <h4>Quick Start</h4>
              <button
                type="button"
                className={styles.copyButton}
                onClick={() => handleCopy(extractCommand)}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <SyntaxHighlighter language="bash" style={tomorrow} customStyle={codeStyle}>
              {extractCommand}
            </SyntaxHighlighter>
          </div>
        )}

        <div className={styles.resourceLinks}>
          {variant === 'ignite3' && (
            <a href={IGNITE3_INSTALL_ZIP} target="_blank" rel="noopener noreferrer">
              Installation Guide
            </a>
          )}
          {variant === 'ignite2' && currentRelease.guide && (
            <a href={currentRelease.guide} target="_blank" rel="noopener noreferrer">
              Installation Guide
            </a>
          )}
          {currentRelease.javadoc && (
            <a href={currentRelease.javadoc} target="_blank" rel="noopener noreferrer">
              Javadoc
            </a>
          )}
          {currentRelease.releaseNotes && (
            <a href={currentRelease.releaseNotes} target="_blank" rel="noopener noreferrer">
              Release Notes
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.selector}>
      <div className={styles.tabs}>
        {availableMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            className={`${styles.tab} ${activeMethod === method.id ? styles.tabActive : ''}`}
            onClick={() => setActiveMethod(method.id)}>
            <span className={styles.tabIcon}>{method.icon}</span>
            <span className={styles.tabLabel}>{method.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.panel}>
        {activeMethod === 'docker' && renderDockerContent()}
        {activeMethod === 'maven' && renderMavenContent()}
        {(activeMethod === 'binary' || activeMethod === 'source') && renderDownloadContent()}
      </div>
    </div>
  );
}
