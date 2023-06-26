import { useState, useEffect } from 'react';
import bg_horarios from '../../assets/images/bg_horarios.png';
import api from '../../service/api';

function Schedule() {
  const [result, setResult] = useState<any>([]);

  const handleConnect = async () => {
    try {
      await api().get(`${import.meta.env.VITE_API_ROTA_URL}/users`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const res = handleConnect;
    setResult(res);

    console.log(result);
  }, []);

  return (
    <aside className="schedule">
      <img src={bg_horarios} alt="horarios" className="image" />
    </aside>
  );
}

export default Schedule;
