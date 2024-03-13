import {OpenAPIV3} from "openapi-types";
import {ParameterLike} from "./types";

export default class Body implements ParameterLike {
    spec: OpenAPIV3.RequestBodyObject;

    name = 'body';
    type: string;
    description?: string;
    default?: any;
    required: boolean;
    deprecated: boolean;
    inPath = false;
    inQuery = false;

    bulk: boolean;

    constructor(spec: OpenAPIV3.RequestBodyObject) {
        this.spec = spec;
        const schema = (spec.content['application/json'].schema || spec.content['application/x-ndjson'].schema) as OpenAPIV3.SchemaObject;
        this.default = schema?.default;
        this.required = !!spec.required;
        this.deprecated = !!schema?.deprecated;
        this.type = this.#parseType(spec.content);
        this.description = spec.description || schema.description;
        this.bulk = this.type === 'object[]';
    }

    #parseType(content: Record<string, any>): string {
        if (content['application/x-ndjson'] || content['application/json'].schema['x-serialize']! === 'bulk') {
            return 'object[]';
        }
        return content['application/json'].schema.type;
    }
}