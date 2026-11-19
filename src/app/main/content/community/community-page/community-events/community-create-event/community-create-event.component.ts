import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-community-create-event',
  standalone: false,
  templateUrl: './community-create-event.component.html',
  styleUrls: ['./community-create-event.component.scss']
})
export class CommunityCreateEventComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
