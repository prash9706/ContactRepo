import { Address } from './Address';
import { DateInstance } from './DateInstance';
import { Phone } from './Phone';

export class Contact {
    id: number;
    firstName = '';
    middleName = '';
    lastName = '';
    addresses: Address[];
    phoneNumbers: Phone[];
    dates: DateInstance[];
}
