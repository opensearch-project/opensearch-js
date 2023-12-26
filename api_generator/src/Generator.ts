import Method from "./components/Method";
import Namespace from "./components/Namespace";
import Operation from "./components/Operation";
import SwaggerParser from "@apidevtools/swagger-parser";
import _ from "lodash";
import {OpenAPI, OpenAPIV3} from "openapi-types";
import {OperationSpec} from "./components/types";
import NamespaceRenderer from "./renderers/NamespaceRenderer";
import IndexRenderer from "./renderers/IndexRenderer";


const HTTP_VERBS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'];

export default class Generator {
    spec: OpenAPI.Document;

    constructor(spec: OpenAPI.Document) {
        this.spec = spec;
    }

    /**
     * Initialize the generator. Use this instead of the constructor directly.
     * @param spec path to the spec file
     */
    static async init(spec: string = './OpenSearch.openapi.json') {
        return new Generator(await SwaggerParser.dereference(spec));
    }

    static #clean(rootDir: string): void {
        const fs = require('fs');
        const path = require('path');
        const directory = path.join(rootDir, 'api', 'api');
        const files = fs.readdirSync(directory);
        for (const file of files) {
            if (file !== 'http.js') {
                fs.unlinkSync(path.join(directory, file));
            }
        }
    }

    generate(rootDir: string = '../'): void {
        Generator.#clean(rootDir);

        const namespaces = Object.values(this.namespaces());
        Object.values(namespaces).forEach((namespace) => {
            const renderer = new NamespaceRenderer(namespace);
            renderer.generateFile(rootDir);
        });
        const indexRenderer = new IndexRenderer(namespaces);
        indexRenderer.generateFile(rootDir);
    }

    namespaces(): _.Dictionary<Namespace> {
        const paths = Object.entries(this.spec.paths as OpenAPIV3.PathsObject);
        const operations = paths.flatMap(([path, spec]) => {
            return Object.entries(_.pick(spec, HTTP_VERBS)).map(([verb, spec]) => {
                return new Operation(path, verb, spec as OperationSpec);
            });
        });

        const methods = Object.entries(_.groupBy(operations, 'group')).map(([group, operations]) => {
            return new Method(group, operations.filter((o) => !o.ignored));
        });

        const namespaces: _.Dictionary<any> = _.groupBy(methods, (method) => method.namespace);
        Object.entries(namespaces).forEach(([name, methods]) => {
            namespaces[name] = new Namespace(name, methods);
        });
        return namespaces;
    }
}