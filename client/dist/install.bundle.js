(()=>{var t=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),t.style.visibility="visible",t.addEventListener("click",(function(){e.prompt(),t.setAttribute("disabled",!0),t.textContent="Installed"}))})),window.addEventListener("appinstalled",(function(e){t.textContent="Successfully Installed",console.log("app installed")}))})();