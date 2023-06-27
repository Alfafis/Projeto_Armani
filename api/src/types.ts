interface IUser {
  id?: number;
  nome?: string;
  email?: string;
  senha?: number;
}
interface IStudent {
  id?: number;
  nome?: string;
  modalidade?: string;
  grau_faixa?: string;
  situacao?: string;
  dia_semana?: string;
  horario?: string;
}

interface IModality {
  id?: number;
  nome?: string;
  dia_semana?: string;
  horario?: string;
}

export { IUser, IStudent, IModality };
