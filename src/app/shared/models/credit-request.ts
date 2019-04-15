export class CreditRequestModel {
  constructor(
    public requestedValue: number,
    public dateToPay: Date,
    public creditStatus: number, // Approved - Rejected
    public paymentCredit: number // Yes - No
  ) {}
}
