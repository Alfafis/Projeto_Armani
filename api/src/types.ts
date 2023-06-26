interface TUser {
  id?: string;
  nome_aluno?: string;
  data_nascimento?: string;
  telefone?: string;
  email?: string;
  status_aluno?: string;
  tipousuarios_id?: string;
  senha?: string;
}
interface TModality {
  usuario_id?: string;
  modalidade_id?: string;
  grau_faixa?: string;
  valor_modalidade?: string;
  ativo?: string;
}

export { TUser, TModality };
