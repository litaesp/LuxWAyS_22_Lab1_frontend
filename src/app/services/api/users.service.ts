import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { UserAdminView } from '../model/user-admin-view.model';
import { InlineResponse2003 } from '../model/inlineResponse2003';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { InlineResponse2005 } from '../model/inlineResponse2005';
import { UsernameResponse } from '../model/usernameResponse';
import { InlineResponse400 } from '../model/inlineResponse400';
import { UsernameEmailBody } from '../model/usernameEmailBody';
import { UsernamePasswordBody } from '../model/usernamePasswordBody';
import { Credential } from '../model/credentials';
import { User } from '../model/user.model';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    roleAs: string = "user";
    protected basePath = 'http://localhost:5000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, public router: Router) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Retrieves all details for all users
     * Displays all details for all users
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersDebug(observe?: 'body', reportProgress?: boolean): Observable<Array<InlineResponse2003>>;
    public apiViewsUsersDebug(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<InlineResponse2003>>>;
    public apiViewsUsersDebug(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<InlineResponse2003>>>;
    public apiViewsUsersDebug(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<InlineResponse2003>>('get', `${this.basePath}/users/v1/_debug`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes user by username (Only Admins)
     * Deletes user by username (Only Admins)
     * @param username Delete username
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersDeleteUser(username: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2004>;
    public apiViewsUsersDeleteUser(username: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2004>>;
    public apiViewsUsersDeleteUser(username: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2004>>;
    public apiViewsUsersDeleteUser(username: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling apiViewsUsersDeleteUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<InlineResponse2004>('delete', `${this.basePath}/users/v1/${encodeURIComponent(String(username))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves all users
     * Displays all users with basic information
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersGetAllUsers(observe?: 'body', reportProgress?: boolean): Observable<Array<UserAdminView>>;
    public apiViewsUsersGetAllUsers(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UserAdminView>>>;
    public apiViewsUsersGetAllUsers(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UserAdminView>>>;
    public apiViewsUsersGetAllUsers(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<UserAdminView>>('get', `${this.basePath}/users/v1`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves user by username
     * Displays user by username
     * @param username retrieve username data
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersGetByUsername(username: string, observe?: 'body', reportProgress?: boolean): Observable<UsernameResponse>;
    public apiViewsUsersGetByUsername(username: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsernameResponse>>;
    public apiViewsUsersGetByUsername(username: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsernameResponse>>;
    public apiViewsUsersGetByUsername(username: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling apiViewsUsersGetByUsername.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<UsernameResponse>('get', `${this.basePath}/users/v1/${encodeURIComponent(String(username))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

        /**
     * Retrieves user by id
     * Displays user by username
     * @param username retrieve username data
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
         public apiViewsUsersGetById(id: string, observe?: 'body', reportProgress?: boolean): Observable<UsernameResponse>;
         public apiViewsUsersGetById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsernameResponse>>;
         public apiViewsUsersGetById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsernameResponse>>;
         public apiViewsUsersGetById(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
     
             if (id === null || id === undefined) {
                 throw new Error('Required parameter id was null or undefined when calling apiViewsUsersGetByUsername.');
             }
     
             let headers = this.defaultHeaders;
     
             // to determine the Accept header
             let httpHeaderAccepts: string[] = [
                 'application/json'
             ];
             const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
             if (httpHeaderAcceptSelected != undefined) {
                 headers = headers.set('Accept', httpHeaderAcceptSelected);
             }
     
             // to determine the Content-Type header
             const consumes: string[] = [
             ];
     
             return this.httpClient.request<UsernameResponse>('get', `${this.basePath}/users/v1/${encodeURIComponent(String(id))}/account`,
                 {
                     withCredentials: this.configuration.withCredentials,
                     headers: headers,
                     observe: observe,
                     reportProgress: reportProgress
                 }
             );
         }
     
    /**
     * Login to VAmPI
     * Login to VAmPI
     * @param body Username of the user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersLoginUser(body: Credential, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2005>;
    public apiViewsUsersLoginUser(body: Credential, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2005>>;
    public apiViewsUsersLoginUser(body: Credential, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2005>>;
    public apiViewsUsersLoginUser(body: Credential, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiViewsUsersLoginUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<InlineResponse2005>('post', `${this.basePath}/users/v1/login`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Register new user
     * Register new user
     * @param body Username of the user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersRegisterUser(body: User, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2004>;
    public apiViewsUsersRegisterUser(body: User, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2004>>;
    public apiViewsUsersRegisterUser(body: User, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2004>>;
    public apiViewsUsersRegisterUser(body: User, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiViewsUsersRegisterUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<InlineResponse2004>('post', `${this.basePath}/users/v1/register`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update users email
     * Update a single users email
     * @param body field to update
     * @param username username to update email
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersUpdateEmail(body: UsernameEmailBody, username: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiViewsUsersUpdateEmail(body: UsernameEmailBody, username: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiViewsUsersUpdateEmail(body: UsernameEmailBody, username: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiViewsUsersUpdateEmail(body: UsernameEmailBody, username: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiViewsUsersUpdateEmail.');
        }

        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling apiViewsUsersUpdateEmail.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put', `${this.basePath}/users/v1/${encodeURIComponent(String(username))}/email`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update users password
     * Update users password
     * @param body field to update
     * @param username username to update password
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiViewsUsersUpdatePassword(body: UsernamePasswordBody, username: string, isRecovery: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiViewsUsersUpdatePassword(body: UsernamePasswordBody, username: string, isRecovery: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiViewsUsersUpdatePassword(body: UsernamePasswordBody, username: string, isRecovery: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiViewsUsersUpdatePassword(body: UsernamePasswordBody, username: string, isRecovery: boolean = false, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiViewsUsersUpdatePassword.');
        }

        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling apiViewsUsersUpdatePassword.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put', `${this.basePath}/users/v1/${encodeURIComponent(String(username))}/${encodeURIComponent(Boolean(isRecovery))}/password`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
    public apiViewsUsersUpdateAccount(body: any, userId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiViewsUsersUpdateEmail.');
        }

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiViewsUsersUpdateAccount.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put', `${this.basePath}/users/v1/${encodeURIComponent(String(userId))}/account`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
    getToken() {
        return localStorage.getItem('access_token');
    }

    get isLoggedIn(): boolean {
        let authToken = localStorage.getItem('access_token');
        if (authToken && this.tokenExpired(authToken)) {
            let removeToken = localStorage.removeItem('access_token');
            if (removeToken == null) {
                return false;
            }
        } else if (authToken) {
            return true;
        }
        return false;
    }
    doLogout() {
        let removeToken = localStorage.removeItem('access_token');
        if (removeToken == null) {
            this.router.navigate(['login']);
        }
        this.roleAs = "";
    }

    private tokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }

    public getRole() {
        if (this.isLoggedIn) {
            let authToken = localStorage.getItem('access_token');
            if (authToken) {
                const parseToken = this.getDecodedAccessToken(authToken);
                if (parseToken && parseToken.admin) {
                    this.roleAs = 'admin'
                }
            }
        }
        return this.roleAs;
    }

    public getUsername() {
        if (this.isLoggedIn) {
            let authToken = localStorage.getItem('access_token');
            if (authToken) {
                const parseToken = this.getDecodedAccessToken(authToken);
                return parseToken.sub;
            }
        }
    }

    public getUserId() {
        if (this.isLoggedIn) {
            let authToken = localStorage.getItem('access_token');
            if (authToken) {
                const parseToken = this.getDecodedAccessToken(authToken);
                return parseToken.id;
            }
        }
    }

    private getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }
}
