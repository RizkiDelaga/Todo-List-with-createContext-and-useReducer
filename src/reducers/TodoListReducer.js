const initialState = {
    data: [],
    isLoading: false,
};

function TodoListReducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading: !state.isLoading
            };

        case "FETCH_DONE":
            return {
                ...state,
                data: action.payload
            };

        case "ADD_TODO":
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            };

        case "EDIT_TODO":
            const indexData = state.data.findIndex(
                item => item.id === action.payload.id
            );

            const dataTerbaru = state.data;

            if (indexData !== -1) {
                dataTerbaru[indexData].title = action.payload.title;
                dataTerbaru[indexData].description = action.payload.description;
            }

            return {
                ...state,
                data: dataTerbaru,
            };
    
        case "DELETE_TODO":
            const dataHasilFilter = state.data.filter(item => item.id !== action.payload);

            return {
                ...state,
                data: dataHasilFilter,
            };

        default:
            throw new Error();
    }
}

export { TodoListReducer, initialState };