import { PaymentRepository } from "../repositories/paymentRepository";

export class DeletePaymentUseCase {
    constructor(
        private paymentRepository: PaymentRepository
        
        
    ) {}

    execute(id: string) {
        return this.paymentRepository.delete(id);
    }
}