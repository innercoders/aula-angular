import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-produto',
	templateUrl: './produto.component.html',
	styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

	@Input()
	public produto: any;

	constructor() {
	}

	ngOnInit(): void {
	}

}
