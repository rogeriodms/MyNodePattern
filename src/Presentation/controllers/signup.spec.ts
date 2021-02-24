import SignUpController from './signup';
import {missingParamError} from '../errors/missing-param-error'

describe('sigup controller', () => {
  test('should return 400 if no name is provide', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'any_email@mail.com.br',
        password: 'any_password',
        passwordConfimation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new missingParamError('name'));
  });

  test('should return 400 if no email is provide', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfimation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new missingParamError('email'));
  });
});
