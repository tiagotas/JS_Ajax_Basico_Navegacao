

function abreAjax() {

    var httpRequest;
    
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
       
        httpRequest = new XMLHttpRequest();
    
    } else if (window.ActiveXObject) { // IE 8 and older
        
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    
    }

    return httpRequest;

}