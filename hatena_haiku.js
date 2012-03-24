function post_hatena_haiku(){

    var haiku_id = '';
    var haiku_pw = '';

    var haiku_status  = '';
    var haiku_keyword = '';
    var haiku_source  = '';

    var xhr = Titanium.Network.createHTTPClient();
    xhr.setTimeout(90000);
	
    xhr.onerror = function(e){
        //
    };

    xhr.onload = function(){
        //
	};

    xhr.onsendstream = function(e) {
        //
    };

	xhr.open('POST','http://h.hatena.ne.jp/api/statuses/update.xml');
	xhr.setRequestHeader(
        'Authorization','Basic '+Ti.Utils.base64encode(haiku_id + ':' + haiku_pw)
    );

    // post haiku (with picture)
    var image = xxx;
    xhr.send({
        file    : image,
        status  : haiku_status,
        keyword : haiku_keyword ,
        source  : haiku_source
    });

    // post haiku (text only)
    xhr.send({
        status  : haiku_status,
        keyword : haiku_keyword,
        source  : haiku_source
    });	

}


