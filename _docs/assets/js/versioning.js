function initVersioning()
{
    let dropdown = document.getElementById("version-selector");
    let current_base_url = dropdown.value;
    const url = '/docs/available-versions.txt';
    const currentDocVersion = document.querySelector('meta[name="ignite-version"]').getAttribute("content");
    const currentPath = document.location.pathname;
    const isLatest = currentPath.includes("/latest/");

    fetch(url)
        .then(
            function(response)
            {
                if(response.status !== 200){
                    console.warn("Problem fetching other versions. " + response.status);
                    return;
                }

                response.text().then(function(data){
                    
                    let lines = data.split("\n");
                    
                    let new_option;
                    
                    dropdown.length = 0;

                    for(let i = 0; i < lines.length; i++){
                        if(String(lines[i]).trim().length > 0){
                            new_option = document.createElement('option');
                            new_option.text = lines[i];
                            let r = isLatest?"latest":currentDocVersion;
                            new_option.value = currentPath.replace(r, lines[i]);
                            dropdown.add(new_option);
                            if(lines[i] == currentDocVersion) 
                                dropdown.selectedIndex = i;
                        }
                        
                    }

                    dropdown.addEventListener('change', function(){
                        window.location.href = this.value;
                    });
                });
                
            }
        )
        .catch(function(err){
            console.error('Error fetching versions', err);
        });

}

window.addEventListener('load', initVersioning)