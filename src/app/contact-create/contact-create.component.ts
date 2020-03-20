import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { ContactCreateService } from './contact-create.service';
import { Address } from '../Address';
import { DateInstance } from '../DateInstance';
import { Phone } from '../Phone';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  public contact: Contact = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    addresses: [{
      id: 0,
      customerId: 0,
      type: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: 0
    }],
    phoneNumbers: [{
      id: 0,
      customerId: 0,
      type: '',
      areaCode: 0,
      number: ''
    }],
    dates: [{
      id: 0,
      customerId: 0,
      type: '',
      date: new Date()
    }]
  };
  constructor(private contactCreateService: ContactCreateService) { }

  ngOnInit(): void {
  }

  addAddress() {
    this.contact.addresses.push({
      id: 0,
      customerId: 0,
      type: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: 0
    });
  }

  removeAddress(i: number) {
    this.contact.addresses.splice(i, 1);
  }

  addPhoneNumber() {
    this.contact.phoneNumbers.push({
      id: 0,
      customerId: 0,
      type: '',
      areaCode: 0,
      number: ''
    });
  }

  removePhoneNumber(i: number) {
    this.contact.phoneNumbers.splice(i, 1);
  }

  addDateInstance() {
    this.contact.dates.push({
      id: 0,
      customerId: 0,
      type: '',
      date: new Date()
    });
  }

  removeDateInstance(i: number) {
    this.contact.dates.splice(i, 1);
  }

  createContact() {
    this.contactCreateService.saveContact(this.contact);
  }

}
