var version = 2;

function track(event, buttontext)
{
    $.ajax
    ({
        type: 'POST',
        url: track_handler_url,
        data: "event=" + event + "&version=" + version + "&title=" + $(document).find("title").text() + '&buttontext=' + buttontext + '&bannerid=' + banner_display_id,
        context: document.body
    }).done(function(){}
    );
}

$( document ).ready(function ()
{
    track('popsup', '');
    $('a').bind('click', function () {
        track('clicked', $(this).text());
    });
});
