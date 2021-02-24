import {HttpResponse, HttpRequest } from '../protocols/http'
import {missingParamError} from '../errors/missing-param-error'
import {badRequest} from '../helpers/http-helper'
import {Controller} from '../protocols/controller'

export default class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFilds = ['name','email','password', 'passwordConfimation']
    for (const field of requiredFilds){
      if(!httpRequest.body[field]){
        return badRequest(new missingParamError(field))
      }
    }
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    };
  }  
}
