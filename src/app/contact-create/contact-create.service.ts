import { Injectable } from '@angular/core';
import { Address } from '../Address';
import { DateInstance } from '../DateInstance';
import { Phone } from '../Phone';
import { Contact } from '../Contact';
import { Contacts } from '../MockData';

@Injectable({
  providedIn: 'root'
})
export class ContactCreateService {

  constructor() { }
  saveContact(contact: Contact) {
    Contacts.push(contact);
  }
}
