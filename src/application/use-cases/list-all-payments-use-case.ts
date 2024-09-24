//import {Payment } from '../../domain/payment';
import { PaymentRepository } from '../repositories/paymentRepository';

export class ListAllPaymentUseCase {
    constructor(private paymentRepository: PaymentRepository){}
    execute() {
        const payments = this.paymentRepository.findAll();
        return payments

    }
}