import {Aluno} from "./Aluno";
import {GenericDAO} from "./GenericDAO";

export default class AlunoDAO extends GenericDAO<Aluno, string>{

    getCreateSQL(): string {
        return ' CREATE TABLE ALUNO (MATRICULA VARCHAR(10)'+
               ' PRIMARY KEY, NOME VARCHAR(20), REGISTRO INTEGER)';
    }

    protected

    getTableName(): string { return 'ALUNO';
    }

    protected

    getInsertSQL(): string {
        return 'INSERT INTO ALUNO VALUES ( ?,?,? )';
    }

    protected

    getInsertParams(entidade: Aluno): any[] {
        let criacao = new Date();
        return
            [entidade.matricula, entidade.nome, criacao.getTime()];
    }

    protected

    getUpdateSQL(): string {
        return 'UPDATE ALUNO SET NOME = ? WHERE MATRICULA = ?';
    }

    protected

    getUpdateParams(entidade: Aluno): any[] {
        return [entidade.nome, entidade.matricula];
    }

    protected

    getDeleteSQL(): string {
        return 'DELETE FROM ALUNO WHERE MATRICULA = ?';
    }

    protected

    getSelectAllSQL(): string {
        return 'SELECT * FROM ALUNO';
    }

    protected

    getSelectOneSQL(): string {
        return 'SELECT * FROM ALUNO WHERE MATRICULA = ?';
    }

    protected

    getEntidade(linha: any): Aluno {
        let criacao = new Date(linha.NOME, criacao);
        return undefined;
    }
}