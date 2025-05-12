// 1. Button Click Event
document.getElementById('myButton').addEventListener('click', function() {
    this.textContent = 'Clicked!';
    this.style.backgroundColor = '#4CAF50';
  });
  
  // 2. Color-Changing Button
  const colorButton = document.getElementById('colorButton');
  const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#2bb3c0'];
  let colorIndex = 0;
  colorButton.addEventListener('click', function() {
    this.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });
  
  // 3. Hover Effects
  const hoverElement = document.getElementById('hoverElement');
  hoverElement.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#4CAF50';
    this.style.color = 'white';
  });
  hoverElement.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f0f0f0';
    this.style.color = '#333';
  });
  
  // 4. Double-Click Secret Action
  const secretElement = document.getElementById('secretElement');
  secretElement.addEventListener('dblclick', function() {
    alert('🎉 You found the secret feature!');
    document.body.style.backgroundColor = '#e3ffe6';
    this.classList.add('animate');
    setTimeout(() => {
      this.classList.remove('animate');
      document.body.style.backgroundColor = '#f8f8f8';
    }, 1000);
  });
  
  // 5. Keypress Detection
  const keyDisplay = document.getElementById('keyDisplay');
  window.addEventListener('keydown', (e) => {
    keyDisplay.innerHTML = `
      <div><strong>Key:</strong> ${e.key === " " ? "Space" : e.key}</div>
      <div><strong>Code:</strong> ${e.code}</div>
      <div><strong>Key Code:</strong> ${e.keyCode}</div>
    `;
    keyDisplay.classList.add('animate');
    setTimeout(() => keyDisplay.classList.remove('animate'), 500);
  });
  
  // 6. Image Slideshow
  const images = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/301/200',
    'https://placekitten.com/300/201',
    'https://placekitten.com/299/200'
  ];
  const slideshow = document.getElementById('slideshow');
  let currentSlide = 0;
  function showSlide(index) {
    slideshow.src = images[index];
    slideshow.classList.add('animate');
    setTimeout(() => slideshow.classList.remove('animate'), 400);
  }
  document.getElementById('nextButton').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  });
  document.getElementById('prevButton').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
  });
  showSlide(0);
  
  // 7. Form Validation with Real-Time Feedback
  const form = document.getElementById('validationForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailFeedback = document.getElementById('emailFeedback');
  const passwordFeedback = document.getElementById('passwordFeedback');
  
  email.addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.value) {
      emailFeedback.textContent = 'Email is required';
      this.classList.add('invalid');
    } else if (!emailRegex.test(this.value)) {
      emailFeedback.textContent = 'Please enter a valid email address';
      this.classList.add('invalid');
    } else {
      emailFeedback.textContent = '';
      this.classList.remove('invalid');
    }
  });
  
  password.addEventListener('input', function() {
    if (!this.value) {
      passwordFeedback.textContent = 'Password is required';
      this.classList.add('invalid');
    } else if (this.value.length < 8) {
      passwordFeedback.textContent = 'Password must be at least 8 characters';
      this.classList.add('invalid');
    } else {
      passwordFeedback.textContent = '';
      this.classList.remove('invalid');
    }
  });
  
  form.addEventListener('submit', function(event) {
    if (!email.value || !password.value || email.classList.contains('invalid') || password.classList.contains('invalid')) {
      event.preventDefault();
      alert('Please fix the errors in the form');
    }
  });
  