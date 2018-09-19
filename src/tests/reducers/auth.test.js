import authReducer from "../../reducers/auth";

test("should correctly set login state", () => {
  const action = {
    type: "LOGIN",
    uid: "123"
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: "123"
  });
});

test("should correctly set logout state", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "123" }, action);
  expect(state).toEqual({});
});
