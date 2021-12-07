function verifyPassword(isVerified) {

    document.querySelectorAll(".control-panel input").forEach(
        function(value, key, parent) {
            if(value.id !== "button-ok" && value.id !== "button-password"){
                if(isVerified) {
                    value.removeAttribute("disabled");
                    document.getElementById("button-ok").disabled = true;
                    document.getElementById("button-password").disabled = true;
                    document.getElementById("launch").disabled = true;
                } else {
                    value.disabled = true;
                }
            }
        }
    );
}
function systemsReady() {
    let isSystemsReady = false; // initial value
    document.querySelectorAll(".launch-input input").forEach(
        function (value, key, parent) {

            value.onchange = function () {
                let list =  document.querySelectorAll(".launch-input input");
                for(let i = 0; i < list.length; i++) {
                    isSystemsReady = true;
                    let value = list[i]
                    if((value.value !== "100" && value.getAttribute("type") === "range") || (!value.checked && value.getAttribute("type") === "checkbox")) {
                        isSystemsReady = false;
                        // alert("No " + i + " Not activated");
                        break;
                    } else {
                        // alert("No" + i + "is activated");
                    }
                }
                if(isSystemsReady === true) {
                    document.getElementById("launch").removeAttribute("disabled");
                } else {
                    document.getElementById("launch").disabled = true;
                }
            }

        }
    );
}

function startEvent() {
    verifyPassword(false);
    let inputElement = document.getElementById("button-password");
    document.getElementById("button-ok").addEventListener("click", function () {
        if(inputElement.value === "TrustNo1") {
            verifyPassword(true);
        }
    });
}
function beginMissionToEarth() {
    document.getElementById("launch").addEventListener("click", function () {
        let id = null;
        const elem = document.querySelector(".rocket");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos === 1000) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.right = pos + "px";
            }
        }
    });
}
startEvent();
systemsReady();
beginMissionToEarth();