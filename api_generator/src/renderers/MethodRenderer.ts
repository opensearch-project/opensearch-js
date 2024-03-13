import BaseRenderer from "./BaseRenderer";
import Body from "../components/Body";
import Method from "../components/Method";
import Namespace from "../components/Namespace";
import Parameter from "../components/Parameter";
import _ from "lodash";
import {ParameterLike} from "../components/types";

export default class MethodRenderer extends BaseRenderer {
    protected templateFile = 'method.mustache';
    private namespace: Namespace;
    private method: Method;

    constructor(namespace: Namespace, method: Method) {
        super();
        this.namespace = namespace;
        this.method = method;
    }

    view(): Record<string, any> {
        return {
            method_description: this.method.description,
            reference: `{@link ${this.method.reference} - ${this.namespace.title} - ${this.method.title}}`,
            jsDoc_namespace: this.namespace.jsDocName,
            prototype_assignment: this.#prototype_assignment(),
            function_name: this.method.functionName,
            params_container: this.method.required.size == 0 ? '[params]' : 'params',
            params_container_description: Object.values(this.method.parameters).length == 0 ? ' - (Unused)' : undefined,
            parameter_descriptions: this.#parameter_descriptions(),
            path_components: this.#path_components(),
            http_verb: this.#http_verb(),
            return_type: '{{abort: function(), then: function(), catch: function()}|Promise<never>|*}',
            required_params: Array.from(this.method.required),
            path_params: Object.values(this.method.pathParameters).map((p) => {
                return {name: p.name}
            }),
            bulk_body: this.method.body?.bulk
        }
    }

    #parameter_descriptions(): Array<Record<string, any>> {
        return Object.values(this.method.parameters).map((p) => {
            return {
                type: `{${p.type}}`,
                jsdoc_name: this.#paramJsDocName(p),
                deprecated: p.deprecated,
                description: p.description ? `- ${p.description}` : '',
            }
        });
    }

    #paramJsDocName(p: ParameterLike): string {
        if (p.required) return `params.${p.name}`;
        return `[params.${p.name}${p.default ? `=${p.default}` : ''}]`;
    }

    #path_components() {
        return this.method.path
            .split('/')
            .filter((c) => c !== '')
            .map((c) => c.startsWith('{') ? c.slice(1, -1) : `'${c}'`)
            .join(', ');
    }

    #http_verb(): string {
        let verbs = _.uniq(this.method.operations.map((operation) => operation.verb)).sort();
        if (_.isEqual(verbs, ['GET', 'POST'])) return "body ? 'POST' : 'GET'";
        if (_.isEqual(verbs, ['POST', 'PUT'])) {
            const optional = (Object.values(this.method.pathParameters)).find((p) => !p.required)?.name!
            return `${optional} === undefined ? 'POST' : 'PUT'`;
        }
        return `'${verbs[0]}'`;
    }

    #prototype_assignment(): string {
        if (this.namespace.root) return '';
        return `${this.namespace.functionName}.prototype.${this.method.prototypeName} = `;
    }
}