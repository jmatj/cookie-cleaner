document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('remove-cookies').addEventListener('click', function() {
        chrome.tabs.query({
            'active': true,
            'lastFocusedWindow': true
        }, function(tabs) {
            var url = tabs[0].url;
            chrome.cookies.getAll({
                "url": url
            }, function(cookies) {
                for (i = 0; i < cookies.length; i++) {
                    chrome.cookies.remove({
                        "url": url,
                        "name": cookies[i].name
                    }, function(deletedCookie) {});
                }
                window.close();
            });
        });
    });
});
