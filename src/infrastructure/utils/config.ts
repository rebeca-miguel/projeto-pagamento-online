import { Repository } from "../../infrastructure/database/repository";
import { CreatePaymentUseCase } from '../../application/use-cases/CreatePayment-online-use-case';
import { IdentifierGenerator } from "./id-generator";
import { PaymentController } from "../../interface/paymentController";
import { ListAllPaymentUseCase } from '../../application/use-cases/list-all-payments-use-case';
import { UpdatePaymentUseCase } from '../../application/use-cases/update-payment-use-case';
import { DeletePaymentUseCase } from "../../application/use-cases/delete-payment-use-case";

export function configureDependencies() {
    const paymentRepository = new Repository();
    const idGenerator = new IdentifierGenerator();
    const createPaymentUseCase = new CreatePaymentUseCase(paymentRepository, idGenerator);
    const listAllPaymentUseCase = new ListAllPaymentUseCase(paymentRepository);
    const updatePaymentUseCase = new UpdatePaymentUseCase(paymentRepository);
    const deletePaymentUseCase = new DeletePaymentUseCase(paymentRepository);
    const paymentController = new PaymentController(createPaymentUseCase, listAllPaymentUseCase, updatePaymentUseCase, deletePaymentUseCase);

    return {
        paymentController
    };
}