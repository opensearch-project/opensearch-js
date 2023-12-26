import {OpenAPIV3} from "openapi-types";

export interface OperationSpec extends OpenAPIV3.OperationObject {
    'x-operation-group': string;
    'x-version-added': string;
    'x-version-removed'?: string;
    'x-version-deprecated'?: string;
    'x-deprecation-message'?: string;
    'x-ignorable'?: boolean;
}

export interface ParameterSpec extends OpenAPIV3.ParameterObject {
    schema: OpenAPIV3.SchemaObject;
    'x-data-type'?: string;
}

export interface ParameterLike {
    name: string;
    type: string;
    description?: string;
    default?: any;
    required: boolean;
    deprecated: boolean;
    inPath: boolean;
    inQuery: boolean;
}
