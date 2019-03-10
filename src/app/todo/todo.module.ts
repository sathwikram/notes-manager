import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoManagerComponent } from './todo-manager/todo-manager.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './store/todo.reducer';
import { TodoEffects } from './store/todo.effects';
import { TodoService } from './services/todo-store.service';
import {MatButtonModule,MatInputModule,MatSidenavModule,MatToolbarModule,MatTooltipModule,
  MatSliderModule,
    MatSlideToggleModule,
  MatIconModule} from '@angular/material';
  import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    TodoEntryComponent,
    TodoListComponent,
    TodoManagerComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    StoreModule.forFeature('todosState', todoReducer),
    EffectsModule.forFeature([TodoEffects]),
    MatButtonModule, MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
    MatTooltipModule,
  MatSliderModule,
    MatSlideToggleModule,
  MatIconModule,
  Ng2SearchPipeModule
  ],
  providers: [ TodoService ]
})
export class TodoModule { }
