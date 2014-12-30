var lastThemeFile='css/tableThems/theme.x0.css';
function setThems(themListSel){
	removeJsCssfile(lastThemeFile,"css");
  loadJsCssFile(themListSel.value,"css");
  lastThemeFile=themListSel.value;
}//end function setThems

function loadJsCssFile(filename,filetype){
    if(filetype == "js"){
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",filename);
    }else if(filetype == "css"){
    
        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
    }
   if(typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }    
}

function removeJsCssfile(filename, filetype){ 
var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; 
var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; 
var allsuspects=document.getElementsByTagName(targetelement);
for (var i=allsuspects.length; i>=0; i--){ 
if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1) 
allsuspects[i].parentNode.removeChild(allsuspects[i]); 
}//end for i 
} 