const exercises = require('../Exercicios_ij/Model/Modelos');

 var data: string = "Ola mundo!!!!"
  const main = async () => {
    try {
      const data = await exercises.readCSV('../Exercicios_ij/db/estoque.csv');
      console.log('Dados lidos:', data);
  
      await exercises.writeCSV('../Exercicios_ij/db/estoque.csv', data);
      console.log('Dados escritos em output.csv');
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  main();