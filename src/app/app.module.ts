import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    NoopAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
