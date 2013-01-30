function parseLRC(lyric){
    lyric = lyric.replace(/(^\s*)|(\s*$)/g,"");
	var times = lyric.match(/\[[^\u4e00-\u9fa5|a-z|A-Z]+([^\[|\:|\]|]+)/g);
    var html = '';

    if(times){
      for(var i=0;i<times.length;i++){
        var pos = times[i].lastIndexOf(']');
        var time = times[i].substr(0,pos+1);
        time = time.replace(/[\s|\r|\t]*/ig,'');
        html += '<li data-time="'+time+'">'+times[i].substr(pos+1)+'</li>';
      }
    }

    var parsedResult = '<ul>'+html+'</ul>';

    return parsedResult;
}