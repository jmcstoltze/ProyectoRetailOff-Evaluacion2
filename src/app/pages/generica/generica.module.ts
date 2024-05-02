import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericaPageRoutingModule } from './generica-routing.module';

import { GenericaPage } from './generica.page';
import { MenuPageModule } from '../menu/menu.module'; // Importación del menú lateral

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericaPageRoutingModule,
    MenuPageModule // Importación del menú lateral
  ],
  declarations: [GenericaPage]
})
export class GenericaPageModule {}
