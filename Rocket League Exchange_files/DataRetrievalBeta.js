console.log("Up and running");
httpGetAsync("https://www.reddit.com/r/rocketleagueexchange/new.json?sort=new", addDataToDOM);
var mostRecentPosts = undefined;
var hasFinishedLoading = false;

function removeAllActiveClassesOnTabs() {
    $('#xboxTab').removeClass('active');
    $('#ps4Tab').removeClass('active');
    $('#allTab').removeClass('active');
    $('#pcTab').removeClass('active');
}

function addDataToDOM(data) {

    console.log(JSON.stringify(data));

    var posts = JSON.parse(data).data.children;
    mostRecentPosts = posts;

    posts.forEach(function(post) {

        var arrayOfStrings = window.location.href.split("/");
        var searchString = arrayOfStrings[arrayOfStrings.length - 1];

        if(!(searchString == "xbox" || searchString == "ps4" || searchString == "pc" || searchString =="all")) {
            if(window.location.href.includes("xbox")) {
                if(post.data.title.toLowerCase().includes("[xbox]") && post.data.title.toLowerCase().includes(searchString.toLowerCase())) {
                    var str = post.data.title.split("[")[1];
                    document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';

                }
            } else if(window.location.href.includes("ps4") && post.data.title.toLowerCase().includes(searchString.toLowerCase())) {
                if(post.data.title.toLowerCase().includes("[ps4]")) {
                    var str = post.data.title.split("[")[1];
                    document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';


                }
            } else if(window.location.href.includes("pc") && post.data.title.toLowerCase().includes(searchString.toLowerCase())) {
                if(post.data.title.toLowerCase().includes("[pc]")) {
                    var str = post.data.title.split("[")[1];
                    document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';

                }
            } else if(window.location.href.includes("all") && post.data.title.toLowerCase().includes(searchString.toLowerCase())) {
                var str = post.data.title.split("[")[1];
                document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';

            }
        }   else {
            if(window.location.href.includes("xbox")) {
                if(post.data.title.toLowerCase().includes("[xbox]")) {
                    var str = post.data.title.split("[")[1];
                    document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';


                }
            } else if(window.location.href.includes("ps4")) {
                if(post.data.title.toLowerCase().includes("[ps4]")) {
                    var str = post.data.title.split("[")[1];
                    document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';


                }
            } else if(window.location.href.includes("pc")) {
                if(post.data.title.toLowerCase().includes("[pc]")) {
                    var str = post.data.title.split("[")[1];
                    document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';


                }
            } else if(window.location.href.includes("all")) {
                var str = post.data.title.split("[")[1];
                document.getElementById('postsRow').innerHTML += '<div class="col-sm-5 card"> <div class="platformTag"> <h6> ' + str.trim().substring(0, str.trim().length - 1) + ' </h6> </div> <div class="card-block"> <h4 class="card-title"> ' + post.data.title.substring(str.length+1) + ' </h4> <p class="card-text"> ' + post.data.selftext.substring(0 , 100) + '</p> <p class="username"> <i> ' + post.data.author + ' </i> </p> </div> <div class="messageButton"> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author + '" class="btn btn-secondaryMessage">Message</a> </div> </div>';

            }
        }
    });

    //document.getElementById("loader").remove();

    if(document.getElementById('postsRow').innerHTML == "") {
        document.getElementById('alertText').innerHTML = "No Items Found: Scroll down to load more results or search for a different item."
    } else {
        document.getElementById('alertText').innerHTML = ""
    }

    hasFinishedLoading = true;

}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function refreshPage() {
    window.location.reload();
}

function handle(e) {
    console.log("Hanlding!")
    e.preventDefault();

    var searchString = document.getElementById('txtJob').value

    if(window.location.href.includes("xbox")) {
        window.location.href = 'http://rocketleagueexchange.herokuapp.com/reddit/xbox/' + searchString;
    } else if(window.location.href.includes("ps4")) {
        window.location.href = 'http://rocketleagueexchange.herokuapp.com/reddit/ps4/' + searchString;
    } else if(window.location.href.includes("pc")) {
        window.location.href = 'http://rocketleagueexchange.herokuapp.com/reddit/pc/' + searchString;
    } else if(window.location.href.includes("all")) {
        window.location.href = 'http://rocketleagueexchange.herokuapp.com/reddit/all/' + searchString;
    } else {
        window.location.href = 'http://rocketleagueexchange.herokuapp.com/reddit/all';
    }
}

function loadMoreDataAndAddToDOM() {
    if(hasFinishedLoading) {
        //document.getElementById('posts').innerHTML += '<div class="loader" id="loader"></div>';
        hasFinishedLoading = false;
    }

    console.log("loading more entries");
    var idOfLastPost = mostRecentPosts[mostRecentPosts.length - 1].data.name;
    console.log("https://www.reddit.com/r/rocketleagueexchange/.json?sort=new&after=" + idOfLastPost);
    httpGetAsync("https://www.reddit.com/r/rocketleagueexchange/.json?sort=new&after=" + idOfLastPost, addDataToDOM);
}

window.onscroll = function(ev) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && hasFinishedLoading) {
        loadMoreDataAndAddToDOM();
    }
};

function convertUnixTimeToDateString(unixTime) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unixTime*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

document.getElementById("textJob").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }
    e.preventDefault(); // sometimes useful

    // Enter is pressed
    if (e.keyCode == 13) { handle(); }
}, false);
