import { Payment } from '../../domain/payment';
import { PaymentRepository } from '../repositories/paymentRepository';
import { IdGenerator } from '../repositories/id-generatorInterface';

export interface Params {
    name: string;
    description: string;
    value: string;
    


}


export class CreatePaymentUseCase {
    constructor(
        private paymentRepository: PaymentRepository,
        private idGenerator: IdGenerator
    ) {}


    execute(paymentParams: Params): Payment {
        const payment: Payment = {
            id: this.getId(),
            createAt: this.getDate(),
            ...paymentParams
        }
        this.paymentRepository.save(payment);
        return payment
    }

    private getDate() {
        return new Date().toLocaleDateString('pt-BR');
        
    }

    private getId() {
        return this.idGenerator.generate();
    }
}

