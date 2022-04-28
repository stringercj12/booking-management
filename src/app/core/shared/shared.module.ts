import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [SidebarComponent, NotificationsComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    TooltipModule,
    RouterModule,
    HttpClientModule,
    AvatarModule,
    ButtonModule,
    ScrollPanelModule,
  ],
  exports: [
    // "Components"
    SidebarComponent,
    NotificationsComponent,
    // "Plugins"
    AngularSvgIconModule,
    TooltipModule,
    RouterModule,
    HttpClientModule,
    AvatarModule,
    ButtonModule,
    ScrollPanelModule,
  ],
})
export class SharedModule {}
