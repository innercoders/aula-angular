import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureSingleComponent } from './feature-single/feature-single.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FeatureComponent,
		FeatureSingleComponent,
		ContactComponent,
		HomeComponent,
		DestaquesComponent,
		ProdutoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
