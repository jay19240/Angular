import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';
import { TagCloudComponent } from 'angular-tag-cloud-module';

//**************************************************************************************************************************** */
import { SharedModule } from '@shared/shared.module';
import { CommunityPageComponent } from './community-page.component';

import { CommunityEventsComponent } from './community-events/community-events.component';
import { CommunityCreateEventComponent } from './community-events/community-create-event/community-create-event.component'

import { CommunityPostsComponent } from './community-posts/community-posts.component';
import { CommunityCreatePostComponent } from './community-posts/community-create-post/community-create-post.component'

import { CommunityMembersComponent } from './community-members/community-members.component';
import { CommunityHomeComponent } from './community-home/community-home.component';
import { CommunityMeComponent } from './community-me/community-me.component';
//**************************************************************************************************************************** */

const routes: Routes = [
  {
    path: 'community-page',
    component: CommunityPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: CommunityHomeComponent },
      { path: 'me', component: CommunityMeComponent },
      { path: 'posts', component: CommunityPostsComponent },
      { path: 'events', component: CommunityEventsComponent },
      { path: 'members', component: CommunityMembersComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxMasonryModule,
    TagCloudComponent
  ],
  declarations: [
    CommunityPageComponent,

    CommunityEventsComponent,
    CommunityCreateEventComponent,

    CommunityPostsComponent,
    CommunityCreatePostComponent,

    CommunityMembersComponent,
    CommunityHomeComponent,
    CommunityMeComponent
  ]
})
export class CommunityPageModule { }
