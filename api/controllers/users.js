import { db } from '../connect.js';

export const login = (req, res) => {
    const { cpf, password } = req.body;
    db.query( `INSERT INTO users (cpf, password) VALUES ('${cpf}', '${password}')`, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({message: 'Server error'});
        } else {
            res.status(200).json({message: 'Usuário inserido com sucesso!'});
        }
    }
    );
}

export const updatePasswordNumber = (req, res) => {
    const { cpf, passwordNumber } = req.body;
    db.query(
      `UPDATE users SET password_number = ? WHERE cpf = ?`,
      [passwordNumber, cpf],
      (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Server error' });
        } else {
          res.status(200).json({ message: 'Senha Numérica atualizada com sucesso!' });
        }
      }
    );
  };

export const getRegistersLogins = (req, res) => {
    db.query('SELECT * FROM users', (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({message: 'Server error'});
        } else {
            res.status(200).json(result);
        }
    });
}