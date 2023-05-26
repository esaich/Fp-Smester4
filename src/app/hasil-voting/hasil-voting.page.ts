import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hasil-voting',
  templateUrl: './hasil-voting.page.html',
  styleUrls: ['./hasil-voting.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HasilVotingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
