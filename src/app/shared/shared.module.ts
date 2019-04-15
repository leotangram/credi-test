import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './components/navbar/navbar.component'
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material'

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSliderModule
  ],
  exports: [
    // Components
    NavbarComponent,

    // Angular
    FormsModule,
    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [MatNativeDateModule]
})
export class SharedModule {}
