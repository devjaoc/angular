import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm?: any;
  public mensaje?: string;

  constructor(
    private formBuil: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  
    //si esta isLogin entonces mandar a ruta /
    if (this.authService.isUserLogin()) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuil.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {if (this.loginForm.valid) {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(email, password).subscribe({
      next: (resp) => {
        if (resp.status) {
          const token = resp.access_token;
          this.authService.setTokeSecretKey(token);
          this.router.navigate(['/']);
        } else {
          // Manejar la respuesta en caso de error en los datos de inicio de sesión
          this.mensaje = 'Las credenciales proporcionadas son incorrectas.';
        }
      },
      error: (err) => {
        // Manejar error de servidor o de red
        this.mensaje = 'Error al iniciar sesión. Por favor, inténtelo de nuevo.';
      },
    });
  }
  }
}
