import { readCSV } from "../Model/readCSV";
import { writeCSV } from "../Model/writeCSV";
import { Data } from "../Model/interfaceData";
import fs from 'fs';

const filePath = './Model/estoque.csv'

class estoqueServise{
    async criar(data: Data){
        try{
            if(typeof data.nome != 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)){
                throw new Error('Dados Invalidos para o produto');
            }
            else{
                await writeCSV(filePath,[data]);
            }

        }
        catch(error){

        }
    }
}

module.exports = {

    estoqueServise: estoqueServise

};