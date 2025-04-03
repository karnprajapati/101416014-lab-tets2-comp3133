import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarrypotterService, Character } from '../harrypotter.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbarModule,RouterModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.scss']
})

export class CharacterdetailsComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private hpService: HarrypotterService
  ) {}

  ngOnInit(): void {
    const name = decodeURIComponent(this.route.snapshot.paramMap.get('name') || '');
    if (name) {
      this.hpService.getAllCharacters().subscribe((characters) => {
        this.character = characters.find((c) => c.name === name);
      });
    }
  }
}