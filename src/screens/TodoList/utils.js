const filter = (state) => (todo) => {
    let stringMatch = false;
    let doneMatch = false;

    if (state.queryDone === "any") {
        doneMatch = true;
    } else {
        if (state.queryDone === "done" && todo.done) {
            doneMatch = true;
        } else if (state.queryDone === "todo" && !todo.done) {
            doneMatch = true;
        }
    }

    if (state.queryText === "") {
        stringMatch = true;
    } else {
        const res = todo.text.match(new RegExp(state.queryText, "i"));

        if (res !== null && res.length > 0) {
            stringMatch = true;
        }
    }

    return doneMatch && stringMatch;
};

export { filter };
