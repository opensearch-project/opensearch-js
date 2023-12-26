import {ParameterLike, ParameterSpec} from "./types";

export default class Parameter implements ParameterLike {
    spec: ParameterSpec;

    name: string;
    type: string;
    description?: string;
    default?: any;
    required: boolean;
    deprecated: boolean;
    inPath: boolean;
    inQuery: boolean;

    constructor(spec: ParameterSpec) {
        this.spec = spec
        this.name = spec.name;
        this.type = spec.schema?.type || spec['x-data-type'] || 'UNKNOWN';
        this.description = spec.description;
        this.required = spec.required || false;
        this.deprecated = spec.deprecated || false;
        this.default = spec.schema.default;

        this.inPath = spec.in === 'path';
        this.inQuery = spec.in === 'query';
    }
}