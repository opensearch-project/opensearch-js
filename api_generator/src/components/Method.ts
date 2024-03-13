import Body from "./Body";
import Operation from "./Operation";
import Parameter from "./Parameter";
import _ from "lodash";
import {snake2Camel, snake2Capitalized} from "../renderers/stringHelpers";
import {ParameterLike} from "./types";

// API Method
export default class Method {
    readonly ROOT_NAMESPACE_MAP = {
        document: new Set(['bulk', 'count', 'delete_by_query_rethrottle', 'field_caps', 'mget', 'reindex', 'reindex_rethrottle', 'update_by_query_rethrottle', 'create', 'delete_by_query', 'index', 'get', 'delete', 'exists', 'get_source', 'exists_source', 'update', 'update_by_query']),
        script: new Set(['delete_script', 'get_script', 'put_script', 'get_script_context', 'get_script_languages', 'scripts_painless_execute']),
        search: new Set(['search', 'msearch', 'msearch_template', 'render_search_template', 'search_template', 'search_shards', 'rank_eval', 'explain', 'scroll', 'clear_scroll', 'termvectors', 'mtermvectors',]),
        point_in_time: new Set(['delete_pit', 'get_all_pits', 'delete_all_pits', 'create_pit']),
        misc: new Set(['ping', 'info']),
    }

    group: string;
    name: string;
    title: string;
    prototypeName: string;
    functionName: string | undefined;
    namespace: string;
    root: boolean = false;
    operations: Array<Operation>;

    description: string;
    reference: string | undefined;
    path: string;
    pathParameters: Record<string, Parameter>
    queryParameters: Record<string, Parameter>;
    parameters: Record<string, ParameterLike>;
    body: Body | undefined;
    required: Set<string>; // names of required parameters

    constructor(group: string, operations: Array<Operation>) {
        this.group = group;
        [this.name, this.namespace] = group.split('.').reverse();
        this.#setupRootNamespace()
        this.title = snake2Capitalized(this.name);
        this.prototypeName = snake2Camel(this.name, false)
        this.functionName = this.root ? `${this.prototypeName}Api` : undefined;
        this.operations = operations;

        this.description = operations.find((o) => o.spec.description)!.spec.description!;
        this.path = _.maxBy(operations, (o) => o.path.length)!.path;
        this.reference = operations.find((o) => o.spec.externalDocs)?.spec.externalDocs?.url;

        this.pathParameters = {};
        this.queryParameters = {};
        this.parameters = {};
        this.required = new Set();
        this.body = operations.find((o) => o.body)?.body;
        this.#setupParameters();
    }

    #setupRootNamespace() {
        if (this.namespace) return;
        this.root = true;
        for (const [namespace, methods] of Object.entries(this.ROOT_NAMESPACE_MAP)) {
            if (methods.has(this.name)) {
                this.namespace = namespace;
                return;
            }
        }
        if (this.namespace === undefined) {
            throw new Error(`Could not find root namespace for method '${this.name}'`)
        }
    }

    #setupParameters() {
        this.required = new Set(this.operations.map((o) => {
            const required = o.parameters.filter((p) => p.required).map((p) => p.name);
            if (o.body?.required) required.push(o.body.name);
            return required
        }).reduce((a, b) => _.intersection(b, a)));

        const parameters: Array<Parameter | Body> = this.operations.flatMap((o) => o.parameters);
        if (this.body) parameters.push(this.body);
        parameters.forEach((p) => {
            if (p.required) p.required = this.required.has(p.name);
            if (p.inPath) this.pathParameters[p.name] = p as Parameter;
        });
        parameters.forEach((p) => {
            this.parameters[p.name] = p;
            if (p.inQuery && !this.pathParameters[p.name]) this.queryParameters[p.name] = p as Parameter;
        });
    }
}