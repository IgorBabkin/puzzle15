import {GridActions} from "../../actions/grid.actions";
import {stepsReducer} from "../steps.reducer";

describe('steps reducer', () => {
    it('should increment steps on update grid', function () {
        const state = 0;
        const expected = 1;

        const actual = stepsReducer(state, GridActions.update(2));

        expect(actual).toBe(expected);
    });

    it('should set 0 on generate grid', function () {
        const state = 1;
        const expected = 0;

        const actual = stepsReducer(state, GridActions.generateNew());

        expect(actual).toBe(expected);
    });
});