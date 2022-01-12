import Input from "../Input/Input";
import PropTypes from "prop-types";
import React from "react";
import Select from "../Select/Select";

const Query = (props) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Input
                placeholder={"search"}
                value={props.queryText}
                onChange={props.onChangeQueryText}
            />
            <Select
                name={"done"}
                style={{
                    width: 55,
                }}
                options={[
                    { value: "any", text: "Any" },
                    { value: "done", text: "Done" },
                    { value: "todo", text: "Todo" },
                ]}
                value={props.queryDone}
                onChange={props.onChangeQueryDone}
            />
        </div>
    );
};

Query.propTypes = {
    onChangeQueryText: PropTypes.func.isRequired,
    onChangeQueryDone: PropTypes.func.isRequired,
    queryText: PropTypes.string.isRequired,
    queryDone: PropTypes.string.isRequired,
};

export default Query;
