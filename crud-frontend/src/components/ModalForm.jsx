import { useState } from "react";

export default function ModalForm({ isOpen, onClose, mode, OnSubmit }) {
  const [rate, setRate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [status, setStatus] = useState(false);

    // Muda o status
    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active')
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

  
    return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Editar" : "Adicionar novo perfil"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}

            <label className="input input-bordered my-4 flex items-center gap-2">
              Nome:
              <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              E-mail:
              <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Profissão:
              <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)}/>
            </label>

            <div className="flex justify-between my-4">
              <label className="input input-bordered mr-4 flex items-center gap-2">
                Rate:
                <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)}/>
              </label>
              <select value={status ? 'Active' : 'Inactive'}  className="select select-bordered w-full max-w-xs" onChange={handleStatusChange}>
                <option>Inativo</option>
                <option>Ativo</option>
              </select>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>

            <button className="btn btn-success">
              {mode === "edit" ? "Salvar alterações" : "Adicionar"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
