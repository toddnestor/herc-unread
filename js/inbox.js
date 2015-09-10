setInterval(function(){
    $.get('https://mail.google.com/mail/feed/atom', function(data){
        var total_count = $(data).find('fullcount').html();

        if( total_count == undefined || total_count == '' )
            total_count = 0;

        if( total_count > 0 ) {
            document.title = 'Inbox (' + total_count + ')';
            $('.pa.Y li:not(.herculesUnreadMessageCount):first span').html('Inbox (' + total_count + ')');
        } else {
            document.title = 'Inbox';
            $('.pa.Y li:not(.herculesUnreadMessageCount):first span').html('Inbox');
        }

        if( $('.herculesUnreadMessageCount') == undefined || $('.herculesUnreadMessageCount').length == 0 )
            $('.pa.Y').prepend($('<li>').addClass('herculesUnreadMessageCount').addClass('oin9Fc').addClass('cN').html('<img src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_custom-cluster_24px_g60_r3.png"><span class="sM hercViewUnreadMessages" title="Unread">Unread</span>') );
    });
},1000);

$('body').on('click','.hercViewUnreadMessages',function(e){
    e.preventDefault();
    location.href = 'https://inbox.google.com/search/is%3Aunread?pli=1';
})