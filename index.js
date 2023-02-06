var switchtab = 0;

// when the user loses focus
window.addEventListener("blur", () => {
  document.title = "Breakup";
  switchtab = switchtab + 1;
  document.getElementById("heading").innerHTML=`Number of times Tab switched: ${switchtab}`;
//   alert("Don't switch tab, test will get terminated");
  console.log(switchtab);
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
  document.title = "Patch Up";
});
