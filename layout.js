document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>
<div class="header-image">
		 <img class="full-width-image" src="https://i.imgur.com/3dxjcUt.png">
        </div>
        <div class="header-content">
	        <div class="header-title">SeeYouSoonTX!</div>
	        
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li><a href="/page1">Page 1</a></li>
	            <li><a href="/page2">Page 2</a></li>
	            <li><a href="/page3">Page 3</a></li>
	            <li>
	          </ul>
	        </nav>
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <div class="sidebar-section">
          <div class="sidebar-title">More Info</div>
          <p>We are almost always doing shows! Check our instagram to stay updated on upcomming shows and new music releases! </p>
          <p>Also keep your eyes out for the occasional merch drop!</p>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Album Releases</div>
          <ul>
            <li>Listen To The Dogs Bark</li>
			<img class="full-width-image" src="https://i.imgur.com/jb3Vmkn.jpeg">
            <li>Why I Used To Hate The Ravens</li>
			<img class="full-width-image" src="https://i.imgur.com/XYUzMXX.jpeg">
          </ul>
        </div>
    
       
		<div class="sidebar-section">
    		<div class="sidebar-title">Band Photos!</div>
    		<marquee>
        		<a href="https://www.instagram.com/seeyousoontx/" target="_blank">
            		<img src="https://i.imgur.com/pMds2vt.jpg" alt="" style="height:150px; width:auto;">
        		</a>
        		<a href="https://www.instagram.com/seeyousoontx/" target="_blank">
            		<img src="https://i.imgur.com/dFTVPYm.jpg" alt="" style="height:150px; width:auto;">
       		 	</a>
        		<a href="https://www.instagram.com/seeyousoontx/" target="_blank">
            		<img src="https://i.imgur.com/SfLRNkj.jpg" alt="" style="height:150px; width:auto;">
        		</a>
       	 		<a href="https://www.instagram.com/seeyousoontx/" target="_blank">
            		<img src="https://i.imgur.com/dxTvdPA.jpg" alt="" style="height:150px; width:auto;">
        		</a>
    		</marquee>
		</div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">meow</div>
          <img class="full-width-image" src="https://i.imgur.com/7jMmoTO.png">
        </div>
        
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>Thanks for taking a peak :3!</div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
