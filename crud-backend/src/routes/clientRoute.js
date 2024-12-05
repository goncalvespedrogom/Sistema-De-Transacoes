import express from 'express';

import * as clientCrontroller from "../controllers/clientController.js";

const router = express.Router();

router.get('/clients', clientCrontroller.getClients);
router.post('/clients', clientCrontroller.createClient);
router.put('/clients/:id', clientCrontroller.updateClient);
router.delete('/clients/:id', clientCrontroller.deleteClient);
router.get('/clients/search', clientCrontroller.searchClients); // Buscar na barra de pesquisa

export default router;