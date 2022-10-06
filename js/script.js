const objs = [
    {
        "nome": "Adroaldo",
        "idade": 34,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissado": "Programador",
            "empresa": "Empresa X",
        },
        "hobbies": ["Programar", "Correr", "Ler"],
    },
    {
        "nome": "Junior",
        "idade": 25,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissado": null,
            "empresa": null,
        },
        "hobbies": ["Jogar", "Academia"],
    }
];

//console.log(objs);

// converter objeto para JSON
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

// converter JSON para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

// colocando um objeto Json em um Array
objData.map((pessoa) => {
    console.log(pessoa.nome);
});