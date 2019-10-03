(function($) {
  function callData(){    
        var url = "data/test.json";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(data) {
            if (this.readyState == 4 && this.status == 200) {
              printData(this.response);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.responseType = 'json';
        xhttp.send();
  };
  callData();
  var dataToPrint = '';
  function printData(data){
    $.ajax({
        url: 'views/markup.html',
        method: 'GET',
        async: true,
        dataType: 'html',
        success: function(markupData) {
          $('#si-vue-app').html(markupData);
          data.homeTeamFlag = 'images/'+data.homeTeam.id+'.png';;
          data.awayTeamFlag = 'images/'+data.awayTeam.id+'.png';;
          dataToPrint = new Vue({
            el:"#si-vue-app",
            data(){return data;}
          });
        },
        error: function(a, b) {
          warn('error in loading template');
        }
      });
  }
})(jQuery);
