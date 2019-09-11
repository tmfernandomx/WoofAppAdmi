import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltrocPipe } from './filtroc.pipe';
import { FiltrobPipe } from './filtrob.pipe';

@NgModule({
  declarations: [FiltroPipe, FiltrocPipe, FiltrobPipe],
  exports:[ FiltroPipe, FiltrocPipe, FiltrobPipe]
 
})
export class PipesModule { }
