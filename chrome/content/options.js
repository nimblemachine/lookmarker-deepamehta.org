var dialogSettings = window.arguments[1];
// 
var dialog = {
  onload: function() {
    // alert("coming dialogSettings.serviceURL =>  " + dialogSettings.service);
    var textBox = document.getElementById("service-host-box");
    textBox.setAttribute("value", dialogSettings.service);
    var noteBox = document.getElementById("notedown-html");
    noteBox.setAttribute("value", dialogSettings.notedown);
  },

  onSave: function() {
    // content.get
    // var newServiceUrl = document.getElementById("service-host-box");
    // dialogSettings.service = newServiceUrl.getAttribute("value");
    // 
  }
}
