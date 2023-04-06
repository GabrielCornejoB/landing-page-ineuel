const firebaseConfig = {
  apiKey: "AIzaSyCkWqrMEYp5ILaH-EUEd5iQ01PpAQk-ALE",
  authDomain: "rating-form-ineuel.firebaseapp.com",
  databaseURL: "https://rating-form-ineuel-default-rtdb.firebaseio.com",
  projectId: "rating-form-ineuel",
  storageBucket: "rating-form-ineuel.appspot.com",
  messagingSenderId: "1069227469322",
  appId: "1:1069227469322:web:79254a69966c003dd70df3"
};

firebase.initializeApp(firebaseConfig);

let ratingFormDB = firebase.database().ref('ratingsForm');
document.getElementById('rating-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  let rating = document.getElementById('rating').value;
  let opinion = document.getElementById('opinion').value;

  saveToFirebase(rating, opinion);
  alert("Enviado exitosamente: Muchas graicas, apreciamos mucho tu opinión <3");
}

const saveToFirebase = (rating, opinion) => {
  let newRatingForm = ratingFormDB.push();
  const date = new Date();
  let currentDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  newRatingForm.set({rating: rating, opinion: opinion, date: currentDate});
};
