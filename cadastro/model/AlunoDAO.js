import {Aluno} from "./Aluno";
import {GenericDAO} from "./GenericDAO";

export default class AlunoDAO extends GenericDAO<Aluno, string>{

    getCreateSQL(): string {
        return ' CREATE TABLE ALUNO (MATRICULA VARCHAR(10)'+
               ' PRIMARY KEY, NOME VARCHAR(20), REGISTRO INTEGER)';
    }
    getTableName(): string { return 'ALUNO';
    }
    getInsertSQL(): string {
        return 'INSERT INTO ALUNO VALUES ( ?,?,? )';
    }
    getInsertParams(entidade: Aluno): any[] {
        let criacao = new Date();
        return
            [entidade.matricula, entidade.nome, criacao.getTime()];
    }
    getUpdateSQL(): string {
        return 'UPDATE ALUNO SET NOME = ? WHERE MATRICULA = ?';
    }
    getUpdateParams(entidade: Aluno): any[] {
        return [entidade.nome, entidade.matricula];
    }
    getDeleteSQL(): string {
        return 'DELETE FROM ALUNO WHERE MATRICULA = ?';
    }
    getSelectAllSQL(): string {
        return 'SELECT * FROM ALUNO';
    }
    getSelectOneSQL(): string {
        return 'SELECT * FROM ALUNO WHERE MATRICULA = ?';
    }
    getEntidade(linha: any): Aluno {
        let criacao = new Date(linha.NOME, criacao);
        return undefined;
    }
}