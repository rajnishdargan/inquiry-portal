import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerContentListComponent } from './components/player-content-list/player-content-list.component';
import { PlayerComponent } from './components/player/player.component';
import {QuestionsetEditorComponent } from './components/questionset-editor/questionset-editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'player', loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerModule) },
  { path: 'content-list', component: PlayerContentListComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'questionset-editor', component: QuestionsetEditorComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
