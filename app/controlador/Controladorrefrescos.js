//const Modelorefrescos = require('../modelo/Modelorefrescos');
const modelorefresco = require('../modelo/Modelorefrescos')

function index(req,res) {
    console.log('ok');
    modelorefresco.find({})
    .then(refrescos => {
        if(refrescos.length) return res.status(200).send({refrescos});
        return res.status(204).send({message:'No hay contenido'});
    }).catch(error => res.status(500).send({error}));
}

function agregar(req,res) {
    console.log(req.body);
    new modelorefresco(req.body).save()
    .then(refrescos => {
        res.status(200).send({refrescos})
    }).catch(error => res.status(500).send({error}));
}

function buscar(req,res,next) {
    let consulta ={};
    consulta[req.params.key]=req.params.value;
    modelorefresco.find(consulta).then(refrescos =>{
        if(!refrescos.length) return next();
        req.body.refrescos= refrescos;
        return next();
        
    }).catch(error => {
        req.body.error=error;
        next();
    })
}

function mostrar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message: 'No hay datos que mostrar'});
    let refrescosObj = req.body.refrescos;
    return res.status(200).send({refrescosObj});
    
}

module.exports={
    index,
    agregar,
    buscar,
    mostrar
}