import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { ListComponentsComponent } from './list-components/list-components.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';



@NgModule({
  declarations: [
    AddContactComponent,
    EditComponentComponent,
    ListComponentsComponent,
    ViewComponentComponent,
    DeleteComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
