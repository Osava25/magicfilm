const formQuestion = document.getElementById('q-movies');
const questions = formQuestion.querySelectorAll('.question');
const nextBtns = formQuestion.querySelectorAll('.next-btn');
const prevBtns = formQuestion.querySelectorAll('.prev-btn');
  
let currentQuestion = 0;
  
    nextBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        questions[currentQuestion].style.display = 'none';
        currentQuestion++;
        questions[currentQuestion].style.display = 'block';
      });
    });
  
    prevBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        questions[currentQuestion].style.display = 'none';
        currentQuestion--;
        questions[currentQuestion].style.display = 'block';
      });
    });
  
    formQuestion.addEventListener('submit', (e) => {
      
      const formData = new FormData(formQuestion);
      const data = Object.fromEntries(formData);
      console.log('Form submitted:', data);
      // Here you would typically send the data to a server
      alert('Form submitted successfully!');
    });