import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';



const routes: Routes = [
{path: 'home', component: Component1Component},
{path: 'description/:VID', component: Component2Component},
{path: 'MyFav', component: Component3Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[Component1Component, Component2Component, Component3Component]
