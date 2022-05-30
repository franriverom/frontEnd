import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

    toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: true,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

    lanzarAlerta(errorTitle: string, errorBody: string, severity?:SweetAlertIcon){  
     let toastBody: any = {
        width: 500,
        icon: severity || 'error',    
        html:'<p><b>'+errorTitle+'</b></p>'+ 
            '<p>'+ errorBody + '</p>'
      }
      if(!severity || severity == 'error')
      this.toast.fire(toastBody);
    }

    lanzarMensajeExito(errorTitle: string, errorBody: string, severity?:SweetAlertIcon){  
      this.toast.fire({
        width: 500,
        icon: severity || 'error',    
        html:'<p><b>'+errorTitle+'</b></p>'+ 
            '<p>'+ errorBody + '</p>',
      })
    }
  }
