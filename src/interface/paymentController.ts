import { Request, Response } from 'express';
import { CreatePaymentUseCase } from '../application/use-cases/CreatePayment-online-use-case';
import { ListAllPaymentUseCase } from '../application/use-cases/list-all-payments-use-case';
import { UpdatePaymentUseCase } from '../application/use-cases/update-payment-use-case';
import { DeletePaymentUseCase } from '../application/use-cases/delete-payment-use-case';


export interface CreatePaymentDTO {
    name: string;
    description: string;
    value: number;
}

interface PaymentDTO {
    id: string;
    createdAt: string;
    name: string;
    description: string;
    value: number;
}

export class PaymentController {
    constructor(
        private createPaymentUseCase: CreatePaymentUseCase,
        private listAllPaymentUseCase: ListAllPaymentUseCase,
        private updatePaymentUseCase: UpdatePaymentUseCase,
        private deletePaymentUseCase: DeletePaymentUseCase
    ) {}

    async create(req: Request, res: Response): Promise<void> {
        const { name, description, value } = req.body;
        await this.createPaymentUseCase.execute({ name, description, value });
        res.status(201).send();
    }

    async listAll(req: Request, res: Response): Promise<void> {
        const payments = await this.listAllPaymentUseCase.execute();
        res.json(payments);
    }

    async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const params = req.body; // Use req.body para pegar os dados a serem atualizados
    
        const paymentUpdated = await this.updatePaymentUseCase.execute(id, params);
        res.json({ message: `Pagamento com ${id} alterado com sucesso`, paymentUpdated });
    }


    async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const paymentsFiltered = await this.deletePaymentUseCase.execute(id); // Aguarde a execução
    
        res.json({ message: `Pagamento com ${id} deletado com sucesso`, paymentsFiltered });
    }
}

// No controller, tratamos tudo que tem a haver com o método http, requeste e respotas. Nesse caso, vou pegar de dentro do body todas as propriedades e vou chamar o proximo arquivo que vai retornar 201 com sucesso, e se der erro, ele irá me retornar o status 500 com uma mensagem de erro.

// try está me dizendo, tente criar um pagamento, e se tiver qualquer erro, me retorne

// catch a mensagem de erro.Me mostre esse erro.