import  express  from 'express';
import { configureDependencies } from '../infrastructure/utils/config';


export const app = express();
app.use(express.json());

const { paymentController } = configureDependencies();

app.post('/payments', (req, res) => paymentController.create(req, res));
app.get('/payments', (req, res) => paymentController.listAll(req, res));
app.patch('/payment/:id', (req, res) => paymentController.update(req, res));
app.delete('/payment/:id', (req, res) => paymentController.delete(req, res));


if (require.main === module) {
    const PORT = 3333;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    
    })

}


