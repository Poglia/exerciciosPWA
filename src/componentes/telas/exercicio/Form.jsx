import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ExercicioContext from "./ExercicioContext";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } =
        useContext(ExercicioContext);

    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (
        <div className="modal fade" id="modalEdicao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Exercícios</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}
                        className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div class="mb-3">
                                <label htmlFor="txtCodigo"
                                    className="form-label">Código</label>
                                <input className="form-control"
                                    type="number"
                                    id="txtCodigo"
                                    name="codigo"
                                    value={objeto.codigo}
                                    onChange={handleChange}
                                    readOnly />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="txtNome"
                                    className="form-label">Nome</label>
                                <input className="form-control"
                                    type="text"
                                    id="txtNome"
                                    name="nome"
                                    value={objeto.nome}
                                    onChange={handleChange}
                                    required />
                                <div class="valid-feedback">
                                    Nome OK
                                </div>
                                <div class="invalid-feedback">
                                    O nome deve ser informado
                                </div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="txtDescricao"
                                    className="form-label">Séries</label>
                                <input className="form-control"
                                    type="text"
                                    id="txtDescricao"
                                    name="series"
                                    value={objeto.series}
                                    onChange={handleChange}
                                    required />
                                <div class="valid-feedback">
                                Série OK
                                </div>
                                <div class="invalid-feedback">
                                    A Série deve ser informada
                                </div>                                    
                            </div>
                            <div class="mb-3">
                                <label htmlFor="txtSigla"
                                    className="form-label">Repetições</label>
                                <input className="form-control"
                                    type="text"
                                    id="txtSigla"
                                    name="repeticoes"
                                    value={objeto.repeticoes}
                                    onChange={handleChange}
                                    required
                                    maxLength="4" />
                                <div class="valid-feedback">
                                Repetições OK
                                </div>
                                <div class="invalid-feedback">
                                    As Repetições devem ser informadas
                                </div>                                     
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Form;