<?php

class ApiDocumentationHtmlFile  {

    protected $_debug = false;

    protected $file;
    protected $fileContent;

    protected $canonicalUrlCode = '<link rel="canonical" href="__URL__" />';

    protected $noIndexMetaStr = '<META NAME="ROBOTS" CONTENT="NOINDEX">';

    public $GAPropertyId = 'UA-61232409-1';

    protected $GAtrackingCode = '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-61232409-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag(\'js\', new Date());
    
      gtag(\'config\', \'__GA_PROPERTY_ID__\');
    </script>';

    protected $LuckyOrangeTrackingCode = "<script type='text/javascript'>
    window.__lo_site_id = 284467;
    
      (function() {
        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
        wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
        })();
      </script>";

    protected $yandexMetricaTrackingCode = '<!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
      ym(72949126, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true,
           webvisor:true
      });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/72949126" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->';


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

    public function hasYandexTrackingCode()
    {
        return strpos($this->getContent(), $this->yandexMetricaTrackingCode) !== false;
    }

    public function hasLuckyOrangeCode()
    {
        return strpos($this->getContent(), $this->LuckyOrangeTrackingCode) !== false;
    }

    public function addYandexMetricaTrackingCode()
    {
        if(!$this->hasYandexTrackingCode()){
            
            $this->fileContent = str_ireplace('<head>', '<head>'.PHP_EOL.$this->yandexMetricaTrackingCode, $this->getContent());
            if($this->_debug) print 'YandexMetrica tracking code added.'.PHP_EOL;
        }
    }

    public function addLuckyOrangeTrackingCode()
    {
        if(!$this->hasLuckyOrangeCode()){
            $this->fileContent = str_ireplace('<head>', '<head>'.PHP_EOL.$this->LuckyOrangeTrackingCode, $this->getContent());
            if($this->_debug) print 'LuckyOrange tracking code added.'.PHP_EOL;
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