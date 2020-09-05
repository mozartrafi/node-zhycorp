<<<<<<< HEAD
import { get } from "superagent";
import { getOwner } from "./Bot";
import type { Bot } from "./Types";

export class ZhycorpWrapper {
    readonly baseURL = "https://bot.zhycorp.xyz";
=======
/* eslint-disable @typescript-eslint/naming-convention */
import { get } from "superagent";
import { getOwner } from "./api/Bot";
import ZhycorpError from "./util/ZhycorpError";
import type { Bot } from "./interfaces";

export class ZhycorpWrapper {
    private readonly baseURL = "https://bot.zhycorp.xyz";
>>>>>>> 4e25000f8c49191cd7e07abc24abd015d70da1e4
    public async getBot(id: string): Promise<Bot> {
        const USER_PATTERN = /\d{17,19}/g;
        if (!USER_PATTERN.test(id)) throw Error("Invalid user id!");

        const { body: result } = await get(this.baseURL);
<<<<<<< HEAD

        if (!result[id]) throw Error("Not Found");
        const bot = result[id];
        const user = await getOwner(id);
        return {
=======
        if (!result[id]) throw new ZhycorpError("Not Found");
        const bot = result[id];
        const user = await getOwner(id);
        return {
            approved: bot.approved,
>>>>>>> 4e25000f8c49191cd7e07abc24abd015d70da1e4
            botID: bot.botID,
            owner: {
                userID: bot.ownerID,
                userTag: user
            },
            prefix: bot.prefix,
            registered: bot.registered
        };
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 4e25000f8c49191cd7e07abc24abd015d70da1e4
