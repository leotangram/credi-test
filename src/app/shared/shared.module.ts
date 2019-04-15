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
  MatNativeDateModule,
  MatRippleModule,
  MatExpansionModule
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
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
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
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSliderModule
  ],
  providers: [MatNativeDateModule]
})
export class SharedModule {}
