const exercises = require('../Exercicios_ij/Controllers/Controladora');

  const main = async () => {
    try {
      const data = await exercises.readCSV('caminho/para/seu/input.csv');
      console.log('Dados lidos:', data);
  
      await exercises.writeCSV('caminho/para/seu/output.csv', data);
      console.log('Dados escritos em output.csv');
    } catch (error) {
      console.error('Erro:', error);
    }
  };