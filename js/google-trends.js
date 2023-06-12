function US(){
			var x = document.getElementById('trends-widget-1');
			x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=US";
			document.getElementById("codenewvalue").innerHTML = "United States";
		}
function NG(){
			var x = document.getElementById('trends-widget-1');
			x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=NG";
			document.getElementById("codenewvalue").innerHTML = "Nigeria";
		}
function AU(){
			var x = document.getElementById('trends-widget-1');
			x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=AU";
			document.getElementById("codenewvalue").innerHTML = "Australia";
		}
function AR(){
			var x = document.getElementById('trends-widget-1');
			x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=AR";
			document.getElementById("codenewvalue").innerHTML = "Argentina";
		}
function CA(){
			var x = document.getElementById('trends-widget-1');
			x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=CA";
			document.getElementById("codenewvalue").innerHTML = "Canada";
		}
function GB(){
			var x = document.getElementById('trends-widget-1');
			x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=GB";
			document.getElementById("codenewvalue").innerHTML = "United Kingdom";
		}
function ZA(){
			var x = document.getElementById('trends-widget-1');
			x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=ZA";
			document.getElementById("codenewvalue").innerHTML = "South Africa";
		}

		/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunctioncode() {
  document.getElementById("myDropdowncode").classList.toggle("showcode");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtncode')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentcode");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showcode')) {
        openDropdown.classList.remove('showcode');
      }
    }
  }
}