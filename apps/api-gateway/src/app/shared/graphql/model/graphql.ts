
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract students(): Nullable<Nullable<Student>[]> | Promise<Nullable<Nullable<Student>[]>>;
}

export abstract class IMutation {
    abstract login(): Nullable<Auth> | Promise<Nullable<Auth>>;

    abstract refreshToken(): Nullable<Auth> | Promise<Nullable<Auth>>;

    abstract logout(): Nullable<Auth> | Promise<Nullable<Auth>>;
}

export class Auth {
    token?: Nullable<string>;
}

export class Student {
    studentId?: Nullable<string>;
    studentName?: Nullable<string>;
}

type Nullable<T> = T | null;
