(() => {

    const DOMString = `<input class="sticky-menu hidden" id="offdrop-menu" type="checkbox" />
  <div class="multipleItems" id="wrapper">
    <header id="header">
      <div class="main-container header-content" id="header-container">
        <div class="section" id="header-widget">
          <div class="widget Header" data-version="2" id="Header1">
            <div class="glitch header-inner">
              <h1>Anonym-R</h1>
            </div>
          </div>
        </div>
        <div class="menu-container section" id="menu-content">
          <div class="widget HTML" data-version="2" id="HTML1">
            <ul class="header-menu widget-content" itemscope itemtype="https://schema.org/SiteNavigationElement">
              <li>
                <a class="table" href="index.html" itemprop="url">
                  <span class="name" itemprop="name">Home</span>
                </a>
              </li>
              <!-- li>
                <a class="table" itemprop="url">
                  <span class="name" itemprop="name">Contact</span> 
                </a>
              </li -->
            </ul>
            <label class="full-close" for="offdrop-menu"></label>
          </div>
       </div>
        <div class="header-nav right">
          <div class="link">
            <a class="request" href="https://github.com/Kurdistanis1">GitHub</a>
          </div>
          <label class="navSetting" for="offdrop-menu">
            <svg viewbox="0 0 512 512">
              <path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"></path>
            </svg>
          </label>
       </div>
      </div>
    </header>
    <main>
      <div class="landing-page">
        <div class="page-1">
          <div align="center" class="landing-content main-container">
            <div class="landing-image"></div> 
            <div align="center">
              <h1 class="title">Find best Termux Tools</h1>
              <p class="content">All tolls is Free</p> 
            </div>
            <div class="landing-absolute">
              <a href="#browse">
                <svg viewbox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
              </a> 
            </div> 
          </div>
          <svg class="landing-svg" fill="none" height="36" id="browse" viewbox="0 0 1440 36">
            <g id="mask">
              <mask height="258" id="mask0" maskunits="userSpaceOnUse" width="2739" x="-651" y="-1"><path clip-rule="evenodd" d="M1440.08 94.7682C1840.62 52.9509 2088 327.189 2088 239.643C2088 107.292 1474.85 -0.00012207 718.5 -0.00012207C454.994 -0.00012207 208.87 13.4321 0 36C-390.66 78.2098 -651 153.401 -651 239.643C-651 324.848 -395.883 48.847 -13.028 91.3391L-18.0044 157.143H1435.1L1440.08 94.7682Z" fill="url(#paint0_linear)" fill-rule="evenodd" id="mask_2"></path> 
              </mask>
              <g mask="url(#mask0)"><rect fill="#171717" height="161" id="bg" width="1440" y="-0.00012207"></rect></g><defs><lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="718.5" x2="718.5" y1="-0.00012207" y2="257"> <stop offset="1" stop-color="white"></stop> </lineargradient></defs> 
            </g>
          </svg>
        </div>
        <div class="page-2">
          <div class="landing-content main-container">
            <h1 class="title">All Tools</h1> 
            <p style="font-family: 'IM Fell English SC', serif;" class="content">PYTHON,  PHP,  BASH(.sh),  HTML,  CSS,  JAVASCRIPT</p> 
         </div> 
       </div>
     </div>
      <div class="main-container main-content">
        <div class="section" id="mainbar">
          <div class="widget Blog" data-version="2" id="Blog00">
            <!--[ Posts ]-->
            <div id="post"></div>
            
          </div> 
        </div>
      </div>
   </main>
   <div align="center" class="no-items section" style="padding-top:-11px;" id="mainbot">©2022 <span style="color:red">Anonym-R</span>, All rights reserved. </div><br/><br/>
  </div>`

    const createLinkElementAndAppendInHead = (path) => {
        const element = document.createElement('link');
        element.href = `${path}`;
        element.rel = 'stylesheet';
        document.head.append(element);
    }
    
    setTimeout(
        ()=>{
        document.getElementById("intro").style.transform="scale(10,10)"
        document.getElementById("intro").style.opacity=0
        setTimeout(()=>{
        document.getElementById("intro").style.display="none"
        },6000)
        },3000)

    createLinkElementAndAppendInHead('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');
    createLinkElementAndAppendInHead('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');
    document.body.insertAdjacentHTML('afterbegin', DOMString)
    
})();
