# Cronograma do Projeto da Livraria

## Parte 1 — Quebra de tarefas (WBS leve)

| Requisito | Tarefas técnicas necessárias |
|---|---|
| RF001 — Listar livros | Criar rota GET /livros; criar método no service para listar os livros; criar controller; retornar HTTP 200. |
| RF002 — Buscar livro por índice | Criar rota GET /livros/:indice; buscar o livro no service; tratar livro inexistente com HTTP 404. |
| RF003 — Cadastrar livro | Criar rota POST /livros; receber dados no body; criar o objeto Livro; adicionar ao array; retornar HTTP 201. |
| RF004 — Atualizar livro | Criar PUT /livros/:indice para atualização completa e PATCH /livros/:indice para atualização parcial; validar índice; retornar HTTP 200 ou 404. |
| RF005 — Excluir livro | Criar DELETE /livros/:indice; localizar o livro; remover do array; retornar HTTP 204 ou 404. |

## Parte 2 — Cronograma com marcos e dependências

| # | Tarefa | Responsável | Duração | Depende da tarefa # |
|---|---|---|---:|---|
| 1 | Planejar requisitos e quebrar em tarefas técnicas | Maria Eduarda | 1 dia | — |
| 2 | Organizar estrutura MVC e rotas da API | Luis Miguel | 1 dia | 1 |
| 3 | Implementar POST /livros | Luis Miguel | 1 dia | 2 |
| 4 | Implementar PUT e PATCH /livros/:indice | Ana Laura | 1 dia | 3 |
| 5 | Implementar DELETE /livros/:indice | Victor | 1 dia | 4 |
| 6 | Testar endpoints e documentar resultados | Maria Eduarda | 1 dia | 5 |

### Marcos

| # | Marco | Quando |
|---|---|---|
| M1 | Planejamento e estrutura inicial concluídos | Após as tarefas 1 e 2 |
| M2 | CRUD de livros concluído | Após a tarefa 5 |
| M3 | Testes e documentação concluídos | Após a tarefa 6 |

### Ferramenta de gestão

**GitHub Projects**

**Por quê?** O projeto já está hospedado no GitHub e as tarefas podem ser acompanhadas por Issues, responsáveis, labels, milestones e diferentes visões. Isso combina com uma organização incremental do trabalho, permitindo acompanhar as tarefas conforme são desenvolvidas e testadas.

## Parte 3 — Gestão no GitHub

### Milestones

1. **M1 — Planejamento e estrutura** — após as tarefas 1 e 2.
2. **M2 — CRUD de livros** — após a tarefa 5.
3. **M3 — Testes e documentação** — após a tarefa 6.

### Issues

| Issue | Título | Responsável | Milestone | Dependência |
|---|---|---|---|---|
| #2 | Planejar requisitos e quebrar o projeto em tarefas técnicas | Maria Eduarda | M1 | — |
| #3 | Organizar estrutura MVC e rotas da API de livros | Luis Miguel | M1 | #2 |
| #4 | Implementar POST /livros — cadastro de livro | Luis Miguel | M2 | #3 |
| #5 | Implementar PUT e PATCH /livros/:indice | Ana Laura | M2 | #4 |
| #6 | Implementar DELETE /livros/:indice | Victor | M2 | #5 |
| #7 | Testar endpoints e documentar resultados no projeto | Maria Eduarda | M3 | #6 |

### Visões do Project

- Board (quadro)
- Table (tabela)
- Roadmap (linha do tempo)
- Iteration (sprints), se o grupo optar por acompanhar o trabalho em ciclos

### Acessos

- Todos os integrantes devem ter acesso ao Project.
- O professor deve ser adicionado ao Project.

## Checklist

- [x] Requisitos funcionais quebrados em tarefas técnicas.
- [x] Tarefas estimadas em dias.
- [x] Dependências organizadas.
- [x] Três marcos definidos.
- [x] GitHub Projects escolhido.
- [x] Issues iniciais criadas no repositório.
- [ ] Criar os 3 milestones no GitHub.
- [ ] Criar/configurar o GitHub Project.
- [ ] Criar labels e associá-las às issues.
- [ ] Adicionar integrantes e professor ao Project.
