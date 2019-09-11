import { animal } from './../servicios/animalitos.service';
import { casashogar } from './../models/veterinariasinfo.interface';
import { NavParams, NavController , LoadingController} from '@ionic/angular';
import { fundd } from './../servicios/fundaciones.service';
import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { AnimalitosService } from '../servicios/animalitos.service';
import { ActivatedRoute } from '@angular/router';
import { DatosfService } from '../servicios/datosf.service';
import { datos } from '../models/infoperros.interface';
import { InfoperrosService } from '../servicios/infoperros.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public catalogo : any=[];
  textoBuscarr = '';
  palabra='';  
  fundaciones:datos[];
  
  

  eventoNombre: casashogar={
    nombre:'',
    id:'',
    foto:'',
  }
 
  
 
  eventoNombreID=null;
  constructor(public authservice: AuthService, public animalitos : AnimalitosService,
    private activateRoute: ActivatedRoute,public navCtrl: NavController,
    private LoadingController: LoadingController, private servicio: DatosfService, 
    private datoservice: DatosfService , private info: InfoperrosService) {
   
   }

   buscar(event: any){
    console.log(event);
    this.textoBuscarr = this.eventoNombreID;
    
    
    }

  buscarperro(event: any){
      //console.log(event);
      this.palabra = event.detail.value;
     
      
      }

  ngOnInit() {

     this.eventoNombreID=this.activateRoute.snapshot.params['id'];
     this.animalitos.getanimales().subscribe(fund=>{
          this.catalogo=fund;
          console.log(this.catalogo);
          console.log(this.eventoNombreID);
          
        })
    // if(this.eventoNombreID=='Amor canino'){
    //   this.loadlista();
    // }
    

    //this.info.getRegistros().subscribe(res => this.fundaciones=res);
  }
  
  // async loadlista(){
    
  //  this.animalitos.getanimales().subscribe(fund=>{
  //    this.catalogo=fund;
  //    console.log(this.catalogo);
      
   //  })
     
    //  const loading = await this.LoadingController.create({
    //  message:'Cargando'
    //  });
    //  await loading.present();
    //  this.servicio.getRegistro(this.eventoNombreID).subscribe(res=>{
    //  loading.dismiss();
    //  this.eventoNombre=res;
    //  });
  //} 
  
     
    

}