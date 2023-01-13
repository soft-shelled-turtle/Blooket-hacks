var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state;

setInterval(function() {
  if (hack.isCheating) {
    hack.isCheating = false;
  }
});