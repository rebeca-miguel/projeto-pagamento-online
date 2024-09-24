import { Payment } from '../../domain/payment';


// regra DE COMO SALVAR OU BUSCAR 
export interface PaymentRepository {
    save(payment: Payment): void;
    findAll(): Payment[];
    update(id:  string, bodyParams: Partial<Payment>): Payment | null
    delete(id: string): Payment[];
    
}