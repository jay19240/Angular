import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-community-create-post',
  standalone: false,
  templateUrl: './community-create-post.component.html',
  styleUrls: ['./community-create-post.component.scss']
})
export class CommunityCreatePostComponent implements OnInit {
  public people$1: Observable<any[]>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
