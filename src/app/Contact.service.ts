import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './Contact';
import { Contacts } from './MockData';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

constructor() { }
getContacts(): Observable<Contact[]> {
  const mockContacts: Contact[] = Contacts;
  return of(mockContacts);
}

getContact(id: number): Observable<Contact> {
  const foundContact = Contacts.filter(a => a.id === id);
  return of(foundContact[0]);
}
}
