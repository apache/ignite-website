<?php
require_once('lib/ApiDocumentation.php');
require_once('lib/ApiDocumentationHtmlFile.php');

set_time_limit(0);
      

$base_path = __DIR__;

$base_url = 'https://ignite.apache.org';
      
/*set here the paths you want to add tracking code and canonical tag, etc.
 the actions could be: 
    'add-canonical' --> Adds the metatag with canonical URL. 
    'remove-canonical' --> Removes the canonical URL metatag. 
    'set-as-latest' --> Basically this updates the canonical URL metatag with https://ignite.apache.org/releases/latest/
    'add-ga-tracking-code' --> Usually the API docs comes without Google Analytics tracking code. This action adds the code.
    'add-noindex' --> Adds metatag that avoids crawlers to index this page.
    'remove-noindex' --> Removes robots NOINDEX metatag
    'add-luckyorange-tracking-code' --> 
    'add-yandexmetrica-tracking-code' --> 
 */
$work_directories = [ 
    // $base_path.'/releases/2.9.0' => [ 'add-noindex', 'remove-canonical', 'add-canonical'],
    $base_path.'/releases/2.9.1' => [ 'set-as-latest', 'add-ga-tracking-code', 'add-luckyorange-tracking-code', 'add-yandexmetrica-tracking-code']
    ];


foreach ($work_directories as $w_base_dir => $w_actions)
{
    $apiVersionDir = new ApiDocumentation($w_base_dir);
    //this returns a list of all .html files on any sub directory
    $htmlFilenames = $apiVersionDir->getListOfHtmlFiles();
    
    print 'Processing: '.$w_base_dir.PHP_EOL;
    print "\t with actions: ".implode(', ',$w_actions).PHP_EOL.PHP_EOL;

    // run actions for all files
    foreach($htmlFilenames as $file){
        $docHtmlFile = new ApiDocumentationHtmlFile($file);
        foreach($w_actions as $action){
            switch($action){
                case('add-canonical'):
                    $url = $base_url.str_replace($base_path, '', $file->getPathname());
                    $docHtmlFile->addCanonicalUrl($url);
                    break; 
                case('remove-canonical'):
                    $docHtmlFile->removeCanonicalUrl();
                    break;
                case('set-as-latest'):
                    $docHtmlFile->removeCanonicalUrl();
                    $latest_url = $base_url.str_replace($w_base_dir, '/releases/latest', $file->getPathname());
                    $docHtmlFile->addCanonicalUrl($latest_url);
                    break;
                case('add-ga-tracking-code'):
                    $docHtmlFile->addAnalyticsTrackingCode();
                    break;
                
                case('add-luckyorange-tracking-code'):
                    $docHtmlFile->addLuckyOrangeTrackingCode();
                    break;
                    
                case('add-yandexmetrica-tracking-code'):
                    $docHtmlFile->addYandexMetricaTrackingCode();
                    break;
                case('add-noindex'):
                    $docHtmlFile->addNoindexTag();
                    break;
                case('remove-noindex'):
                    $docHtmlFile->removeNoindexTag();
                    break;
            }
        }

        if($docHtmlFile->saveContent()===false){
            print 'Couldn\' save contents: '.$file->getRealPath().PHP_EOL;
        }

    }
    print "\t done.".PHP_EOL;

}

die(PHP_EOL.'finished...'.PHP_EOL);
