export default function TableList({ handleOpen }) {

    const clients = [ 
      {id: 1, name: "João Silva", email: "joaosilva@gmail.com", job: "Developer", rate: "100", isactive: true},
      {id: 2, name: "João1 Silva", email: "joaosilva1@gmail.com", job: "Developer1", rate: "101", isactive: true},
      {id: 3, name: "João2 Silva", email: "joaosilva2@gmail.com", job: "Developer2", rate: "102", isactive: false}
  ]

  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Profissão</th>
              <th>Nota</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {/* row 1 */}

            {clients.map((client) => (
              <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                    {client.isactive ? 'Ativo' : 'Inativo'}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleOpen('edit')} className="btn btn-secondary">Atualizar</button>
                </td>
                <td>
                  <button className="btn btn-error">Deletar</button>
                </td>
              </tr>
            )) }


          </tbody>
        </table>
      </div>
    </>
  );
}
