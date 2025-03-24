input.onfocus = function () {
    weaponlists.style.display = 'block';
    input.style.borderRadius = "0.25cm 0 0 0";
    weaponlists.style.fontFamily = "'Pretendard', sans-serif";
  };
  for (var option of weaponlists.options) {
        option.onclick = (function(value) {
        return function() {
            input.value = value;
            input.focus();
            input.style.borderRadius = "5px";
            weaponlists.style.display = 'none';
            setTimeout(function () {
                input.dispatchEvent(new Event('input'));
                weaponlists.style.display = 'block';
            }, 1);
        };
    })(option.value);
  }
  
  input.oninput = function () {
    currentFocus = -1;
    var text = input.value.toUpperCase();
    for (var option of weaponlists.options) {
      if (option.value.toUpperCase().indexOf(text) > -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    };
  };
  var currentFocus = -1;
  input.onkeydown = function (e) {
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(weaponlists.options);
    } else
    if (e.keyCode == 38) {
      currentFocus--;
      addActive(weaponlists.options);
    } else
    if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (weaponlists.options) weaponlists.options[currentFocus].click();
      }
      else{
        document.getElementById("search").click();
      }
    }
    else if (e.keyCode == 27) {
      weaponlists.style.display = 'none';
    } else {
      weaponlists.style.display = 'block';
    }
  };
  
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      x[i].classList.remove("active");
    }window.CP.exitedLoop(0);
  }