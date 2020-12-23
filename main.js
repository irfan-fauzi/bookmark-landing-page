const doc = document.querySelector("body");
const tempat = document.querySelector(".slide-main .container");

const search = document.querySelector(".slide-control .search");
const book = document.querySelector(".slide-control .bookmark");
const share = document.querySelector(".slide-control .share");

const slideControl = document.querySelector(".slide-control");



slideControl.addEventListener("click", function (e) {
  if (e.target.className == "bookmark") {
    e.target.style.color = "red";

    search.style.color = "grey";
    share.style.color = "grey";
  } else if (e.target.className == "share") {
    e.target.style.color = "red";

    search.style.color = "grey";
    book.style.color = "grey";
  } else if (e.target.className == "search") {
    e.target.style.color = "red";

    share.style.color = "grey";
    book.style.color = "grey";
  }

});

doc.addEventListener("click", function (e) {

  if (e.target == search) {
    tempat.innerHTML = ` <div class="grid" id="search">
    <img src="images/illustration-features-tab-2.svg" alt="tab1">
    <div class="text-wrap">
      <h3>Intelligent search</h3>
      <p>Our powerful search feature will help you find saved sites in no time at all.
        No need to trawl through all of your bookmarks.
      </p>
      <a href="#" class="btn btn-primary">More info</a>
    </div>
  </div>`;


  } else if (e.target == book) {
    tempat.innerHTML = `<div class="grid" id="bookmark">
    <img src="images/illustration-features-tab-1.svg" alt="tab1">
    <div class="text-wrap">
      <h3>Bookmark in one click</h3>
      <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
        over how you manage your favourite sites.</p>
      <a href="#" class="btn btn-primary">More info</a>
    </div>
  </div>`;


  } else if (e.target == share) {
    tempat.innerHTML = ` <div class="grid" id="share">
    <img src="images/illustration-features-tab-3.svg" alt="tab1">
    <div class="text-wrap">
      <h3>Share your bookmarks</h3>
      <p>Easily share your bookmarks and collections with others. Create a shareable
        link that you can send at the click of a button.</p>
      <a href="#" class="btn btn-primary">More info</a>
    </div>
  </div>`;

  }

});
