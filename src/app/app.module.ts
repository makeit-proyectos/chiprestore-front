import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Redux
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducerUI } from './store/ui.reducer';


// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './components/userlayout/admin/admin.component';
import { appRoutes } from './app.routing';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { AdministrarProductosComponent } from './components/administrar-productos/administrar-productos.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ModalProductoComponent } from './components/administrar-productos/modal-producto/modal-producto.component';
// Angular material
import { MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatTabsModule,
  MatCardImage,
  MatRadioGroup,
  MatRadioModule,
  MatChipsModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatAccordion,
  MatExpansionModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatCheckboxModule} from '@angular/material';
import { FiltroComponent } from './components/shared/filtro/filtro.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ToggleSidebarComponent } from './components/shared/toggle-sidebar/toggle-sidebar.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoginComponent } from './components/login/login.component';
import { PasswordPipe } from './pipes/password.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    ResumenComponent,
    AdministrarProductosComponent,
    SucursalesComponent,
    ModalProductoComponent,
    FiltroComponent,
    VentasComponent,
    ToggleSidebarComponent,
    DomseguroPipe,
    LoginComponent,
    PasswordPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutes,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,

    // Imports components material design
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatRadioModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressBarModule,


    StoreModule.forRoot({adminState: reducerUI}),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    })
  ],
// Carga perezosa de un componente, que no es cargado en la plantilla
  entryComponents: [
    ModalProductoComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
