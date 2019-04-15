export class UserModel {
  constructor(
    public name: string,
    public email: string,
    public idNumber: number, // Cédula
    public password?: string,
    public suitable?: number,
    public _id?: string
  ) {}
}
