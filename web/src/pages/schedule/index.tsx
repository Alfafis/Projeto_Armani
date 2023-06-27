import { useState, useEffect, SetStateAction } from 'react';
import api from '../../service/api';

import './style.css';

interface IModality {
  id: number;
  nome: string;
  dia_semana: string;
  hora_inicio: string;
  categoria: string;
}

function Schedule() {
  const [dados, setDados] = useState<SetStateAction<Array<string>>>([]);
  // const [dadosFilter, setDadosFilter] = useState<any>([]);

  // const filterDaysWeek = () => {
  //   const daysWeek: Array<any> = [];

  //   dados.map((values: any) => {
  //     daysWeek.push(values.dia_semana);
  //   });
  //   const totalDaysWeek = daysWeek.filter((a, b) => daysWeek.indexOf(a) === b);
  //   return totalDaysWeek;
  // };
  // const filterHours = () => {
  //   const hours: Array<any> = [];

  //   dados.map((values: any) => {
  //     hours.push(values.dia_semana);
  //   });
  //   const totalHours = hours.filter((a, b) => hours.indexOf(a) === b);
  //   return totalHours;
  // };

  // const getAulas = () => {
  //   const daysWeek = filterDaysWeek();
  //   const hours = filterHours();
  //   const aulasPorDia = {};

  //   // Inicializa o objeto aulasPorDia com um array vazio para cada dia da semana
  //   daysWeek.forEach((day) => {
  //     aulasPorDia[day] = [];
  //   });

  //   // Ordena as aulas pelo horário de início em ordem crescente
  //   const aulasOrdenadas = dados.sort((a, b) => {
  //     return (
  //       new Date(`1970/01/01 ${a.hora_inicio}`) -
  //       new Date(`1970/01/01 ${b.hora_inicio}`)
  //     );
  //   });

  //   // Preenche o objeto aulasPorDia com as aulas ordenadas
  //   aulasOrdenadas.forEach((aula) => {
  //     aulasPorDia[aula.dia_semana].push(aula);
  //   });

  //   // Preenche com objeto vazio se não houver aula em uma posição
  //   for (const day in aulasPorDia) {
  //     const aulasDoDia = aulasPorDia[day];
  //     const totalPosicoes = 7;

  //     while (aulasDoDia.length < totalPosicoes) {
  //       const ultimaAula = aulasDoDia[aulasDoDia.length - 1];
  //       const horaFim = ultimaAula ? ultimaAula.hora_fim : '00:00:00';
  //       // const horaInicio =

  //       const aulaVazia = {
  //         id: null,
  //         nome: '',
  //         descricao: '',
  //         turno: '',
  //         dia_semana: day,
  //         hora_inicio: horaFim,
  //         hora_fim: horaFim,
  //       };

  //       aulasDoDia.push(aulaVazia);
  //     }
  //   }

  //   console.log('filtrado', aulasPorDia);
  //   setDadosFilter([aulasPorDia]);
  // };

  const getDados = () => {
    api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/modality`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDados();
    // getAulas();

    console.log('filtrado', dados);
  }, [setDados]);

  return (
    <aside className="schedule">
      <div>
        <ul>
          {dados
            .filter((a) => a.dia_semana === 'Segunda')
            .map(({ id, hora_inicio }: IModality) => (
              <li className="hour" key={id}>
                {hora_inicio}
              </li>
            ))}
        </ul>
        <ul>
          <li className="dia">Segunda</li>
          {dados
            .filter((a) => a.dia_semana === 'Segunda')
            .map(({ id, nome, hora_inicio }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Terça</li>
          {dados
            .filter((a) => a.dia_semana === 'Terça')
            .map(({ id, nome, hora_inicio }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Quarta</li>
          {dados
            .filter((a) => a.dia_semana === 'Quarta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Quinta</li>
          {dados
            .filter((a) => a.dia_semana === 'Quinta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Quinta</li>
          {dados
            .filter((a) => a.dia_semana === 'Quinta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Sexta</li>
          {dados
            .filter((a) => a.dia_semana === 'Sexta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Sabado</li>
          {dados
            .filter((a) => a.dia_semana === 'Sábado')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
      </div>
    </aside>
  );
}

export default Schedule;
