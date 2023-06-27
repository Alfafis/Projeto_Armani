import { useState, useEffect, SetStateAction } from 'react';
import api from '../../service/api';

import './style.css';

interface IModality {
  dia_semana: string | [object];
  hora_inicio: string | [object];
  categoria: string | [object];
}

function Schedule() {
  const [dados, setDados] = useState<SetStateAction<Array<string>>>([]);
  const [tableData, setTable] = useState<Array<IModality>>([]);
  const [result, setResult] = useState<number>(0);
  const [headerTop, setHeaderTop] = useState<SetStateAction<Array<string>>>([]);
  const [headerLeft, setHeaderLeft] = useState<SetStateAction<Array<string>>>(
    []
  );
  const [columns, setColumns] = useState<SetStateAction<Array<string>>>([]);

  const tableColletions: IModality = {
    dia_semana: [],
    hora_inicio: [],
    categoria: [],
  };

  function filtrarDados(array1: Array<SetStateAction<string>>, word: string) {
    const aux: Array<string> = [];
    if (word === 'semana') {
      dados.forEach((element: any, index: number) => {
        tableColletions.dia_semana[index] = [element.id, element.dia_semana];
      });
    } else if (word === 'horario') {
      dados.forEach((element: any, index: number) => {
        tableColletions.hora_inicio[index] = [element.id, element.hora_inicio];
      });
    } else if (word === 'categoria') {
      dados.forEach((element: any, index: number) => {
        tableColletions.categoria[index] = [element.id, element.nome];
      });
    } else if (word === 'dia') {
      dados.forEach((element: any, index: number) => {
        aux.push(element.dia_semana);
      });
      return aux;
    } else if (word === 'hora') {
      dados.forEach((element: any, index: number) => {
        aux.push(element.hora_inicio);
      });
      return aux;
    }
  }

  function AgruparDados(aux) {
    const new_array = aux.filter(
      (item: string, index: number) => aux.indexOf(item) === index
    );
    return new_array;
  }
  function getDados() {
    api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/modality`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  }

  function add() {
    const a: number = 5;
    const b: number = 10;
    setResult(a + b);
  }

  useEffect(() => {
    getDados();
    add();

    filtrarDados(dados, 'semana');
    filtrarDados(dados, 'horario');
    filtrarDados(dados, 'categoria');
    const dia = filtrarDados(dados, 'dia');
    const hora = filtrarDados(dados, 'hora');

    const filtroHeadersTop = AgruparDados(dia);
    setHeaderTop(filtroHeadersTop);

    const filtroHeadersLeft = AgruparDados(hora);
    setHeaderLeft(filtroHeadersLeft);

    setColumns(tableColletions.categoria);
  }, [result]);

  return (
    <aside className="schedule">
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            {headerTop.map((dia: string, key: number) => (
              <th className="thead" key={key}>
                <span>{dia}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {headerLeft.map(
              (hora: string, key: number) =>
                key === 0 && (
                  <th className="thead" key={key}>
                    <span>{hora.replace(':00:00', 'H')}</span>
                  </th>
                )
            )}
            {columns.map(
              (a: Array<string>) =>
                a[0] <= 6 && (
                  <td key={a[0]}>
                    <span>{a[1]}</span>
                  </td>
                )
            )}
          </tr>
          <tr>
            {headerLeft.map(
              (hora: string, key: number) =>
                key === 1 && (
                  <th className="thead" key={key}>
                    <span>{hora.replace(':00:00', 'H')}</span>
                  </th>
                )
            )}
            {columns.map(
              (a: Array<any>) =>
                a[0] >= 6 &&
                a[0] < 12 && (
                  <td key={a[0]}>
                    <span>{a[1]}</span>
                  </td>
                )
            )}
          </tr>
          <tr>
            {headerLeft.map(
              (hora: string, key: number) =>
                key === 2 && (
                  <th className="thead" key={key}>
                    <span>{hora.replace(':00:00', 'H')}</span>
                  </th>
                )
            )}
            {columns.map(
              (a: Array<any>) =>
                a[0] >= 12 &&
                a[0] < 18 && (
                  <td key={a[0]}>
                    <span>{a[1]}</span>
                  </td>
                )
            )}
          </tr>
          <tr>
            {headerLeft.map(
              (hora: string, key: number) =>
                key === 3 && (
                  <th className="thead" key={key}>
                    <span>{hora.replace(':00:00', 'H')}</span>
                  </th>
                )
            )}
            {columns.map(
              (a: Array<any>) =>
                a[0] >= 6 &&
                a[0] < 12 && (
                  <td key={a[0]}>
                    <span>{a[1]}</span>
                  </td>
                )
            )}
          </tr>
          <tr>
            {headerLeft.map(
              (hora: string, key: number) =>
                key === 4 && (
                  <th className="thead" key={key}>
                    <span>{hora.replace(':00:00', 'H')}</span>
                  </th>
                )
            )}
            {columns.map(
              (a: Array<any>) =>
                a[0] >= 8 &&
                a[0] < 14 && (
                  <td key={a[0]}>
                    <span>{a[1]}</span>
                  </td>
                )
            )}
          </tr>
          <tr>
            {headerLeft.map(
              (hora: string, key: number) =>
                key === 5 && (
                  <th className="thead" key={key}>
                    <span>{hora.replace(':00:00', 'H')}</span>
                  </th>
                )
            )}
            {columns.map(
              (a: Array<any>) =>
                a[0] >= 14 &&
                a[0] < 20 && (
                  <td key={a[0]}>
                    <span>{a[1]}</span>
                  </td>
                )
            )}
          </tr>
          <tr>
            {headerLeft.map(
              (hora: string, key: number) =>
                key === 6 && (
                  <th className="thead" key={key}>
                    <span>{hora.replace(':00:00', 'H')}</span>
                  </th>
                )
            )}
            {columns.map(
              (a: Array<any>) =>
                a[0] > 18 && (
                  <td key={a[0]}>
                    <span>{a[1]}</span>
                  </td>
                )
            )}
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

export default Schedule;
