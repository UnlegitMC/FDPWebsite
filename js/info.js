var version = null

$.get("https://api.github.com/repos/UnlegitMC/FDPClient/releases/latest", function(data, status) {
    var versionElement = document.getElementById("version-info")
    try {
        versionElement.innerHTML = "Version: " + data.tag_name
        version = data.tag_name
    } catch (e) {
        versionElement.innerHTML = "Version: fetch error"
        console.error(e)
    }
});

$.get("https://api.github.com/repos/UnlegitMC/FDPClient", function(data, status) {
    var element = document.getElementById("stars-info")
    element.innerHTML = data.stargazers_count
});

$.get("https://bstats.org/api/v1/plugins/11076/charts/servers/data", function(data, status) {
    var element = document.getElementById("users-info")
    element.innerHTML = data[data.length - 1][1]
});

$.get("https://api.github.com/repos/UnlegitMC/FDPClient/contributors", function(data, status) {
    var element = document.getElementById("contributors-info")
    element.innerHTML = data.length
});