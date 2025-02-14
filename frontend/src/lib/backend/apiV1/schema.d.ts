/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/posts/{postId}/comments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 댓글 상세
         * @description 게시글의 댓글 상세 정보를 가져옵니다.
         */
        get: operations["getItem"];
        /**
         * 댓글 수정
         * @description 게시글의 댓글을 수정합니다.
         */
        put: operations["modify"];
        post?: never;
        /**
         * 댓글 삭제
         * @description 게시글의 댓글을 삭제합니다.
         */
        delete: operations["delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 글 단건 조회
         * @description 비밀글은 작성자만 조회 가능
         */
        get: operations["getItem_1"];
        /**
         * 글 수정
         * @description 작성자 및 관리자만 글 수정 가능
         */
        put: operations["modify_1"];
        post?: never;
        /**
         * 글 삭제
         * @description 작성자 및 관리자만 글 삭제 가능
         */
        delete: operations["delete_1"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 글 목록 조회
         * @description 페이징 처리와 검색 기능
         */
        get: operations["getItems"];
        put?: never;
        /**
         * 글 작성
         * @description 로그인한 사용자만 글 작성 가능
         */
        post: operations["write"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/{postId}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 댓글 목록
         * @description 게시글의 댓글 목록을 가져옵니다.
         */
        get: operations["getItems_1"];
        put?: never;
        /**
         * 댓글 작성
         * @description 게시글에 댓글을 작성합니다.
         */
        post: operations["write_1"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 로그인
         * @description 로그인 성공 시 apiKey와 AccessToken 반환. 쿠키로도 반환
         */
        post: operations["login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/join": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** 회원가입 */
        post: operations["join"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/statistics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 통계 조회 */
        get: operations["getStatistics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/mine": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 내 글 목록 조회
         * @description 페이징 처리와 검색 기능
         */
        get: operations["getMines"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 내 정보 조회 */
        get: operations["me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** 로그아웃 */
        delete: operations["logout"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        RsDataVoid: {
            code: string;
            msg: string;
            data: Record<string, never>;
        };
        ModifyReqBody: {
            content?: string;
        };
        Empty: Record<string, never>;
        RsDataEmpty: {
            code: string;
            msg: string;
            data: components["schemas"]["Empty"];
        };
        PostWithContentDto: {
            /** Format: int64 */
            id: number;
            /** Format: date-time */
            createdDate: string;
            /** Format: date-time */
            modifiedDate: string;
            title: string;
            /** Format: int64 */
            authorId: number;
            content: string;
            authorName: string;
            published: boolean;
            listed: boolean;
        };
        RsDataPostWithContentDto: {
            code: string;
            msg: string;
            data: components["schemas"]["PostWithContentDto"];
        };
        WriteReqBody: {
            title: string;
            content: string;
            published?: boolean;
            listed?: boolean;
        };
        LoginReqBody: {
            username: string;
            password: string;
        };
        LoginResBody: {
            item: components["schemas"]["MemberDto"];
            apiKey: string;
            accessToken: string;
        };
        MemberDto: {
            /** Format: int64 */
            id: number;
            /** Format: date-time */
            createdDate: string;
            /** Format: date-time */
            modifiedDate: string;
            nickname: string;
        };
        RsDataLoginResBody: {
            code: string;
            msg: string;
            data: components["schemas"]["LoginResBody"];
        };
        JoinReqBody: {
            username: string;
            password: string;
            nickname: string;
        };
        RsDataMemberDto: {
            code: string;
            msg: string;
            data: components["schemas"]["MemberDto"];
        };
        PageDto: {
            items: components["schemas"]["PostDto"][];
            /** Format: int32 */
            totalPages: number;
            /** Format: int32 */
            totalItems: number;
            /** Format: int32 */
            currentPageNo: number;
            /** Format: int32 */
            pageSize: number;
        };
        PostDto: {
            /** Format: int64 */
            id: number;
            /** Format: date-time */
            createdDate: string;
            /** Format: date-time */
            modifiedDate: string;
            title: string;
            /** Format: int64 */
            authorId: number;
            authorName: string;
            published: boolean;
            listed: boolean;
        };
        RsDataPageDto: {
            code: string;
            msg: string;
            data: components["schemas"]["PageDto"];
        };
        CommentDto: {
            /** Format: int64 */
            id: number;
            content: string;
            /** Format: int64 */
            postId: number;
            /** Format: int64 */
            authorId: number;
            authorName: string;
            /** Format: date-time */
            createdTime: string;
            /** Format: date-time */
            modifiedTime: string;
        };
        RsDataStatisticsResBody: {
            code: string;
            msg: string;
            data: components["schemas"]["StatisticsResBody"];
        };
        StatisticsResBody: {
            /** Format: int64 */
            postCount: number;
            /** Format: int64 */
            postPublishedCount: number;
            /** Format: int64 */
            postListedCount: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["CommentDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    modify: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModifyReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataEmpty"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataEmpty"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    getItem_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPostWithContentDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    modify_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModifyReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPostWithContentDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    delete_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataEmpty"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    getItems: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                keywordType?: "title" | "content";
                keyword?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPageDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    write: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WriteReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPostWithContentDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    getItems_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["CommentDto"][];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    write_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WriteReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataEmpty"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataLoginResBody"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    join: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["JoinReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataMemberDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    getStatistics: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataStatisticsResBody"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    getMines: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                keywordType?: "title" | "content";
                keyword?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPageDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    me: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataMemberDto"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    logout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataEmpty"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
}
