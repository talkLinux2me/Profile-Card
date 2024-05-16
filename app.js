const profileCard = document.querySelector(".profile-card");
//logout the object behind an html element
console.dir(profileCard);
let btn = document.querySelector('.btn')

profileCard.style.background = "violet";

function spin() {
    console.log('here')
    let degree = 360;
    setInterval(() => {
      if (degree === 0) degree = 360;
      degree = degree + 20;
      console.log(degree);
      profileCard.style.transform = `rotatZ(${degree}deg)`;
    }, 20);
  }
  
//   profileCard.addEventListener("click", onClick);
  btn.addEventListener("click", spin);

