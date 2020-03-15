import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { Contacts } from '../MockData';
import { ContactService } from '../Contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[] = [];
  constructor(private contactService: ContactService) {

   }

  ngOnInit(): void {
    this.getContactList();
  }

  getContactList(): void {
    this.contactService
      .getContacts()
      .subscribe(contacts => (this.contactList = contacts));
  }

}
