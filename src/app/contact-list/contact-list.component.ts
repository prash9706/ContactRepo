import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { Contacts } from '../MockData';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[] = [];
  constructor() { }

  ngOnInit(): void {
    this.contactList = Contacts;
    console.log(this.contactList);
  }

}
