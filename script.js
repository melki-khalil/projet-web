
  function showToast() {

    var toastElement = document.getElementById('myToast');
    
    var toast = new bootstrap.Toast(toastElement);
    
    // Show the toast
    toast.show();
  }

  //enable tooltips
    document.addEventListener('DOMContentLoaded', function () {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });

