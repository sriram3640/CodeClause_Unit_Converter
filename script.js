//image popup
document.addEventListener('DOMContentLoaded', function() {
  var images = document.getElementsByClassName('portfolio-image');
  var popup = document.getElementById('image-popup');
  var popupImage = document.getElementById('popup-image');
  
  function openPopup(imageSrc) {
    popupImage.src = imageSrc;
    popup.style.display = 'block';
  }
  
  function closePopup() {
    popup.style.display = 'none';
    popupImage.src = '';
  }
  
  function handleImageClick(event) {
    event.stopPropagation();
    var imageSrc = this.src;
    openPopup(imageSrc);
  }
  
  function handleDocumentClick(event) {
    if (!popup.contains(event.target)) {
      closePopup();
    }
  }

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', handleImageClick);
  }
  
  popup.addEventListener('click', closePopup);

  document.addEventListener('click', handleDocumentClick);
});

//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle navbar on mobile devices
function toggleNavbar() {
  let navbar = document.querySelector('.navbar-container');
  navbar.classList.toggle('responsive');
}
