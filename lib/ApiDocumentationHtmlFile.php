<?php

class ApiDocumentationHtmlFile  {

    protected $_debug = false;

    protected $file;
    protected $fileContent;

    protected $canonicalUrlCode = '<link rel="canonical" href="__URL__" />';

    protected $noIndexMetaStr = '<META NAME="ROBOTS" CONTENT="NOINDEX">';

    public $GAPropertyId = 'UA-61232409-1';

    protected $GAtrackingCode = "<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '__GA_PROPERTY_ID__', 'auto');
  ga('send', 'pageview');

</script>";


    public function __construct(\SplFileInfo $file)
    {
        $this->file = $file;
    }

    public function getContent()
    {
        if(empty($this->fileContent)){
            $this->fileContent = file_get_contents($this->file->getRealPath());
        }
        return $this->fileContent;
    }
    
    public function hasCanonicalUrl()
    {
        $canonicalUrlCode_preg = '/'.str_replace(array('__URL__', '/'), array('(.*)', '\/'), $this->canonicalUrlCode).'/';
        return preg_match($canonicalUrlCode_preg, $this->getContent());
    }

    public function removeCanonicalUrl()
    {
        $canonicalUrlCode_preg = '/'.str_replace(array('__URL__', '/'), array('(.*)', '\/'), $this->canonicalUrlCode).'/';
        
        $this->fileContent = preg_replace($canonicalUrlCode_preg, '', $this->getContent());
    }

    
    public function hasGATrackingCode()
    {
        return strpos($this->getContent(), $this->GAPropertyId) !== false;
    }
    
    public function addCanonicalUrl($url)
    {
        if(!$this->hasCanonicalUrl()){
            $canonicalUrlCode = str_replace('__URL__', $url, $this->canonicalUrlCode);
            $this->fileContent = str_ireplace('<head>', '<head>'.PHP_EOL.$canonicalUrlCode, $this->getContent());
            if($this->_debug) print 'canonical url "'.$url.'" added.'.PHP_EOL;      
        }
    }

    

    public function saveContent()
    {
        if($this->_debug) print 'saving content.'.PHP_EOL.$this->file->getRealPath().PHP_EOL;

        return file_put_contents($this->file->getRealPath(), $this->fileContent);
    }

    

    public function addAnalyticsTrackingCode()
    {
        if(!$this->hasGATrackingCode()){
            $GACode = str_replace('__GA_PROPERTY_ID__', $this->GAPropertyId, $this->GAtrackingCode);

            $this->fileContent = str_ireplace('</head>', PHP_EOL.$GACode.'</head>', $this->getContent());
            if($this->_debug) print 'GA tracking code added.'.PHP_EOL;
        }

    }

    public function hasNoindexTag()
    {
        return strpos($this->getContent(), $this->noIndexMetaStr) !== false;
    }

    public function addNoindexTag()
    {
        if(!$this->hasNoindexTag()){
            $this->fileContent = str_ireplace('<head>', '<head>'.PHP_EOL.$this->noIndexMetaStr, $this->getContent());
        }
    }

    public function removeNoindextag()
    {
        if($this->hasNoindexTag()){
            $this->fileContent = str_ireplace($this->noIndexMetaStr, '', $this->getContent());
        }
    }

    

}