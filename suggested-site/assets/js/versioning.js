function initVersioning() {
    const dropdown = document.getElementById("version-selector");
    if (!dropdown) return;

    const currentPath = document.location.pathname;
<<<<<<< HEAD
    const isIgnite3 = currentPath.indexOf("/docs/ignite3/") !== -1;
=======
    const isIgnite3 = currentPath.indexOf("/suggested-site/docs/ignite3/") !== -1;
>>>>>>> origin/master
    const versionsFile = isIgnite3
      ? '/docs/ignite3/available-versions.txt'
      : '/docs/ignite2/available-versions.txt';

    const parts = currentPath.split('/');
    let currentDocVersion = parts[3];

    function replaceVersion(newVersion) {
        const p = currentPath.split('/');
        p[3] = newVersion;
        return p.join('/');
    }

    fetch(versionsFile)
      .then(function(response) {
          if (response.status !== 200) {
              console.warn("Problem fetching versions: " + response.status);
              return;
          }
          return response.text();
      })
      .then(function(data) {
          if (typeof data !== 'string') return;
          const lines = data.split('\n');
          dropdown.innerHTML = "";

          lines.forEach(function(version) {
              version = version.trim();
              if (version.length > 0) {
                  const option = document.createElement('option');
                  option.text = version;
                  option.value = replaceVersion(version);
                  if (version === currentDocVersion) {
                      option.selected = true;
                  }
                  dropdown.add(option);
              }
          });

          dropdown.addEventListener('change', function() {
              window.location.href = this.value;
          });
      })
      .catch(function(err) {
          console.error("Error fetching versions", err);
      });
}

function initProductSelector() {
    const productSelector = document.getElementById("product-selector");
    if (!productSelector) return;

    productSelector.addEventListener('change', function() {
        window.location.href = this.value;
    });
}

window.addEventListener('load', initVersioning);
window.addEventListener('load', initProductSelector);