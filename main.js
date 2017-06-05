function createNote() {
    
    //validation
    var note = document.getElementById("messageInput").value
    if (note == "") {
        alert('Please enter a note name')
    }
    else{
        daySelect = document.getElementById('daySelect');
        monthSelect = document.getElementById('monthSelect');
        yearSelect = document.getElementById('yearSelect');
        var a = (monthSelect.options[monthSelect.selectedIndex].value + " "+ 
                daySelect.options[daySelect.selectedIndex].value+", "+
                yearSelect.options[yearSelect.selectedIndex].value + " " + 
                hourSelect.options[hourSelect.selectedIndex].value + ":" +
                minuteSelect.options[minuteSelect.selectedIndex].value + ":" + "00");
       
        var mainDiv = document.getElementById("main");
        var article = document.createElement("article");
        article.setAttribute("class","post");
        article.setAttribute("id","article");
    
        var ul = document.createElement("ul");
        ul.setAttribute("class","actions");
        ul.setAttribute("align","center");

        //Note Name
        var titleH2 = document.createElement("h2");
        titleH2.innerHTML = document.getElementById("messageInput").value + '<BR>' + "(" + a + ")";
        ul.appendChild(titleH2);

        //Time Left Header
        var titleH23 = document.createElement("h2");
        titleH23.setAttribute("id","titleH23");
        var today = document.createElement("h2");
        //Time Left Counter
        var countDownDate = new Date(a).getTime();//"June 5, 2017 17:41:40"
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            titleH23.innerHTML = days + "days " + hours + ":" + minutes + ":" + seconds;
            if (distance < 0) {
                clearInterval(x);
                var i = 0;
                //expired alarm
                function change() {
                    var color = ["white", "#EF9A9A"];
                    var tcolor = ["gray", "white"];
                    article.style.backgroundColor = color[i];
                    titleH23.style.color = tcolor[i];
                    i = (i + 1) % color.length;
                }
                setInterval(change, 500);
                titleH23.innerHTML = "EXPIRED DATE"
                titleH23.style.color = "white"
                a1.style.backgroundColor = "white"
                a2.style.backgroundColor = "white"
            }
        }, 1000);
        ul.appendChild(titleH23)
        ul.appendChild(today)

        //Buttons
        var li1 = document.createElement("li");
        var a1 = document.createElement("a");
        
        a1.setAttribute("class","button");
        a1.setAttribute("id","buttonEdit");
        a1.setAttribute("style","width:150px");
        a1.innerHTML = "Edit";
        a1.onclick = function(){
            var newTitle = prompt("Please enter new title: ", titleH2);
            titleH2.innerHTML = newTitle
        }
        li1.appendChild(a1)
        ul.appendChild(li1)

        var li2 = document.createElement("li");
        var a2 = document.createElement("a");
        
        a2.setAttribute("class","button");
        a1.setAttribute("id","buttonDelete");
        a2.setAttribute("style","width:150px");
        a2.innerHTML = "Delete";
        a2.onclick = function(){article.parentNode.removeChild(article);}
        li2.appendChild(a2)
        
        ul.appendChild(li2)

    
        article.appendChild(ul)
        mainDiv.appendChild(article)
    }

   

}