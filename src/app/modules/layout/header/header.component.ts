import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AdminComponent } from '../../admin/admin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog) {
    // add the icon 
    iconRegistry.addSvgIcon(
      'admin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/perm_identity-24px.svg')
    );
  }

  ngOnInit(): void {
  }

  onClick(){
    // open dialog in which user can autenticate
    this.dialog.open(AdminComponent);
  }

}
