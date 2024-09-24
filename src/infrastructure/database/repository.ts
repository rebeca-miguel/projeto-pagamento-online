import { PaymentRepository } from "../../application/repositories/paymentRepository";
import { Payment } from "../../domain/payment";

export class Repository implements PaymentRepository {
    private payments: Payment[] = [];

    save(payment: Payment): void {
        this.payments.push(payment);
    }

    findAll(): Payment[] {
        return this.payments;
    }

    update(id: string, bodyParams: Partial<Payment>): Payment | null {
        const paymentToUpdate = this.payments.find(payment => payment.id === id);

        if (paymentToUpdate) {
            const updatedPayment = {
                ...paymentToUpdate,
                ...bodyParams //spread operator = espalhamento(tras tudo que está dentro da constante)
            };

            const index = this.payments.findIndex(payment => payment.id === id);
            this.payments[index] = updatedPayment;


            return updatedPayment;
        }

        return null;
    }
        
       
    

    delete(id: string): Payment[] {
        const filteredPayments = this.payments.filter(item => item.id !== id)
        return filteredPayments
    }

    
}