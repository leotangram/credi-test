export class UserModel {
  constructor(
    public name?: string,
    public email?: string,
    public numberIdentification?: number, // Cédula
    public password?: string,
    public suitable?: number,
    public id?: string
  ) {}
}
