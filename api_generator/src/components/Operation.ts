import {OperationSpec, ParameterSpec} from "./types";
import Parameter from "./Parameter";
import Body from "./Body";
import {OpenAPIV3} from "openapi-types";
export default class Operation {
    spec: OperationSpec;
    ignored: boolean;
    group: string; // operation group
    path: string; // path to endpoint
    verb: string; // HTTP verb
    parameters: Array<Parameter>;
    body: Body | undefined;

    constructor(path: string, verb: string, spec: OperationSpec) {
        this.spec = spec;
        this.ignored = spec['x-ignorable'] || false;
        this.path = path;
        this.verb = verb.toUpperCase();
        this.group = spec['x-operation-group'];
        this.parameters = (spec.parameters as ParameterSpec[] || []).map((p) => new Parameter(p));
        this.body = spec.requestBody ? new Body(spec.requestBody as OpenAPIV3.RequestBodyObject) : undefined;
    }
}