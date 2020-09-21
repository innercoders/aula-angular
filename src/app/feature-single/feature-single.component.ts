import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-single',
  templateUrl: './feature-single.component.html',
  styleUrls: ['./feature-single.component.scss']
})
export class FeatureSingleComponent implements OnInit {

	@Input()
	public productName = 'Nome do Produto';

	@Input()
	public value = 0;

	@Input()
	public imgPath: string;

	constructor() { }

	ngOnInit(): void {
	}

}
