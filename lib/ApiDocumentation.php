<?php


class ApiDocumentation  {

    protected $_path;

    protected $_htmlFilenames;

    public static function scanDirWithVersions($path)
    {
        $content = scandir($path);    
        
        $content = array_diff($content, ['.', '..']);
               

        return $content;

    }

    public function __construct($dir)
    {
        if(!is_dir($dir)){
            throw new Exception("Can't open directory", 1);
        }
        $this->_path = $dir;
    }

    public function getListOfHtmlFiles($forceScan = false)
    {

        if(empty($this->_htmlFilenames) || $forceScan){
            $contents = $this->scanDir($this->_path);
            $htmlFiles = array();
            foreach($contents as $file){
                if($file->getExtension()=='html'){
                    array_push($htmlFiles, $file);
                }
            }
            $this->_htmlFilenames = $htmlFiles;
        }
        return $this->_htmlFilenames;
    }

    
    public function addCanonicalUrl($baseUrl)
    {
        $htmlFilenames = $this->getListOfHtmlFiles();
        print 'Adding canonical URL code to:'.PHP_EOL;
        foreach($htmlFilenames as $file){
            
            $docHtmlFile = new ApiDocumentationHtmlFile($file);
            $url = $baseUrl.str_replace($this->_path, '', $file->getPathname());
            // var_dump($url);
            $docHtmlFile->addCanonicalUrl($url);
            if($docHtmlFile->saveContent()===false){
                print '<p><b style="color: red;">couldn\' save contents: '.$file->getRealPath().'</b></p>'.PHP_EOL;
            }
        }
        
    }

    public function addAnalyticsTrackingCode()
    {
        
        
        $htmlFilenames = $this->getListOfHtmlFiles();
        print '<h3>Added Tracking code to:</h3>'.PHP_EOL;
        foreach($htmlFilenames as $file){
            
            $docHtmlFile = new ApiDocumentationHtmlFile($file);
            $docHtmlFile->addAnalyticsTrackingCode();
            if($docHtmlFile->saveContent()===false){
                print '<p><b style="color: red;">couldn\' save contents: '.$file->getRealPath().'</b></p>';
            }
        }
        
    }




    protected function scanDir($dirname)
    {
        
        $rii = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($dirname));
        
        $files = array(); 

        foreach ($rii as $file) {
        
            if($file->isFile() ){
                
                array_push($files, $file);

            }

        }

        return $files;
    }

}