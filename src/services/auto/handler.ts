import { Callback, Context, Handler } from 'aws-lambda';
import {BaseResponse} from './interfaces/base_response.interface';

import * as DB from '../../storage/models';

// Individual Model declaration
const Jarvis2 = DB['Jarvis2'];

export const hello: Handler = async (event: any, context: Context, callback: Callback) => {
    // const response: BaseResponse = {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: Math.floor(Math.random() * 10)
    //     })
    // };
    //
    // callback(undefined, response);

    context.callbackWaitsForEmptyEventLoop = false;

    const templates = await Jarvis2.email_templates.findAll();
    const response: BaseResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
            data: templates
        }),
    };

    callback(null, response);
};
