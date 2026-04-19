const AlertList = () => {
  return (
    <div className="alertlist">
      <div className="alertlist-container">
        <div className="alertlist-header">
          <h2>Alertas</h2>
        </div>
        <div className="alertlist-content">
          <div className="alertlist-items">
            <div className="alertlist-items--yellow">
              <p>Alerta 1: Tarefa atrasada</p>
            </div>
            <div className="alertlist-items--red">
              <p>Alerta 2: Nova tarefa atribuída</p>
            </div>
            <div className="alertlist-items--green">
              <p>Alerta 3: Tarefa concluída</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertList;
