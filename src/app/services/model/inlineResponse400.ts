/**
 * VAmPI
 * OpenAPI v3 specs for VAmPI
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface InlineResponse400 { 
    status?: InlineResponse400.StatusEnum;
    message?: string;
}
export namespace InlineResponse400 {
    export type StatusEnum = 'fail';
    export const StatusEnum = {
        Fail: 'fail' as StatusEnum
    };
}