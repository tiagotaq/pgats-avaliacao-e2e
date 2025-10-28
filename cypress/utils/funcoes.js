import { faker } from '@faker-js/faker';

export function gerarDadosDeUsuarioDinamicos() {
    return {
        fisrtName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        password: '123Abc',
        birthDay: '23',
        birthMonth: '11',
        birthYear: '1992',
        country: 'Australia',
        state: 'AD',
        city: 'Sidney',
        zipCode: '123456',
        phone: '98765432'
    };
};