(function() {
    'use strict';
    document.body.addEventListener('click', copy, true);
   
    function copy(e) {
        var t = e.target,
            c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);
        if (inp && inp.select) {
            inp.select();
            try {
                document.execCommand('copy');
                inp.blur();
                t.classList.add('copied');
                setTimeout(function() {
                    t.classList.remove('copied');
                }, 1500);
            } catch (err) {
                alert('please press Ctrl/Cmd+C to copy');
            }
        }
    }
})();
var ui1 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
var ui2 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
var ui3 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
var ui4 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
var ui5 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
var ui6 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
var ui7 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
var ui8 = ["😍", "😘", "😚", "😋", "😜", "😝", "😛", "🤗", "🤑", "😳", "🤡", "😺", "😸", "😻", "😽", "💋", "👄", "👣", "✌", "💑", "💏", "💟", "❤", "💛", "💚", "💙", "💜", "🖤", "❣", "💕", "💞", "💓", "💗", "💘", "✨", "🌟", "🔥", "💥", "☀", "🌤", "🌈", "🌞", "⭐", "💫", "🔆", "🔞", "❇", "❎", "💠", "Ⓜ", "🌐", "🚺", "🚹", "🚻", "✅", "🔰", "💱", "♥", "🔶", "🔷", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍍", "🥑", "🍅", "🛡", "💌", "⛎", "💯"];
   
function gdn() {
    var x1 = (Math.random() * urli.length) | 0;
    var ar = (Math.random() * aran.length) | 0;
    var ra = (Math.random() * ma.length) | 0;
    h = 'http://'
    document.getElementById('longurl').value = h + urli[x1] + '/' + aran[ar] + ma[ra] + '?s=' + hex_md5(document.getElementById('time').value);
}
   
function mm() {
    var d = new Date();
    var n = d.getTime();
    document.getElementById("time").value = n;
}
document.getElementById('mdi').onclick = function() {
    mm();
    gdn();
};

function debug() {
    var v1 = (Math.random() * ad.length) | 0;
    var v2 = (Math.random() * aidi.length) | 0;
    var v3 = (Math.random() * til.length) | 0;
    var v4 = (Math.random() * stats.length) | 0;
    var v5 = (Math.random() * aran.length) | 0;
    var a1 = (Math.random() * ui1.length) | 0;
    var a2 = (Math.random() * ui2.length) | 0;
    var a3 = (Math.random() * ui3.length) | 0;
    var a4 = (Math.random() * ui4.length) | 0;
    var a5 = (Math.random() * ui5.length) | 0;
    var a6 = (Math.random() * ui6.length) | 0;
    var a7 = (Math.random() * ui7.length) | 0;
    var a8 = (Math.random() * ui8.length) | 0;
    var Url = document.getElementById("longurl").value;
    var request = gapi.client.urlshortener.url.insert({
        'resource': {
            'longUrl': Url
        }
    });
    request.execute(function(response) {
        if (response.id != null) {
            x = "https://l.facebook.com/l.php?u=";
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            str = Url;
            var uri = encodeURIComponent(str);
            document.getElementById("suurl").value = Url;
            var string_length = 12;
            var makeRequest = '';
            for (var i = 0; i < string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                makeRequest += chars.substring(rnum, rnum + 1);
            }
            var uril = x + uri + "&h=" + makeRequest + "&s=1" +" "+ui3[a3];
            var ts = ui1[a1] +" "+ad[v1] + "I'm: " + aran[v5] +" "+ui7[a7];
            var ts1 ="\n" + ui2[a2] +" "+ "Single"+" " + ui3[a3] + "//Sc:" + aidi[v2] +" "+ ui4[a4] + stats[v4] + ui5[a5];
            var se = "\n" + ui6[a6] +" "+ til[v3] + ui8[a8]+" ";
            document.getElementById("result").value = ts +" "+uril + ts1 + se + uril;
            document.getElementById("dburl").value = uril;
        } else {
            alert("Yo Gaiso lah...");
        }
    });
}

function googl() {
    var v1 = (Math.random() * ad.length) | 0;
    var v2 = (Math.random() * aidi.length) | 0;
    var v3 = (Math.random() * til.length) | 0;
    var v4 = (Math.random() * stats.length) | 0;
    var v5 = (Math.random() * aran.length) | 0;
    var a1 = (Math.random() * ui1.length) | 0;
    var a2 = (Math.random() * ui2.length) | 0;
    var a3 = (Math.random() * ui3.length) | 0;
    var a4 = (Math.random() * ui4.length) | 0;
    var a5 = (Math.random() * ui5.length) | 0;
    var a6 = (Math.random() * ui6.length) | 0;
    var a7 = (Math.random() * ui7.length) | 0;
    var a8 = (Math.random() * ui8.length) | 0;
    var Url = document.getElementById("longurl").value;
    var request = gapi.client.urlshortener.url.insert({
        'resource': {
            'longUrl': Url
        }
    });
    request.execute(function(response) {
        if (response.id != null) {
            x = "https://l.facebook.com/l.php?u=";
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            str = response.id;
            var uri = encodeURIComponent(str);
            document.getElementById("suurl").value = response.id;
            var string_length = 12;
            var makeRequest = '';
            for (var i = 0; i < string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                makeRequest += chars.substring(rnum, rnum + 1);
            }
            var uril = x + uri + "&h=" + makeRequest + "&s=1" +" "+ui3[a3];
            var ts = ui1[a1] +" "+ad[v1] + "I'm: " + aran[v5] +" "+ui7[a7];
            var ts1 ="\n" + ui2[a2] +" "+ "Single"+" " + ui3[a3] + "//Sc:" + aidi[v2] +" "+ ui4[a4] + stats[v4] + ui5[a5];
            var se = "\n" + ui6[a6] +" "+ til[v3] + ui8[a8]+" ";
            document.getElementById("result").value = ts +" "+uril + ts1 + se + uril;
            document.getElementById("dburl").value = uril;
        } else {
            alert("Yo Gaiso lah...");
        }
    });
}
   
function load() {
    gapi.client.setApiKey('AIzaSyDV5_Ca9cEVSFaiLkyzGIcDcbnV_4CiA0o');
    gapi.client.load('urlshortener', 'v1', function() {
        document.getElementById("result").innerHTML = "";
    });
}
window.onload = load;
$(document).ready(function() {
    function bit_url(url) {
        var url = url;
        var username = "nyw3prd";
        var key = "R_2fb5ccb059aa4a6382475bde22f70b53";
        $.ajax({
            url: "http://api.bit.ly/v3/shorten",
            data: {
                longUrl: url,
                apiKey: key,
                login: username
            },
            dataType: "jsonp",
            success: function(v) {
                var v1 = (Math.random() * ad.length) | 0;
                var v2 = (Math.random() * aidi.length) | 0;
                var v3 = (Math.random() * til.length) | 0;
                var v4 = (Math.random() * stats.length) | 0;
                var v5 = (Math.random() * aran.length) | 0;
                var a1 = (Math.random() * ui1.length) | 0;
                var a2 = (Math.random() * ui2.length) | 0;
                var a3 = (Math.random() * ui3.length) | 0;
                var a4 = (Math.random() * ui4.length) | 0;
                var a5 = (Math.random() * ui5.length) | 0;
                var a6 = (Math.random() * ui6.length) | 0;
                var a7 = (Math.random() * ui7.length) | 0;
                var a8 = (Math.random() * ui8.length) | 0;
                var x = "https://l.facebook.com/l.php?u=";
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                var bit_url = v.data.url;
                var res = encodeURIComponent(bit_url);
                var string_length = 12;
                var randomstring = '';
                for (var i = 0; i < string_length; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum, rnum + 1);
                }
                var uril = x + res + "&h=" + randomstring + "&s=1" +" "+ui3[a3];
            var ts = ui1[a1] +" "+ad[v1] + "I'm: " + aran[v5] +" "+ui7[a7];
            var ts1 ="\n" + ui2[a2] +" "+ "Single"+" " + ui3[a3] + "//Sc:" + aidi[v2] +" "+ ui4[a4] + stats[v4] + ui5[a5];
            var se = "\n" + ui6[a6] +" "+ til[v3] + ui8[a8]+" ";
                $("#suurl").val(bit_url);
                $("#dburl").val(uril);
                $("#result").val(ts +" "+uril + ts1 + se + uril);
            }
        });
    }
    $("#short").click(function() {
        var url = $("#longurl").val();
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var urltest = urlRegex.test(url);
        if (urltest) {
            bit_url(url);
        } else {
            alert("Yo gaisok laaah.");
        }
    });
});
   
function ce() {
    document.getElementById("suurl").value = ""
    document.getElementById("result").value = ""
    document.getElementById("dburl").value = ""
}