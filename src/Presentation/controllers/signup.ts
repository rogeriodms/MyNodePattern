import {HttpResponse, HttpRequest } from '../protocols/http'
import {missingParamError} from '../errors/missing-param-error'
import {badRequest} from '../helpers/http-helper'

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if(!httpRequest.body.name){
      return badRequest(new missingParamError('name'))
    }
    if(!httpRequest.body.email){
      return {
        statusCode: 400,
        body: new missingParamError('email')
      };
    }
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    };
  }  
}
