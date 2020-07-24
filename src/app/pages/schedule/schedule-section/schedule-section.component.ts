import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Participation} from '../../../models/participation';

@Component({
  selector: 'app-schedule-section',
  templateUrl: './schedule-section.component.html',
  styleUrls: ['./schedule-section.component.scss']
})
export class ScheduleSectionComponent implements OnInit {

  @Input() title: string;
  @Input() participations: Participation[];
  @Input() canDelete = false;

  @Output() onDeletion: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  refreshParticipations(): void {
    this.onDeletion.emit(true);
  }
}
