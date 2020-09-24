import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-destaques',
	templateUrl: './destaques.component.html',
	styleUrls: ['./destaques.component.scss']
})
export class DestaquesComponent implements OnInit {

	public produtos: any[];

	constructor() {
	}

	ngOnInit(): void {
		const produto1 = {
			titulo : 'Hamburguer',
			valor: 39.90,
			observacao: 'Melhor da sua vida.',
			oferta: true
		};

		const produto2 = {
			titulo : 'Misto-quente',
			valor: 8.90,
			observacao: 'Melhor da sua vida asdas.',
			oferta: false
		};

		const produto3 = {
			titulo : 'Misto-quente',
			valor: 8.90,
			observacao: 'Melhor da sua vida.',
			oferta: false
		};

		this.produtos = [];
		this.produtos.push(produto1, produto2, produto3);
	}

}
