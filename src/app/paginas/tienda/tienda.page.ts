import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonSegment } from '@ionic/angular';

import{Tienda, Tiendados} from '../../models/tienda.interface';
import{TiendaService}from '../../servicios/tienda.service';
import{TiendaRopa} from '../../models/tiendaropa.interface';
import{TiendaropaService}from '../../servicios/tiendaropa.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})

export class TiendaPage implements OnInit {
  tiendas:Tienda[];
  tiendados:Tiendados[];
   tiendasropa:TiendaRopa[];
   selected = 'solicitudes';
@ViewChild(IonSegment)segment:IonSegment;
                       
  constructor(private tiendaService: TiendaService,
              private tiendaropaService:TiendaropaService,
             ) { }

  ngOnInit() {
    this.segment.value='alimento';
    this.tiendaService.getTiendas().subscribe(res => this.tiendas=res);
    this.tiendaropaService.getTiendasropa().subscribe(res=>this.tiendasropa=res);

  
  }
  segmentChanged(event){
    const valorSegmento= event.detail.value;
    console.log( valorSegmento);
  }

}
