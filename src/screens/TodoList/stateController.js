export const changeText = (newText) => {
    return {
        text: newText
            .replace(/^(\r?\n| )$/, "")
            .replace(/ +/g, " ")
            .replace(/\r?\n+ +/g, "\n")
            .replace(/ *\r?\n+/g, "\n"),
    };
};

export const addTodo = (state) => {
    let newState = {
        addToTheEnd: false,
        error: "",
        editingIndex: -1,
        text: "",
    };

    if (state.text === "") {
        return newState;
    }

    const text = state.text.replace(/( |\r?\n)$/, "");

    if (state.editingIndex > -1) {
        newState.list = [
            ...state.list.slice(0, state.editingIndex),
            {
                ...state.list[state.editingIndex],
                text,
            },
            ...state.list.slice(state.editingIndex + 1),
        ];

        return newState;
    }

    if (state.list.findIndex((todo) => todo.text === text) > -1) {
        return {
            error: "Todo already exists",
        };
    }

    if (state.addToTheEnd) {
        newState.list = [
            {
                id: 0,
                done: false,
                text,
            },
            ...state.list,
        ];
    } else {
        newState.list = [
            ...state.list,
            {
                id: state.list.length,
                done: false,
                text,
            },
        ];
    }

    return newState;
};

export const changeDone = (id, state) => {
    const index = state.list.findIndex((todo) => todo.id === id);

    return {
        list: [
            ...state.list.slice(0, index),
            {
                ...state.list[index],
                done: !state.list[index].done,
            },
            ...state.list.slice(index + 1),
        ],
    };
};

export const editTodo = (id, state) => {
    const index = state.list.findIndex((todo) => todo.id === id);

    return {
        text: state.list[index].text,
        editingIndex: index,
    };
};

export const removeTodo = (id, state) => {
    const index = state.list.findIndex((todo) => todo.id === id);

    return {
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)],
    };
};
