(function() {
    var first_js = document.getElementsByTagName('script')[0];
    var js = document.createElement('script');
    
    js.src = 'https://'+document.location.hostname+'/a/ldc/static/leaddyno.min.js';
    
    js.type = "text/javascript";
    js.async = true;

    var _ld_init = function() {
        LeadDyno.key = 'c4eae7a34711d10767d0df14fbc160fc93921bf1';
        
        
        LeadDyno.devTools.setServerUrl('https://'+document.location.hostname+'/a/ldc');
        

        LeadDyno.initShopify();
        LeadDyno.recordVisit();
        LeadDyno.autoWatch();

    };

    if (js.addEventListener) { // normal browsers
        js.addEventListener('load', function() {
            _ld_init();
        }, false);
    } else {
        js.onreadystatechange = function() { // old IEs
            if (js.readyState in {loaded: 1, complete: 1}) {
                js.onreadystatechange = null;
                _ld_init();
            }
        };
    }

    first_js.parentNode.insertBefore(js, first_js);
})();