const { Router } = require('express');
const router = Router();
const Controladorrefrescos = require('../controlador/Controladorrefrescos');

router.get('/',Controladorrefrescos.index )
       .post('/',Controladorrefrescos.agregar)
       .get('/:key/:value',Controladorrefrescos.buscar,Controladorrefrescos.mostrar);

module.exports=router;