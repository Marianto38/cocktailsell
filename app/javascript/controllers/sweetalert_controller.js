import Swal from 'sweetalert2'
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sweetalert"
export default class extends Controller {
  static values = { title: String }

  connect(){
    console.log("sweetalert")
    this.redirect = false;
  }


  addProduct(event){

    if (this.redirect) return;

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "hola",
      title:  this.titleValue + "  " + "Se creó nuevo producto",
      showConfirmButton: false,
      timer: 100
    })
  }


signed(event){

  if (this.redirect) return;

  event.stopImmediatePropagation();
  event.preventDefault();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  })
}

  show(event){

    if (this.redirect) return;


    event.stopImmediatePropagation();
    event.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger me-2 rounded-pill',
        cancelButton: 'btn btn-success ms-2 rounded-pill',
        popup: 'round-4 bg-secondary',
        title: 'text-light',
        htmlContainer: 'text-light',
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      icon: 'warning',
      title: "Estas seguro de eliminar" + " " + this.titleValue + "?",
      text: "No podrás reversar este cambio!",
      showCancelButton: true,
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'No, regresar!',
      showCloseButton: true,
      showClass: {
        popup: 'animate__animated animate__bounceInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__bounceOutUp'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.redirect = true;
        this.element.click();
      }
      else{
        swalWithBootstrapButtons.fire({
          icon: 'error',
          title: 'Cancelled!',
          showConfirmButton: false,
          timer: 500,
          hideClass: {
            popup: 'animate__animated animate__bounceOutUp'
          }
        })
      }
    })
  }
}
