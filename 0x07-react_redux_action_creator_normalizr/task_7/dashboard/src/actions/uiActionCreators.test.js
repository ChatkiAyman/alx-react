import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
    it('should create an action to login', () => {
        const email = 'test@example.com';
        const password = 'password123';
        const expectedAction = {
            type: LOGIN,
            user: {
                email,
                password
            }
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = {
            type: LOGOUT
        };
        expect(logout()).toEqual(expectedAction);
    });

    describe('loginRequest', () => {
        afterEach(() => {
            fetchMock.restore();
        });

        it('dispatches LOGIN and LOGIN_SUCCESS when API returns the right response', () => {
            fetchMock.getOnce('/login-success.json', {
                body: { success: true },
                headers: { 'content-type': 'application/json' }
            });

            const expectedActions = [
                { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
                { type: LOGIN_SUCCESS }
            ];
            const store = mockStore({});

            return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('dispatches LOGIN and LOGIN_FAILURE when API query fails', () => {
            fetchMock.getOnce('/login-success.json', 500);

            const expectedActions = [
                { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
                { type: LOGIN_FAILURE }
            ];
            const store = mockStore({});

            return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});