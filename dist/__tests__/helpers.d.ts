import { HttpCachingProxy } from '@loopback/http-caching-proxy';
import { Todo } from '../models/index';
import { GeoPoint } from '../services/geocoder.service';
export declare function givenTodo(todo?: Partial<Todo>): Todo;
export declare const aLocation: {
    address: string;
    geopoint: GeoPoint;
    readonly geostring: string;
};
export declare function getProxiedGeoCoderConfig(proxy: HttpCachingProxy): {
    "connector": string;
    "options": {
        "headers": {
            "accept": string;
            "content-type": string;
        };
    };
    "operations": {
        "template": {
            "method": string;
            "url": string;
            "query": {
                "format": string;
                "benchmark": string;
                "address": string;
            };
            "responsePath": string;
        };
        "functions": {
            "geocode": string[];
        };
    }[];
} & {
    options: {
        proxy: string;
        tunnel: boolean;
    };
};
export { HttpCachingProxy };
export declare function givenCachingProxy(): Promise<HttpCachingProxy>;
