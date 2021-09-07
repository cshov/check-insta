function getinsta(info,tab) {
    console.log("Checking Instagram for user: " + info.selectionText);
    chrome.tabs.create({
        url: "http://www.instagram.com/" + info.selectionText
    });
}
chrome.contextMenus.create({
    title: "Search Insta for: %s",
    contexts:["selection"],
    onclick: getinsta
});
