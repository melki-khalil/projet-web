const scrollButton = document.getElementById("scrollButton");

// Show the button when scrolling down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

  nb=0
  function showToast() {
    var nbItems=document.getElementById('nbCartItems')
    var toastElement = document.getElementById('myToast'); 
    var toast = new bootstrap.Toast(toastElement);
   
    nb++
    // Show the toast
    toast.show();
    nbItems.innerHTML=nb

  }

  //enable tooltips
    document.addEventListener('DOMContentLoaded', function () {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });


// enable modle
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })



// image link
function getProduct(x){
  window.location.href=x;
}

