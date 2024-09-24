import { Payment } from "../../domain/payment";
import { PaymentRepository } from "../repositories/paymentRepository";


export class UpdatePaymentUseCase {
    constructor (
        private paymentRepository: PaymentRepository 
    ) {}

    execute(id: string, bodyParams: Partial<Payment>) {
        return this.paymentRepository.update(id, bodyParams);

    }
}