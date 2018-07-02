import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database'
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  profesoresList: AngularFireList<any>;
  selectProfesor: Profesor=new Profesor();

  constructor(private firebase:AngularFireDatabase) {}

  getProfesores(){
    return this.profesoresList=this.firebase.list('Personal de Salud');
  }

  insertprofesor(profesor: Profesor){
    this.profesoresList.push(
      {
        nombres: profesor.nombres,
        apellidos: profesor.apellidos,
        profesion: profesor.profesion,
        colegiatura: profesor.colegiatura,
        celular: profesor.celular,
        email: profesor.email
      });
  }

  updateProfesor(profesor:Profesor){
    this.profesoresList.update(profesor.$key,{
      nombres: profesor.nombres,
        apellidos: profesor.apellidos,
        profesion: profesor.profesion,
        colegiatura: profesor.colegiatura,
        celular: profesor.celular,
        email: profesor.email
    })
  }

  deleteProfesor($key: string){
    this.profesoresList.remove($key);
  }
  
}
