import { localeDefault } from '../global-config';
import { constants as C } from './index';
import { functions as F } from './index';

const reducer = (states, action) => {
    switch (action.type) {
        case C.SET_LOCALE:
            {
                if (!!action.locale) {
                    F.setACookie('zomlandLocale', action.locale, 365);
                    return {
                        ...states,
                        locale: action.locale,
                    };
                } else {
                    const localLocale = F.getACookieValueByName('zomlandLocale');
                    if (!!localLocale)
                        return {
                            ...states,
                            locale: localLocale,
                        };
                    else {
                        F.setACookie('zomlandLocale', localeDefault, 365);
                        return {
                            ...states,
                            locale: localeDefault,
                        };
                    }
                }
            }
            break;
        default:
            throw new Error('Invalid action');
    }
};

export default reducer;
