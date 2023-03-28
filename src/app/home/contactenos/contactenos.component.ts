import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  formularioContacto: FormGroup;
  enviado: boolean = false;
  enviando: boolean = false;
  btnTxt: string = ' Enviar';

  constructor(private fb: FormBuilder, private eService: GenericService) { }

  ngOnInit(): void {
    this.formularioReactivo();
  }

  formularioReactivo() {
    this.enviado=false;
    this.formularioContacto = this.fb.group({
      nombreCompleto: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")
        ])
      ],
      correo: ['',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      numeroPaja: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ])
      ],
      telefono: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{4}-[0-9]{4}')
        ])
      ],
      asunto: ['', Validators.required],
    });
  }

  enviarFormulario() {
    this.enviado = true;
    this.enviando = true;
    this.btnTxt = " Enviando...";

    if (this.formularioContacto.invalid) {
      this.enviado = true;
      this.enviando = false;
      this.btnTxt = " Enviar"
      return;
    }

    this.eService.enviarFormulario(this.formularioContacto.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        Swal.fire('Éxito', 'Formulario enviado, gracias por contactarnos!','success');
        this.enviando = false;
        this.btnTxt = " Enviar"
        this.formularioReactivo(); 
      })
  }
}
