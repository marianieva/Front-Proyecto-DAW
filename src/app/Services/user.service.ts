import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 // Supongamos que el rol se obtiene de alguna manera, por ejemplo, de un API
 private userRole: string;

 constructor() {
   // Este valor debería venir de alguna lógica real, aquí se usa un valor fijo para el ejemplo
   this.userRole = 'tecnico'; // o 'tecnico'
 }

 getUserRole(): string {
   return this.userRole;
 }
}