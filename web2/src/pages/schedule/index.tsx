import { useState, useEffect } from 'react';
import bg_horarios from '../../assets/images/bg_horarios.png';
import api from '../../service/api';

function Schedule() {
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    const res = api('users');
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
