"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    afterFindOne(event) {
        if (event.result.avatar)
            event.result.avatar = `${process.env.APP_API_URL}${event.result.avatar}`;
    },
    afterFindMany(event) {
        event.result.forEach(result => {
            if (result.avatar)
                result.avatar = `${process.env.APP_API_URL}${result.avatar}`;
        });
    },
};
