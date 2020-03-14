import { Contact } from './Contact';

export const Contacts: Contact[] = [
    {
        id: 1,
        firstName: 'Prashant',
        middleName: '',
        lastName: 'Yadav',
        addresses: [
            {
                type: 'Home',
                streetAddress: 'McCallum blvd',
                state: 'Texas',
                city: 'Dallas',
                zipCode: 75252
            },
            {
                type: 'Work',
                streetAddress: '90103 Glacier Hill Terrace',
                state: 'Texas',
                city: 'Dallas',
                zipCode: 75003
            }
        ],
        phoneNumbers: [
            {
                type: 'Work',
                areaCode: 732,
                number: '732-392-7165'
            },
            {
                type: 'Home',
                areaCode: 575,
                number: '575-780-6421'
            }
        ],
        dates: [
            {
                type: 'birthday',
                date: new Date('07-06-1986')
            },
            {
                type: 'anniversary',
                date: new Date('11-07-1992')
            }
        ]
    },
    {
        id: 2,
        firstName: 'Sherwood',
        middleName: '',
        lastName: 'Spoerl',
        addresses: [
            {
                type: 'Home',
                streetAddress: '2287 Sutteridge Park',
                state: 'Texas',
                city: 'Dallas',
                zipCode: 75252
            },
            {
                type: 'Work',
                streetAddress: '37 Sommers Hill',
                state: 'Texas',
                city: 'Dallas',
                zipCode: 75003
            }
        ],
        phoneNumbers: [
            {
                type: 'Work',
                areaCode: 732,
                number: '732-392-7165'
            },
            {
                type: 'Home',
                areaCode: 441,
                number: '441-557-2835'
            }
        ],
        dates: [
            {
                type: 'birthday',
                date: new Date('07-06-1986')
            },
            {
                type: 'anniversary',
                date: new Date('11-07-1992')
            }
        ]
    }
];
