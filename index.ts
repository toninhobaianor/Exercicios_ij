const exercises = require('../Exercicios_ij/Model/Modelos');

 var data: string = "ola mundo"
  const main = async () => {
    try {
      const data = await exercises.readCSV('../Exercicios_ij/estoque.csv');
      console.log('Dados lidos:', data);
  
      await exercises.writeCSV('../Exercicios_ij/estoque.csv', data);
      console.log('Dados escritos em output.csv');
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  main();