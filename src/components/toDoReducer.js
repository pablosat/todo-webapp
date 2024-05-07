import { v4 as uuidv4 } from "uuid";

export const toDoReducer = (state, action = { type: "", payload: {} }) => {
  const { type, payload } = action;
  switch (type) {
    case addToDo().type: {
      const id = payload.id || uuidv4();
      return [...state, { id, name: payload.name, completed: false }];
    }
    case deleteToDo().type:
      return state.filter(({ id }) => id !== payload.id);
    case markToDo().type:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    case editToDo().type:
      return state.map((todo) => (todo.id === payload.id ? { ...todo, name: payload.name } : todo));
    default:
      return [
        {
          id: 6,
          name: "Comprar Rack",
          completed: true
        },
        {
          id: 2,
          name: "Comprar Tele",
          completed: true
        },
        {
          id: 123,
          name: "Devolver mochilas alicia",
          completed: true
        },
        {
          id: 8,
          name: "Servicio tecnico winia",
          completed: true
        },
        {
          id: 11,
          name: "hora al dentista",
          completed: true
        },
        {
          id: 10,
          name: "tapper microondas",
          completed: true
        },
        {
          id: 1131,
          name: "botar db agenda!",
          completed: true
        },
        {
          id: 7,
          name: "Hacer menu",
          completed: false
        },
        {
          id: 3,
          name: "Botar ropa",
          completed: false
        },
        {
          id: 4,
          name: "Botar cosas bodega",
          completed: false
        },
        {
          id: 1,
          name: "Definir plan de inversion",
          completed: false
        },
        {
          id: 5,
          name: "Aceite caja cambios",
          completed: false
        },
        {
          id: 11331,
          name: "arreglar jabon quebrado",
          completed: false
        },
        {
          id: 1133,
          name: "vender ps4",
          completed: false
        }
      ];
  }
};

export const addToDo = ({ name, id } = {}) => ({
  type: "ADD",
  payload: {
    id,
    name
  }
});

export const deleteToDo = ({ id } = {}) => ({
  type: "REMOVE",
  payload: {
    id
  }
});

export const markToDo = ({ id } = {}) => ({
  type: "MARK",
  payload: {
    id
  }
});

export const editToDo = ({ id, name } = {}) => ({
  type: "EDIT",
  payload: {
    id,
    name
  }
});
