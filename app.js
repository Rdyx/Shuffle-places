$('#shuffle').click(function () {
    for (var i = 0; i < 15; i++) {
        $('#' + i + '').html(i);
    }
});

$.ajax({
    url: "https://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/basic?alt=json",
    //first row "title" column
    success: function (data) {
        console.log(data);
        for (var i = 0; i < 15; i++) {
            $('#' + i + '').html(data.feed.entry[i].content.$t);
        }
        //console.log(data.feed.entry[0]['gsx$title']['$t']);
    }

})
